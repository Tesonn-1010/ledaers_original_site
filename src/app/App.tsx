import { useState, useRef } from "react";
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";
import NorenIntro from "./components/NorenIntro";

type Page = "main" | "sub";

export default function App() {
  const [page, setPage] = useState<Page>("main");
  // 入場アニメーション：このセッションで既にくぐったかどうか
  const [entered, setEntered] = useState(
    () => sessionStorage.getItem("noren-entered") === "1"
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = (p: Page) => {
    setPage(p);
    scrollRef.current?.scrollTo({ top: 0 });
  };

  const handleEnter = () => {
    sessionStorage.setItem("noren-entered", "1");
    setEntered(true);
  };

  return (
    <div className="min-h-screen bg-[#dedbd4] flex justify-center">
      {!entered && <NorenIntro onEnter={handleEnter} />}
      <div ref={scrollRef} className="overflow-x-hidden overflow-y-auto" style={{ width: "390px", height: "100vh" }}>
        {page === "main" ? (
          <MainPage onNavigate={navigate} />
        ) : (
          <SubPage onNavigate={navigate} />
        )}
      </div>
    </div>
  );
}
