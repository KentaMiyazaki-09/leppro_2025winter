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
    const slides = embla.slideNodes();

    // 最初のスライドにactive付与（画像が切り替わる）
    slides[0].classList.add("active");

    // 矢印ボタン
    const leftArrow = countEl.querySelector(".style-modal__count__arrow--left");
    const rightArrow = countEl.querySelector(
      ".style-modal__count__arrow--right"
    );

    leftArrow.addEventListener("click", () => {
      embla.scrollPrev();
    });

    rightArrow.addEventListener("click", () => {
      embla.scrollNext();
    });

    // アクティブの動き
    embla.on("select", () => {
      const selected = embla.selectedScrollSnap();
      linkSliderList[num].scrollTo(selected);

      // スライドに"active"クラスを付与
      slides.forEach((slide, i) =>
        slide.classList.toggle("active", i === selected)
      );

      // ページ表示のカウントを変更
      countEl.querySelector(".style-modal__count__center__current").innerHTML =
        selected + 1;
    });
  });
};
