const rsvpDialog = document.querySelector(".rsvp-dialog");
const openRsvpButtons = document.querySelectorAll("[data-open-rsvp]");
const closeRsvpButton = document.querySelector("[data-close-rsvp]");

openRsvpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (rsvpDialog && typeof rsvpDialog.showModal === "function") {
      rsvpDialog.showModal();
      return;
    }

    window.location.href = "mailto:hello@example.com?subject=Wedding%20RSVP";
  });
});

if (rsvpDialog && closeRsvpButton) {
  closeRsvpButton.addEventListener("click", () => {
    rsvpDialog.close();
  });

  rsvpDialog.addEventListener("click", (event) => {
    const dialogBounds = rsvpDialog.getBoundingClientRect();
    const clickedBackdrop =
      event.clientX < dialogBounds.left ||
      event.clientX > dialogBounds.right ||
      event.clientY < dialogBounds.top ||
      event.clientY > dialogBounds.bottom;

    if (clickedBackdrop) {
      rsvpDialog.close();
    }
  });
}
