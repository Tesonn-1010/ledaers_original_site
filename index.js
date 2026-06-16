(() => {
  const root = document.getElementById("scrollRoot");
  const enterButton = document.getElementById("enterButton");
  const backTop = document.getElementById("backTop");
  const noRenBottom = 1180;

  const enter = () => {
    document.body.classList.add("entered");
    setTimeout(() => {
      document.getElementById("siteIntro").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500);
  };

  const reset = () => {
    document.body.classList.remove("entered");
    root.scrollTo({ top: 0, behavior: "auto" });
  };

  const clampBeforeEntry = () => {
    if (document.body.classList.contains("entered")) return;
    const max = Math.max(0, noRenBottom - root.clientHeight);
    if (root.scrollTop > max) root.scrollTop = max;
  };

  enterButton.addEventListener("click", enter);
  backTop.addEventListener("click", reset);
  root.addEventListener("scroll", clampBeforeEntry, { passive: true });

  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-scroll");
      if (target === "concept") {
        document.body.classList.remove("entered");
        document.getElementById("concept").scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      document.body.classList.add("entered");
      document.getElementById(target).scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.getElementById("issouCard").addEventListener("click", () => {
    window.location.href = "detail.html";
  });

  const applyHashTarget = () => {
    const target = window.location.hash.replace("#", "");
    if (!target) return;
    const element = document.getElementById(target);
    if (!element) return;
    if (target !== "top" && target !== "concept") {
      document.body.classList.add("entered");
    } else {
      document.body.classList.remove("entered");
    }
    setTimeout(() => {
      element.scrollIntoView({
        behavior: "auto",
        block: target === "concept" ? "center" : "start",
      });
    }, 80);
  };

  window.addEventListener("hashchange", applyHashTarget);
  applyHashTarget();
  clampBeforeEntry();
})();
