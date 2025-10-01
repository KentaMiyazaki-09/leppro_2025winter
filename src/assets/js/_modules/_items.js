import EmblaCarousel from "embla-carousel";
import Fade from "embla-carousel-fade";

import { gsap } from "gsap";

export default () => {
  /* スライダー本体 */
  const emblaAllNode = document.querySelectorAll(".item-slider__carousel");
  const options = { loop: true };

  emblaAllNode.forEach((emblaNode) => {
    const embla = EmblaCarousel(emblaNode, options, [Fade()]);

    const slider = emblaNode.closest(".item-slider");

    slider
      .querySelector(".item-slider__change-btn")
      .addEventListener("click", function (e) {
        e.preventDefault();
        embla.scrollNext();

        /* ボタンのアニメーション */
        const btnBg = this.querySelector(".item-slider__change-btn__bg__img");

        gsap.to(btnBg, {
          rotation: "+=90",
          duration: 0.6,
          ease: "power2.inOut",
          overwrite: "auto",
        });
      });
  });
};
