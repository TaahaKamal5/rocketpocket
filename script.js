const dialog = document.querySelector(".rsvp-dialog");
const openButtons = document.querySelectorAll("[data-open-rsvp]");
const closeButton = document.querySelector("[data-close-rsvp]");

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
      return;
    }

    window.location.href = "mailto:hello@example.com?subject=Wedding%20RSVP";
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  const dialogBounds = dialog.getBoundingClientRect();
  const clickedBackdrop =
    event.clientX < dialogBounds.left ||
    event.clientX > dialogBounds.right ||
    event.clientY < dialogBounds.top ||
    event.clientY > dialogBounds.bottom;

  if (clickedBackdrop) {
    dialog.close();
  }
});
