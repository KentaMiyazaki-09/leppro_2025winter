import EmblaCarousel from "embla-carousel";

export default () => {
  const emblaNode = document.querySelector(".mv__carousel");
  const options = { loop: true };
  const embla = EmblaCarousel(emblaNode, options);

  if (window.innerWidth > 768) {
    embla.destroy();
  } else {
    embla.reInit();
  }

  window.onresize = () => {
    if (window.innerWidth > 768) {
      embla.destroy();
    } else {
      embla.reInit();
    }
  };
};
