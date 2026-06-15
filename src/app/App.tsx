import { useState, useRef, useEffect } from "react";
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";

type Page = "main" | "sub";
// メインページ内の飛び先
export type MainTarget = "top" | "concept" | "siteIntro" | "product" | "author";

// くぐる前に到達できる下端。のれん(〜1297px)が画面の中ほどに収まるよう少し余裕を持たせる
const NOREN_BOTTOM = 1450;

export default function App() {
  const [page, setPage] = useState<Page>("main");
  // 暖簾をくぐったか（入店したか）。一度くぐれば以降は自由にスクロールできる
  const [passed, setPassed] = useState(false);
  // サブページからメインへ来たときの飛び先（MainPageが消費してスクロール）
  const [mainTarget, setMainTarget] = useState<MainTarget | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = (p: Page) => {
    setPage(p);
    scrollRef.current?.scrollTo({ top: 0 });
  };

  // サブページのナビ → メインの対応セクションへ。
  // top/concept は表紙(未入店)側、それ以外は本編(入店済み)側にある。
  const goMain = (target: MainTarget) => {
    setPage("main");
    setPassed(target !== "top" && target !== "concept");
    setMainTarget(target);
  };

  // 最初に戻る：入店状態を解除して、骨霧ロゴ（先頭）まで戻す
  const resetEntrance = () => {
    setPassed(false);
    // スクロール制限の再適用と競合しないよう、先頭へは即時に移動する
    scrollRef.current?.scrollTo({ top: 0 });
  };

  // 入店前（メイン画面・未くぐり）は、のれんより下へスクロールできないようにする
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || page !== "main" || passed) return;
    const clamp = () => {
      const max = Math.max(0, NOREN_BOTTOM - el.clientHeight);
      if (el.scrollTop > max) el.scrollTop = max;
    };
    clamp();
    el.addEventListener("scroll", clamp, { passive: true });
    return () => el.removeEventListener("scroll", clamp);
  }, [page, passed]);

  return (
    <div className="min-h-screen bg-[#f2ede4] flex justify-center">
      <div
        ref={scrollRef}
        className="no-scrollbar overflow-x-hidden overflow-y-auto"
        style={{ width: "390px", height: "100vh" }}
      >
        {page === "main" ? (
          <MainPage
            onNavigate={navigate}
            passed={passed}
            onPass={() => setPassed(true)}
            onReset={resetEntrance}
            onExitEntrance={() => setPassed(false)}
            mainTarget={mainTarget}
            onTargetConsumed={() => setMainTarget(null)}
            scrollRoot={scrollRef}
          />
        ) : (
          <SubPage onNavMain={goMain} scrollRoot={scrollRef} />
        )}
      </div>
    </div>
  );
}
