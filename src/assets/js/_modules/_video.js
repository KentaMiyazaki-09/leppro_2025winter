export default () => {
  const videoes = document.querySelectorAll(".video");

  videoes.forEach((video) => {
    if (video) {
      const movieEl = video.querySelector(".video__item");
      const onButton = video.querySelector(".video-soundon-button");
      const offButton = video.querySelector(".video-soundoff-button");

      onButton.addEventListener("click", (el) => {
        el.currentTarget.classList.add("is-active");
        offButton.classList.remove("is-active");
        movieEl.muted = false;
      });

      offButton.addEventListener("click", (el) => {
        el.currentTarget.classList.add("is-active");
        onButton.classList.remove("is-active");
        movieEl.muted = true;
      });
    }
  });
};
