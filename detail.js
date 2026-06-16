(() => {
  const root = document.getElementById("scrollRoot");
  document.getElementById("backTop").addEventListener("click", () => {
    root.scrollTo({ top: 0, behavior: "smooth" });
  });
})();
