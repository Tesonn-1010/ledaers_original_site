import { useState, useRef, useEffect } from "react";
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";

type Page = "main" | "sub";

// のれんが画面上で占める下端のおおよその位置（くぐる前はここより下へ行かせない）
const NOREN_BOTTOM = 1300;

export default function App() {
  const [page, setPage] = useState<Page>("main");
  // 暖簾をくぐったか（入店したか）。一度くぐれば以降は自由にスクロールできる
  const [passed, setPassed] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = (p: Page) => {
    setPage(p);
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
        className="overflow-x-hidden overflow-y-auto"
        style={{ width: "390px", height: "100vh" }}
      >
        {page === "main" ? (
          <MainPage
            onNavigate={navigate}
            passed={passed}
            onPass={() => setPassed(true)}
          />
        ) : (
          <SubPage onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}
