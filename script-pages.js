// ==========================
// ACCORDION OUVRIR / FERMER
// ==========================
window.toggleAccordion = function (id) {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (!content || !icon) return;

  // Vérifie si le contenu est caché
  const isHidden = content.classList.contains("hidden");

  // Toggle
  content.classList.toggle("hidden");
  icon.textContent = isHidden ? "−" : "+";
};

// ==========================
// ONGLET (TABS)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Retirer active de tous les onglets
      tabs.forEach(t => t.classList.remove("active"));
      // Masquer toutes les sections
      contents.forEach(c => c.classList.add("hidden"));

      // Activer l'onglet cliqué
      tab.classList.add("active");

      // Afficher la section correspondante
      const target = document.getElementById(tab.dataset.tab);
      if (target) target.classList.remove("hidden");
    });
  });
});
