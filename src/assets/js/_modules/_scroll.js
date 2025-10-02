import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** スクロールトリガー */
function createScrollTrigger(
  targets,
  trigger,
  start = "top-=100 center",
  once = true
) {
  document.querySelectorAll(targets).forEach((target) => {
    ScrollTrigger.create({
      trigger: trigger,
      start,
      toggleClass: { targets: target, className: "is-animated" },
      once,
    });
  });
}

function createScrollTriggerAll(
  targets,
  start = "top-=100 center",
  once = true
) {
  document.querySelectorAll(targets).forEach((target) => {
    ScrollTrigger.create({
      trigger: target,
      start,
      toggleClass: { targets: target, className: "is-animated" },
      once,
    });
  });
}

function createScrollTriggerItemComment() {
  document.querySelectorAll(".item__comment").forEach((target) => {
    console.log(target.querySelector(".item__comment__lead"));

    ScrollTrigger.create({
      trigger: target,
      start: "top center",
      toggleClass: {
        targets: target.querySelector(".item__comment__lead"),
        className: "is-animated",
      },
      once: true,
    });
  });
}

export default () => {
  createScrollTrigger(".intro", ".intro");
  createScrollTrigger(".intro__lead", ".intro__lead");
  createScrollTriggerAll(".item");
  createScrollTriggerItemComment();
  createScrollTrigger(".behind-movie", ".behind-movie");
  createScrollTrigger(".style__concept", ".style__concept");
  createScrollTrigger(".profile", ".profile");
};
