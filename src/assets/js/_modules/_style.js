import EmblaCarousel from "embla-carousel";

export default () => {
  // モーダルopen
  document.querySelectorAll(".style-list__bottom__opener").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelector("body").style.overflow = "hidden";

      const targetID = this.dataset.profile;
      document
        .querySelector(`#style-modal-${targetID}`)
        .classList.add("active");
    });
  });

  // モーダルclose
  document.querySelectorAll(".style-modal__close").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelector("body").style.overflow = "auto";
      this.closest(".style-modal").classList.remove("active");
    });
  });

  /* embla slider */

  // リンクリスト
  let linkSliderList = [];
  const emblaLinkAllNode = document.querySelectorAll(".style-modal__info");
  emblaLinkAllNode.forEach((emblaNode) => {
    const embla = EmblaCarousel(emblaNode, { loop: true, watchDrag: false });
    linkSliderList.push(embla);
  });

  // 画像スライダー
  const emblaAllNode = document.querySelectorAll(".style-modal__slider");
  emblaAllNode.forEach((emblaNode, num) => {
    const countEl = emblaNode.nextElementSibling;
    const embla = EmblaCarousel(emblaNode, { loop: true });

    embla.on("select", () => {
      const idx = embla.selectedScrollSnap();
      linkSliderList[num].scrollTo(idx);

      countEl.querySelector(".style-modal__count__center__current").innerHTML =
        idx + 1;
    });
  });
};
