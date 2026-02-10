tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    teal: "#13887C",
                    blue: "#1482b8",
                    deep: "#0a3b37",
                    gold: "#e6c027",
                    red: "#be3c3f",
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Inter", "sans-serif"],
                body: ["Poppins", "sans-serif"],      // pour le texte courant
                subtitle: ["Lato", "sans-serif"],    // pour les sous-titres
                title: ["Nunito", "sans-serif"],     // pour les titres / accroches
            },
            boxShadow: {
                lift: "0 24px 60px rgba(10, 59, 55, 0.18)",
                glow: "0 18px 45px rgba(20, 130, 184, 0.25)",
            },
            backgroundImage: {
                haze: "radial-gradient(circle at 15% 15%, rgba(20,130,184,0.22), transparent 38%), radial-gradient(circle at 85% 25%, rgba(19,136,124,0.28), transparent 36%), linear-gradient(180deg, #f7fbfa 0%, #eef6f4 55%, #f7faf9 100%)",
                ribbon: "linear-gradient(115deg, rgba(19,136,124,0.1), rgba(20,130,184,0.14))",
            },
            keyframes: {
                floaty: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" }
                },
                fadeUp: {
                    "0%": { opacity: 0, transform: "translateY(18px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" }
                },

                /* ✅ AJOUT : Slide depuis la gauche */
                slideLeft: {
                    "0%": { opacity: 0, transform: "translateX(-40px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" }
                },

                /* ✅ AJOUT : Slide depuis la droite */
                slideRight: {
                    "0%": { opacity: 0, transform: "translateX(40px)" },
                    "100%": { opacity: 1, transform: "translateX(0)" }
                }
            },
          animation: {
    slideLeft: "slideLeft 0.8s ease-out forwards",
    slideRight: "slideRight 0.8s ease-out forwards",

    /* tes autres animations existantes restent inchangées */
    floaty: "floaty 6s ease-in-out infinite",
    fadeUp: "fadeUp 0.6s ease both",
}
        }
    }
};


