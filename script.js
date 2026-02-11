// Video modal functionality
const videoModal = document.getElementById("videoModal");
const iframe = document.getElementById("modalVideo");

// Open video in modal when "Watch Video" is clicked
document.querySelectorAll(".btn.btn-primary").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const link = btn.getAttribute("href");
    iframe.src = link.replace("watch?v=", "embed/");
    const modal = new bootstrap.Modal(videoModal);
    modal.show();
  });
});

// Stop video when modal closes
videoModal.addEventListener("hidden.bs.modal", () => {
  iframe.src = "";
});
