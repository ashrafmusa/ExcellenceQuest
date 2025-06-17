// === Scroll on load (basic fade-in) ===
window.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('section, .service, form');
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 200);
  });
});

// === IntersectionObserver scroll animation for .scroll-animate elements ===
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animate");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });
  elements.forEach(el => observer.observe(el));
});

// === Back to Top Button Behavior ===
window.onscroll = function () {
  const btn = document.getElementById("backToTop");
  if (btn) {
    btn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
      ? "block"
      : "none";
  }
};

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// === Form Validation (for contact or booking forms) ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const name = form.querySelector('[name="name"]')?.value.trim();
      const email = form.querySelector('[name="email"]')?.value.trim();
      const message = form.querySelector('[name="message"]')?.value.trim(); // optional

      if (!name || !email) {
        e.preventDefault();
        alert("⚠️ Please fill in the required fields (name and email).");
      } else {
        alert("📨 Your request has been sent successfully!");
      }
    });
  }
});
