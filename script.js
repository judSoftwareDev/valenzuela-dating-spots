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
