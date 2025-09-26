export default () => {
  // モーダルopen
  document.querySelectorAll(".profile-button__opener").forEach((btn) => {
    btn.addEventListener("click", function () {
      const targetID = this.dataset.profile;
      document
        .querySelector(`#profile-modal-${targetID}`)
        .classList.add("active");
    });
  });

  // モーダルclose
  document.querySelectorAll(".profile-modal__close").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest(".profile-modal").classList.remove("active");
    });
  });
};
