export default () => {
  const video = document.querySelector(".video__item");
  const videoSoundonOnButton = document.querySelector(".video-soundon-button");
  const videoSoundOffButton = document.querySelector(".video-soundoff-button");

  if (video) {
    videoSoundonOnButton.addEventListener("click", (el) => {
      console.log();
      el.currentTarget.classList.add("is-active");
      videoCloseButton.classList.remove("is-active");
      video.muted = false;
    });

    videoSoundOffButton.addEventListener("click", (el) => {
      el.currentTarget.classList.add("is-active");
      videoPlayButton.classList.remove("is-active");
      video.muted = true;
    });
  }
};
