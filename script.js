const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu]");
const mobileNav = document.querySelector("[data-mobile-nav]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

window.addEventListener("scroll", syncHeader, { passive: true });
syncHeader();

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.classList.toggle("is-open");
  mobileNav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobileNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.classList.remove("is-open");
    mobileNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});
