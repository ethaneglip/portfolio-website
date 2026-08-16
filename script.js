const openBtn  = document.getElementById('openMenu');
    const closeBtn = document.getElementById('closeMenu');
    const menu     = document.getElementById('siteMenu');
const homeM = document.getElementById('homeMenu');

    function openMenu() {
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      openBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // stop background from scrolling
    }

    function closeMenu() {
      menu.classList.remove('is-open');
      menu.setAttribute('aria-hidden', 'true');
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Bonus: let people close it with the Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    function homeMenu() {
        window.location.href = "index.html";
    }