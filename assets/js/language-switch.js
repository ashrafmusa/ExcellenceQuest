// assets/js/language-switch.js

function switchLanguage() {
  const current = window.location.href;

  if (current.includes("-en.html")) {
    // Switch to Arabic
    const arabicVersion = current.replace("-en.html", ".html");
    window.location.href = arabicVersion;
    localStorage.setItem("lang", "ar");
  } else {
    // Switch to English
    const englishVersion = current.replace(".html", "-en.html");
    window.location.href = englishVersion;
    localStorage.setItem("lang", "en");
  }
}

window.onload = function () {
  const preferredLang = localStorage.getItem("lang");

  if (preferredLang === "en" && !window.location.href.includes("-en.html")) {
    window.location.href = window.location.href.replace(".html", "-en.html");
  }

  if (preferredLang === "ar" && window.location.href.includes("-en.html")) {
    window.location.href = window.location.href.replace("-en.html", ".html");
  }
};
