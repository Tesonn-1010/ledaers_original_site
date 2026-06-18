(() => {
  const root = document.getElementById("scrollRoot");
  const enterButton = document.getElementById("enterButton");
  const skipButton = document.getElementById("skipButton");
  const backTop = document.getElementById("backTop");
  const noRenBottom = 1640;

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  const setScale = () => {
    const scale = Math.min(window.innerWidth / 390, 430 / 390);
    document.documentElement.style.setProperty("--scale", scale.toFixed(4));
  };
  setScale();
  window.addEventListener("resize", setScale);

  const enter = () => {
    document.body.classList.add("entered");
    setTimeout(() => {
      document.getElementById("guide").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1500);
  };

  // アニメを飛ばして即入店（商品一覧へ直行）
  const enterInstant = () => {
    document.body.classList.add("instant", "entered");
    // 拡大率(scale:1)が確定してからスクロールしないと位置がずれる
    requestAnimationFrame(() => {
      document.getElementById("product").scrollIntoView({ behavior: "auto", block: "start" });
      requestAnimationFrame(() => document.body.classList.remove("instant"));
    });
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
  skipButton.addEventListener("click", enterInstant);
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

  const guide = document.querySelector(".guide");
  if (guide) {
    let index = 0;
    guide.querySelectorAll(".guide-col").forEach((col) => {
      const chars = [...col.textContent];
      col.textContent = "";
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.setProperty("--i", index++);
        col.appendChild(span);
      });
    });

    const guideText = guide.querySelector(".guide-text") || guide;
    const guideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // テキストが完全に画面内（＝1画面に収まりきって）から開始
          guide.classList.toggle("in-view", entry.intersectionRatio >= 0.99);
        });
      },
      { root, threshold: [0, 0.99, 1] }
    );
    guideObserver.observe(guideText);
  }

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

  // リロード時はスクロール位置の復元を打ち消し、必ず表紙から開始（#指定時は除く）
  if (!window.location.hash) {
    root.scrollTo({ top: 0 });
    window.addEventListener("load", () => root.scrollTo({ top: 0 }));
  }

  clampBeforeEntry();
})();
