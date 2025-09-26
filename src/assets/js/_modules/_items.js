import EmblaCarousel from "embla-carousel";
import Fade from "embla-carousel-fade";

export default () => {
  const emblaAllNode = document.querySelectorAll(".item-slider__carousel");
  const options = { loop: true };

  emblaAllNode.forEach((emblaNode) => {
    const embla = EmblaCarousel(emblaNode, options, [Fade()]);

    const slider = emblaNode.closest(".item-slider");

    slider
      .querySelector(".item-slider__change-btn")
      .addEventListener("click", () => {
        embla.scrollNext();
      });
  });
};
