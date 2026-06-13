import { useState, useRef } from "react";
import MainPage from "./components/MainPage";
import SubPage from "./components/SubPage";

type Page = "main" | "sub";

export default function App() {
  const [page, setPage] = useState<Page>("main");
  const scrollRef = useRef<HTMLDivElement>(null);

  const navigate = (p: Page) => {
    setPage(p);
    scrollRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="min-h-screen bg-[#dedbd4] flex justify-center">
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
