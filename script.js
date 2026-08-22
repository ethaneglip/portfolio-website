fetch('/navbar.html')
  .then(res => res.text())
  .then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
    initMenu(); // only run this after the navbar exists in the page
  });

function initMenu() {
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
    homeM.addEventListener('click', homeMenu);

    // Bonus: let people close it with the Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    function homeMenu() {
      window.location.href = "/";
    }
  
}

var encEmail = "ZXRoYW5lZ2xpcEBnbWFpbC5jb20="; 
const form = document.getElementById("contact");
form.setAttribute("href", "mailto:".concat(atob(encEmail)));