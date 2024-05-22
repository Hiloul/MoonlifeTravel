document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cookiePopup = document.getElementById("cookie-popup");
  var acceptCookiesBtn = document.getElementById("accept-cookies");
  var refuseCookiesBtn = document.getElementById("refuse-cookies");
  var scrollToTopBtn = document.getElementById("scrollToTop");

  acceptCookiesBtn.addEventListener("click", function () {
    // Définir un cookie pour enregistrer l'acceptation
    document.cookie =
      "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Masquer le pop-up
    cookiePopup.style.display = "none";
  });

  refuseCookiesBtn.addEventListener("click", function () {
    // Définir un cookie pour enregistrer le refus
    document.cookie =
      "cookies_accepted=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Masquer le pop-up
    cookiePopup.style.display = "none";
  });

  // Vérifier si le cookie d'acceptation existe déjà
  if (
    document.cookie.indexOf("cookies_accepted=true") === -1 &&
    document.cookie.indexOf("cookies_accepted=false") === -1
  ) {
    // Afficher le pop-up si aucune option n'a été enregistrée
    cookiePopup.style.display = "block";
  }

  // Afficher/Masquer le bouton de retour en haut de la page
  window.addEventListener("scroll", function () {
    if (window.scrollY > window.innerHeight / 2) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll vers le haut
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
