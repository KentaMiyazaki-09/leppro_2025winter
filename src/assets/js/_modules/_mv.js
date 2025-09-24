import EmblaCarousel from "embla-carousel";

export default () => {
  const emblaNode = document.querySelector(".mv__carousel");
  const options = { loop: true };
  EmblaCarousel(emblaNode, options);
};
