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
// SOUS-MENU MOBILE (doit être défini AVANT DOMContentLoaded)
// ==========================
function toggleMobileSubmenu(menuId) {
    const submenu = document.getElementById(menuId + '-submenu');
    const icon = document.getElementById(menuId + '-icon');
    
    console.log('Toggle submenu:', menuId); // Debug
    console.log('Submenu element:', submenu); // Debug
    console.log('Icon element:', icon); // Debug
    
    if (submenu && icon) {
        if (submenu.classList.contains('hidden')) {
            submenu.classList.remove('hidden');
            icon.style.transform = 'rotate(180deg)';
        } else {
            submenu.classList.add('hidden');
            icon.style.transform = 'rotate(0deg)';
        }
    } else {
        console.error('Éléments introuvables pour:', menuId);
    }
}

// Rendre la fonction globale
window.toggleMobileSubmenu = toggleMobileSubmenu;

// ==========================
// ONGLET (TABS) + MENU MOBILE
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  // ===== TABS =====
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

  // ===== MENU MOBILE =====
  const menuBtn = document.getElementById('menuBtn');
  const menuIcon = document.getElementById('menuIcon');
  const mobileMenu = document.getElementById('mobileMenu');
  
  console.log('Menu Button:', menuBtn); // Debug
  console.log('Menu Icon:', menuIcon); // Debug
  console.log('Mobile Menu:', mobileMenu); // Debug
  
  if (menuBtn && menuIcon && mobileMenu) {
    let isMenuOpen = false;

    menuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;
        
        console.log('Menu clicked, isOpen:', isMenuOpen); // Debug
        
        if (isMenuOpen) {
            // Transformer en X
            menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            mobileMenu.classList.remove('hidden');
        } else {
            // Retour en hamburger
            menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            mobileMenu.classList.add('hidden');
        }
    });
  } else {
    console.error('Un ou plusieurs éléments du menu mobile sont introuvables');
  }
});