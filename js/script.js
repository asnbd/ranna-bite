document.addEventListener("DOMContentLoaded", function () {
  const screenshotFrame = document.querySelector(".screenshot-frame");
  const screenshotsInner = document.querySelector(".screenshot-container");
  const arrowLeft = document.querySelector(".arrow-left");
  const arrowRight = document.querySelector(".arrow-right");

  arrowLeft.addEventListener("click", function () {
    screenshotFrame.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  arrowRight.addEventListener("click", function () {
    screenshotFrame.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
});
