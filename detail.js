(() => {
  const root = document.getElementById("scrollRoot");
  document.getElementById("backTop").addEventListener("click", () => {
    root.scrollTo({ top: 0, behavior: "smooth" });
  });

  const setScale = () => {
    const scale = Math.min(window.innerWidth / 390, 430 / 390);
    document.documentElement.style.setProperty("--scale", scale.toFixed(4));
  };
  setScale();
  window.addEventListener("resize", setScale);

  // 商品一覧へ戻るボタン：スクロール中は薄く、止まると出現
  const toMenu = document.getElementById("toMenu");
  let scrollTimer;
  root.addEventListener(
    "scroll",
    () => {
      toMenu.classList.add("scrolling");
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        toMenu.classList.remove("scrolling");
      }, 220);
    },
    { passive: true }
  );
})();
