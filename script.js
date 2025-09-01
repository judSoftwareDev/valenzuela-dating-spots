const modal = document.getElementById("popupModal");
const modalMessage = document.querySelector(".modal-message");
const closeModal = document.getElementById("closeModal");
const buttons = document.querySelectorAll(".rsvp-btn");

// Open modal with card-specific message
buttons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".invitation-card");
    const message = card.querySelector(".message").innerHTML.trim(); //preserve HTML
    modalMessage.innerHTML = message; //inject HTML
    modal.style.display = "flex";
  });
});

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

  // Scroll Animation Effect 
  function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 60) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('resize', revealOnScroll);
  document.addEventListener('DOMContentLoaded', () => {
    // Add scroll-animate class to main sections and cards
    document.querySelectorAll('.home, .invitation, .location, .invitation-card').forEach(el => {
      el.classList.add('scroll-animate');
    });
    revealOnScroll();
  });
