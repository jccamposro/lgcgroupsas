/* LGC Accounting Group — interacciones del sitio */
(function () {
  "use strict";

  var prefersReduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----- AOS: animaciones on-scroll ----- */
  if (window.AOS) {
    window.AOS.init({
      duration: 650,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
      disable: prefersReduced ? true : "phone"
    });
  }

  /* ----- Año dinámico en el footer ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ----- Header: sombra al hacer scroll + barra de progreso ----- */
  var header = document.querySelector(".site-header");
  var progress = document.getElementById("scroll-progress");
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("scrolled", y > 8);
    if (progress) {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Menú móvil ----- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú");
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ----- Enlaces de WhatsApp -----
     Número y mensaje se definen en el HTML (data-phone / data-text) tanto en el
     botón de la sección Contacto como en el botón flotante. Editar el número en
     esos atributos (formato internacional, solo dígitos: ej. 573001234567). */
  document.querySelectorAll("[data-phone]").forEach(function (el) {
    var phone = (el.getAttribute("data-phone") || "").replace(/\D/g, "");
    var text = el.getAttribute("data-text") || "";
    if (phone) {
      el.setAttribute(
        "href",
        "https://wa.me/" + phone + (text ? "?text=" + encodeURIComponent(text) : "")
      );
    }
  });
})();
