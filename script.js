// ======================================
// JARDINERÍA ECO ORTIZ
// JavaScript de la página
// ======================================

// CAMBIA ESTE NÚMERO POR EL WHATSAPP REAL DE ECO ORTIZ.
// Formato: código de país + número, sin +, espacios ni guiones.
const WHATSAPP_NUMBER = "51997468890";


// --------------------------------------
// WHATSAPP
// --------------------------------------
function abrirWhatsApp(mensaje) {
  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}


// --------------------------------------
// BOTONES DE WHATSAPP
// --------------------------------------
document.querySelectorAll("[data-whatsapp]").forEach((elemento) => {
  elemento.addEventListener("click", (evento) => {
    evento.preventDefault();

    const mensaje = elemento.dataset.whatsapp;

    abrirWhatsApp(mensaje);
  });
});


// --------------------------------------
// CONSULTA DE PRODUCTOS
// --------------------------------------
document.querySelectorAll("[data-product]").forEach((boton) => {
  boton.addEventListener("click", () => {

    const producto = boton.dataset.product;

    const mensaje =
      `Hola Eco Ortiz 🌿, estoy interesado(a) en: ${producto}. ` +
      `¿Me indican disponibilidad y precio?`;

    abrirWhatsApp(mensaje);
  });
});


// --------------------------------------
// AÑO AUTOMÁTICO DEL FOOTER
// --------------------------------------
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// --------------------------------------
// MENÚ PARA CELULAR
// --------------------------------------
const mobileButton = document.querySelector(".mobile-menu");
const navList = document.querySelector("nav ul");

if (mobileButton && navList) {

  mobileButton.addEventListener("click", () => {

    const abierto = navList.classList.toggle("menu-open");

    if (abierto) {

      navList.style.display = "flex";
      navList.style.flexDirection = "column";
      navList.style.position = "absolute";
      navList.style.top = "75px";
      navList.style.right = "4%";
      navList.style.background = "#faf8f2";
      navList.style.padding = "20px";
      navList.style.borderRadius = "18px";
      navList.style.boxShadow =
        "0 15px 35px rgba(0,0,0,.12)";

    } else {

      navList.style.display = "";

    }
  });
}


// --------------------------------------
// ANIMACIÓN AL HACER SCROLL
// --------------------------------------
const elementosReveal =
  document.querySelectorAll(".reveal");

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {

  const observer = new IntersectionObserver(
    (entradas, observador) => {

      entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

          entrada.target.classList.add("visible");

          observador.unobserve(entrada.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );

  elementosReveal.forEach((elemento) => {
    observer.observe(elemento);
  });

} else {

  elementosReveal.forEach((elemento) => {
    elemento.classList.add("visible");
  });

}
