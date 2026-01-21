const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");
        menuBtn?.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

        const revealTargets = document.querySelectorAll("section > div");
        revealTargets.forEach((el) => el.classList.add("reveal"));
        const onScroll = () => {
            const trigger = window.innerHeight * 0.9;
            revealTargets.forEach((el) => {
                const top = el.getBoundingClientRect().top;
                if (top < trigger) {
                    el.classList.add("animate-fadeUp");
                    el.classList.remove("reveal");
                }
            });
        };
        window.addEventListener("scroll", onScroll);
        onScroll();

        const initCarousel = (name, auto = false, interval = 3500) => {
            const track = document.querySelector(`[data-carousel="${name}"]`);
            const buttons = document.querySelectorAll(`[data-carousel-btn="${name}"]`);
            const dotsWrap = document.querySelector(`[data-carousel-dots="${name}"]`);
            if (!track) return;

            const slides = Array.from(track.children);
            let slideOffsets = [];

            const updateOffsets = () => {
                slideOffsets = slides.map((slide) => slide.offsetLeft);
            };

            const setActiveDot = (index) => {
                if (!dotsWrap) return;
                const dots = dotsWrap.querySelectorAll("button");
                dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
            };

            if (dotsWrap) {
                dotsWrap.innerHTML = "";
                slides.forEach((_, index) => {
                    const dot = document.createElement("button");
                    dot.type = "button";
                    dot.className = "carousel-dot";
                    dot.addEventListener("click", () => {
                        updateOffsets();
                        track.scrollTo({ left: slideOffsets[index] || 0, behavior: "smooth" });
                        setActiveDot(index);
                    });
                    dotsWrap.appendChild(dot);
                });
                setActiveDot(0);
            }

            buttons.forEach((btn) => {
                btn.addEventListener("click", () => {
                    const dir = Number(btn.getAttribute("data-dir")) || 1;
                    updateOffsets();
                    const current = Math.round(track.scrollLeft / (slides[0]?.clientWidth || 1));
                    const next = Math.min(Math.max(current + dir, 0), slides.length - 1);
                    track.scrollTo({ left: slideOffsets[next] || 0, behavior: "smooth" });
                    setActiveDot(next);
                });
            });

            track.addEventListener("scroll", () => {
                if (!slideOffsets.length) updateOffsets();
                const current = slideOffsets.reduce((closest, offset, index) => {
                    const distance = Math.abs(track.scrollLeft - offset);
                    return distance < closest.distance ? { index, distance } : closest;
                }, { index: 0, distance: Infinity });
                setActiveDot(current.index);
            });

            window.addEventListener("resize", updateOffsets);
            updateOffsets();

            if (auto) {
                setInterval(() => {
                    updateOffsets();
                    const current = slideOffsets.reduce((closest, offset, index) => {
                        const distance = Math.abs(track.scrollLeft - offset);
                        return distance < closest.distance ? { index, distance } : closest;
                    }, { index: 0, distance: Infinity });
                    const next = current.index + 1 >= slides.length ? 0 : current.index + 1;
                    track.scrollTo({ left: slideOffsets[next] || 0, behavior: "smooth" });
                    setActiveDot(next);
                }, interval);
            }
        };

        initCarousel("actus", true, 6500);

        const initCounters = () => {
            const counters = document.querySelectorAll("[data-counter]");
            if (!counters.length) return;

            const animate = (el) => {
                const target = Number(el.getAttribute("data-target")) || 0;
                const suffix = el.getAttribute("data-suffix") || "";
                const duration = 1800;
                const start = performance.now();

                const tick = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const value = Math.floor(progress * target);
                    el.textContent = value.toLocaleString("fr-FR") + suffix;
                    if (progress < 1) requestAnimationFrame(tick);
                };
                requestAnimationFrame(tick);
            };

            const observer = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animate(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.4 });

            counters.forEach((el) => observer.observe(el));
        };

        initCounters();

        const backToTop = document.getElementById("backToTop");
        const onScrollTop = () => {
            if (!backToTop) return;
            if (window.scrollY > 500) {
                backToTop.classList.add("is-visible");
            } else {
                backToTop.classList.remove("is-visible");
            }
        };
        backToTop?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        window.addEventListener("scroll", onScrollTop);
        onScrollTop();

document.addEventListener("DOMContentLoaded", () => {
        const titleEl = document.getElementById("region-title");
        const textEl = document.getElementById("region-text");
        const dotEl = document.getElementById("region-dot");

        if (!titleEl || !textEl) return;

        fetch("assets/regions.json")
            .then((response) => response.json())
            .then((regions) => {
                const shapes = Array.from(document.querySelectorAll("#mapLayer .region-shape"));
                if (!shapes.length) return;

                shapes.forEach((shape, index) => {
                    const region = regions[index];
                    shape.style.cursor = "pointer";
                    if (!region) return;

                    shape.addEventListener("click", () => {
                        shapes.forEach((item) => {
                            item.removeAttribute("data-selected");
                            item.style.fill = "";
                            item.style.stroke = "";
                            item.style.strokeWidth = "";
                            item.style.opacity = "";
                            item.style.transform = "";
                            item.style.transformBox = "";
                            item.style.transformOrigin = "";
                        });

                        shape.setAttribute("data-selected", "true");
                        shape.style.fill = "#1173a2";
                        shape.style.opacity = "1";
                        shape.style.transformBox = "fill-box";
                        shape.style.transformOrigin = "center";
                        shape.style.transform = "scale(1.03)";

                        titleEl.textContent = region.title;
                        textEl.textContent = region.text;
                        if (dotEl) {
                            dotEl.classList.remove("opacity-40");
                            dotEl.classList.add("opacity-100");
                        }
                    });
                });

                const defaultIndex = regions.findIndex((region) => region.id === "rabat-sale-kenitra");
                const defaultShape = shapes[defaultIndex];
                if (defaultShape) defaultShape.click();
            });
        });


            const tabs = document.querySelectorAll(".tab-btn");
            const contents = document.querySelectorAll(".tab-content");

            tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => {
                t.classList.remove("active", "border-brand-teal", "text-brand-deep");
                t.classList.add("text-slate-500");
                });

                contents.forEach(c => c.classList.add("hidden"));

                tab.classList.add("active", "border-brand-teal", "text-brand-deep");
                tab.classList.remove("text-slate-500");

                document.getElementById(tab.dataset.tab).classList.remove("hidden");
            });
            });