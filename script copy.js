const services = [
  {
    id: 1,
    title: "LES PRESTATIONS",
    image: "Extranet_files/prers01.png",
    span: "col-start-1 row-start-1 row-span-2",
    background: "#b0d6e0"
  },
  {
    id: 2,
    title: "ZOOM SUR LES PARTENARIATS",
    image: "Extranet_files/prers02.png",
    span: "col-start-1 row-start-3 row-span-4",
    background: "#e6c027",
    link: "#partenaires"
  },
  {
    id: 3,
    title: "Prévoyance médico-sociale",
    description: "Soutenir nos adhérents face aux aléas de la santé",
    image: "Extranet_files/Prevoyance.png",
    span: "col-start-2 row-start-1 row-span-3",
    background: "#03443d",
    link: "Assurance.html"
  },
  {
    id: 4,
    title: "Accès au logement",
    description: "Accompagner nos adhérents dans leurs projets de logement",
    image: "Extranet_files/prers04.png",
    span: "col-start-2 row-start-4 row-span-3",
    background: "#e2e2e2",
    link: "logement.html"
  },
  {
    id: 5,
    title: "Culture, loisirs et voyages",
    description: "Accès aux prestations loisirs et bien-être",
    image: "Extranet_files/prers07.png",
    span: "col-start-3 row-start-1 row-span-3",
    background: "#1482b8",
    link: "culture.html"
  },
  {
    id: 6,
    title: "Appui au Projets Personnels",
    description: "Accompagnement des projets personnels",
    image: "Extranet_files/prers05.png",
    span: "col-start-3 row-start-4 row-span-3",
    background: "#77a290",
    link: "projets-personnels.html"
  },
  {
    id: 7,
    title: "Formation et scolarisation",
    description: "Encourager l’excellence scolaire",
    image: "Extranet_files/prers03.png",
    span: "col-start-4 row-start-1 row-span-2",
    background: "#b0d6e0",
    link: "formation.html"
  },
  {
    id: 8,
    title: "Education et culture",
    description: "Bénéficier des partenariats éducatifs",
    image: "Extranet_files/prers06.png",
    span: "col-start-4 row-start-3 row-span-4",
    background: "#f9e9cb",
    link: "education.html"
  }
];

const servicesGrid = document.getElementById("servicesGrid");

if (servicesGrid) {
  services.forEach(service => {
    const isStaticTitle = service.id === 1;

    // WRAPPER
    const wrapper = isStaticTitle
      ? document.createElement("div")
      : document.createElement("a");

    if (!isStaticTitle) {
      wrapper.href = service.link;
    }

    wrapper.className = `${service.span} block h-full`;

    // CARD
    const card = document.createElement("div");
    card.style.backgroundColor = service.background;

    if (service.id === 8) {
      card.style.backgroundImage = "url('Extranet_files/bg-edu.jpg')";
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
    }

    /* ==========================
       🔒 BLOC STATIQUE (ID 1)
    ========================== */
if (isStaticTitle) {
  card.className =
    "relative overflow-visible rounded-2xl border border-gray-200 flex flex-col items-center text-center px-6 py-3 h-full pt-20 cursor-default select-none";
card.classList.add("is-static");

      card.innerHTML = `
        <div class="absolute -top-12 left-1/2 -translate-x-1/2 z-20 w-24 h-24 flex items-center justify-center">
          <img src="${service.image}" class="rounded-full border-4 border-white" />
        </div>
        <h3 class=" font-subtitle  text-3xl font-bold text-[#0f3c3c]">
          ${service.title}
        </h3>
      `;
    }

    /* ==========================
       🎯 ZOOM (ID 2)
    ========================== */
    else if (service.id === 2) {
      card.className =
        "relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col justify-between px-6 py-3 h-full transition-all duration-300 cursor-pointer hover:scale-[1.02]";

      card.innerHTML = `
        <div class="flex flex-col justify-end h-full text-white">
          <img src="${service.image}" class="object-contain image-prestation mb-2" />
          <h3 class="text-2xl font-semibold mb-6">${service.title}</h3>
          <div class="w-12 h-12 rounded-full border border-white flex items-center justify-center">
            <i data-lucide="arrow-right"></i>
          </div>
        </div>
      `;
    }

    /* ==========================
       🔹 AUTRES CARTES
    ========================== */
    else {
      card.className =
        "relative overflow-hidden rounded-2xl border border-gray-200 flex flex-col justify-between px-6 py-3 h-full transition-all duration-300 cursor-pointer hover:scale-[1.02]";

      card.innerHTML = `
        <div class="flex justify-end mb-1">
          <span class="p-2 rounded-full flex items-center justify-center
            ${
              [3,5,8].includes(service.id)
                ? 'bg-[#e6c027]'
                : [4,7].includes(service.id)
                ? 'bg-[#0f3c3c]'
                : service.id === 6
                ? 'bg-white'
                : 'bg-white/20'
            }">
            <i data-lucide="plus"
              class="w-5 h-5 ${
                service.id === 6
                  ? 'text-[#0f3c3c]'
                  : 'text-white'
              }">
            </i>
          </span>
        </div>

        <div>
          <div class="mb-1 inline-flex rounded-lg">
            <img src="${service.image}" class="object-contain image-prestation" />
          </div>

          <h3 class="text-xl font-semibold mb-2 ${
            [4,7,8].includes(service.id)
              ? "text-[#0f3c3c]"
              : "text-white"
          }">
            ${service.title}
          </h3>

          <p class="text-sm ${
            [4,7,8].includes(service.id)
              ? "text-[#0f3c3c]/80"
              : "text-white/80"
          }">
            ${service.description || ""}
          </p>
        </div>
      `;
    }

    wrapper.appendChild(card);
    servicesGrid.appendChild(wrapper);
  });

  lucide.createIcons();
}
