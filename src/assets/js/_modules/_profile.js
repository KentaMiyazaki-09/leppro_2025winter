export default () => {
  // モーダルopen
  document.querySelectorAll(".profile-button__opener").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelector("body").style.overflow = "hidden";

      const targetID = this.dataset.profile;
      document
        .querySelector(`#profile-modal-${targetID}`)
        .classList.add("active");
    });
  });

  // モーダルclose
  document.querySelectorAll(".profile-modal__close").forEach((btn) => {
    document.querySelector("body").style.overflow = "auto";
    btn.addEventListener("click", function () {
      this.closest(".profile-modal").classList.remove("active");
    });
  });
};
