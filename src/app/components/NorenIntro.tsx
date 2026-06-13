import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/**
 * 暖簾（のれん）をくぐる入場アニメーション。
 * 画面を覆う暖簾をタップ／クリックすると、布が左右に分かれて持ち上がり、
 * 奥のサイト本体が現れる。世界観への没入を演出するオープニング。
 */

// 暖簾の布の色（墨色）と文字色（生成り）
const CLOTH = "#241f1b";
const CLOTH_EDGE = "#3a322b";
const INK = "#efe7d8";
const GOLD = "#c2a35a";

// 1枚の暖簾（複数の布パネル＋上部の竿）。side で左右に分かれて退場する。
function NorenHalf({ side, panels }: { side: "left" | "right"; panels: number }) {
  const isLeft = side === "left";
  return (
    <motion.div
      className="absolute top-0 h-full"
      style={{
        width: "50%",
        [isLeft ? "left" : "right"]: 0,
        transformOrigin: isLeft ? "left center" : "right center",
      }}
      // 退場：横にスライドしつつ少し持ち上がる＝くぐって奥へ抜ける感覚
      exit={{
        x: isLeft ? "-115%" : "115%",
        y: "-12%",
        rotate: isLeft ? -4 : 4,
        opacity: 0,
        transition: { duration: 0.9, ease: [0.7, 0, 0.3, 1] },
      }}
    >
      {/* 上部の竿（横木） */}
      <div
        className="absolute top-0 h-[10px] w-full"
        style={{
          background: `linear-gradient(180deg, #5a4a3a, #3a2e22)`,
          boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
        }}
      />
      {/* 布パネル（縦のスリットで分割し、揺れる） */}
      <div className="absolute top-[10px] flex h-[calc(100%-10px)] w-full">
        {Array.from({ length: panels }).map((_, i) => (
          <motion.div
            key={i}
            className="relative h-full"
            style={{
              width: `${100 / panels}%`,
              marginLeft: i === 0 ? 0 : "2px",
              background: `linear-gradient(90deg, ${CLOTH_EDGE}, ${CLOTH} 18%, ${CLOTH} 82%, ${CLOTH_EDGE})`,
              transformOrigin: "top center",
              boxShadow: "inset 0 12px 18px rgba(0,0,0,0.25)",
            }}
            // 風にゆれる待機アニメーション
            animate={{ skewX: [0, 0.8, 0, -0.8, 0] }}
            transition={{
              duration: 4 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          >
            {/* 裾の縫い目ライン */}
            <div
              className="absolute bottom-[10px] left-0 w-full"
              style={{ height: "1px", background: GOLD, opacity: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function NorenIntro({ onEnter }: { onEnter?: () => void }) {
  const [open, setOpen] = useState(false);

  const enter = () => {
    if (open) return;
    setOpen(true);
  };

  return (
    <AnimatePresence onExitComplete={onEnter}>
      {!open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{ background: "#dedbd4" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, delay: 0.45 } }}
          onClick={enter}
          role="button"
          aria-label="暖簾をくぐってサイトに入る"
        >
          {/* サイトと同じ390px幅の枠の中に暖簾を配置（奥に本体が見える前提） */}
          <div
            className="relative h-full overflow-hidden"
            style={{ width: "390px", maxWidth: "100%", background: "#f2ede4" }}
          >
            {/* 店名（暖簾の上に重ねて表示） */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-[40px] z-10 -translate-x-1/2 text-center"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
            >
              <div
                className="flex flex-col items-center leading-none"
                style={{
                  fontFamily: "'Yuji Syuku', serif",
                  color: INK,
                  fontSize: "64px",
                  letterSpacing: "4px",
                  textShadow: "0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                <span>骨</span>
                <span>霧</span>
              </div>
              <p
                style={{
                  fontFamily: "'Yuji Syuku', serif",
                  color: GOLD,
                  fontSize: "13px",
                  marginTop: "14px",
                  letterSpacing: "3px",
                }}
              >
                福岡豚骨ラーメン
              </p>
            </motion.div>

            {/* 暖簾（左右ふたつに分かれる） */}
            <NorenHalf side="left" panels={2} />
            <NorenHalf side="right" panels={2} />

            {/* くぐる案内 */}
            <motion.div
              className="pointer-events-none absolute bottom-[60px] left-1/2 z-10 -translate-x-1/2 text-center"
              animate={{ opacity: [0.4, 1, 0.4], y: [0, 4, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <p
                style={{
                  fontFamily: "'Yuji Syuku', serif",
                  color: INK,
                  fontSize: "15px",
                  letterSpacing: "4px",
                }}
              >
                暖簾をくぐる
              </p>
              <p style={{ color: GOLD, fontSize: "18px", marginTop: "6px" }}>▼</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
