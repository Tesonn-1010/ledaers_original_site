import { useRef, type Ref } from "react";
import svgPaths from "../../imports/スマホデザインカンプMain最終版/svg-nkcp82ojx7";
import img from "../../imports/スマホデザインカンプMain最終版/6a3050d00e701ea5527c626ec1519aa4e799bebd.png";
import img1 from "../../imports/スマホデザインカンプMain最終版/ca73fb16c2782ab6be9974c944edcf320c673545.png";
import img2 from "../../imports/スマホデザインカンプMain最終版/1da941f24982806be86b82a41e0ddae51299cafd.png";
import img3 from "../../imports/スマホデザインカンプMain最終版/7eb913e275c265f1c02fd586ac1aca3a1a900be0.png";
import img4 from "../../imports/スマホデザインカンプMain最終版/65831a1563b9572914e6dea4aa2d419676461b9a.png";
import imgRectangle2 from "../../imports/スマホデザインカンプMain最終版/f11616ff4bd49e75c2b1ecc15de518dbef9cf7a0.png";
import img5 from "../../imports/スマホデザインカンプMain最終版/285eb404c1f4676bf85f8848f3fa9c8985e4aabb.png";

interface Props {
  onNavigate: (page: "sub") => void;
}

interface FooterBackArrowProps {
  onClick: () => void;
}

interface FooterNavContentsProps {
  onSiteIntro: () => void;
  onConcept: () => void;
  onProduct: () => void;
  onAuthor: () => void;
}

function FooterBackArrow({ onClick }: FooterBackArrowProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      className="absolute contents left-[calc(50%+112.99px)] top-[4620px] cursor-pointer"
      data-name="戻る矢印"
    >
      <div className="absolute h-[90.897px] left-[calc(50%+112.99px)] top-[4620px] w-0">
        <div className="absolute inset-[-0.55%_-3.68px_0_-3.68px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 7.36396 91.3975"
          >
            <path
              d={svgPaths.p2ea9b4b0}
              fill="var(--stroke-0, black)"
              id="Vector 3"
            />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[50px] leading-[10px] left-[calc(50%+114.99px)] not-italic text-[10px] text-black top-[4662px] w-[10px]">
        最初に戻る
      </p>
    </div>
  );
}

function FooterNavContents({
  onSiteIntro,
  onConcept,
  onProduct,
  onAuthor,
}: FooterNavContentsProps) {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="コンテンツ">
      <div className="absolute h-0 left-0 top-0 w-[100px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 100 1"
          >
            <path
              d="M0 0.5H100"
              id="Vector 2"
              stroke="var(--stroke-0, black)"
            />
          </svg>
        </div>
      </div>
      <button
        type="button"
        onClick={onSiteIntro}
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%+15px)] not-italic text-[8px] text-black top-[17px] w-[8px] cursor-pointer bg-transparent border-none p-0"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        <p className="leading-[8px] mb-0">サイト紹介</p>
        <p className="leading-[8px]">​</p>
      </button>
      <button
        type="button"
        onClick={onConcept}
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[8px] left-[92px] not-italic text-[8px] text-black top-[17px] w-[8px] cursor-pointer bg-transparent border-none p-0"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        コンセプト
      </button>
      <button
        type="button"
        onClick={onProduct}
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[8px] left-[31px] not-italic text-[8px] text-black top-[18px] w-[8px] cursor-pointer bg-transparent border-none p-0"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        商品特集
      </button>
      <button
        type="button"
        onClick={onAuthor}
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[8px] left-0 not-italic text-[8px] text-black top-[17px] w-[8px] cursor-pointer bg-transparent border-none p-0"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        作者紹介
      </button>
    </div>
  );
}

function FooterMessage() {
  return (
    <div
      className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-black"
      data-name="メッセージ"
    >
      <p
        className="col-1 h-[37px] leading-[13px] ml-[86.46px] mt-0 relative row-1 text-[13px] w-[13.542px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        福岡に
      </p>
      <p
        className="col-1 h-[37px] leading-[13px] ml-[60.29px] mt-[17px] relative row-1 text-[13px] w-[13.542px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        来たら
      </p>
      <p
        className="col-1 h-[75px] leading-[13px] ml-[31.17px] mt-[26px] relative row-1 text-[13px] w-[13.542px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        食べて欲しい
      </p>
      <p
        className="col-1 h-[62px] leading-[12px] ml-0 mt-[65px] relative row-1 text-[12px] w-[13.542px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        一杯がある
      </p>
    </div>
  );
}

function FooterMain({
  onSiteIntro,
  onConcept,
  onProduct,
  onAuthor,
}: FooterNavContentsProps) {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[25px] h-[445px] items-start left-[calc(50%+5.99px)] top-[4279px] w-[112px]"
      data-name="フッター"
    >
      <p
        className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] h-[196px] leading-[100px] min-w-full not-italic relative shrink-0 text-[100px] text-black w-[min-content]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        骨霧
      </p>
      <FooterNavContents
        onSiteIntro={onSiteIntro}
        onConcept={onConcept}
        onProduct={onProduct}
        onAuthor={onAuthor}
      />
      <FooterMessage />
    </div>
  );
}

interface FooterProps {
  onGoTop: () => void;
  onSiteIntro: () => void;
  onConcept: () => void;
  onProduct: () => void;
  onAuthor: () => void;
}

function Footer({
  onGoTop,
  onSiteIntro,
  onConcept,
  onProduct,
  onAuthor,
}: FooterProps) {
  return (
    <div
      className="-translate-x-1/2 absolute contents left-[calc(50%-0.01px)] top-[4279px]"
      data-name="フッター"
    >
      <FooterBackArrow onClick={onGoTop} />
      <p
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[151px] leading-[40px] left-[calc(50%-84.01px)] not-italic text-[#9b7b3a] text-[16px] top-[4306px] w-[16px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        こつぎり
      </p>
      <FooterMain
        onSiteIntro={onSiteIntro}
        onConcept={onConcept}
        onProduct={onProduct}
        onAuthor={onAuthor}
      />
      <div className="absolute flex h-[1.631px] items-center justify-center left-[11.99px] top-[4279px] w-[366px]">
        <div className="flex-none rotate-[-179.74deg] skew-x-[0.26deg]">
          <div className="h-0 relative w-[366.003px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 366.003 1"
              >
                <path
                  d="M0 0.5H366.003"
                  id="Vector 1"
                  stroke="var(--stroke-0, black)"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PassionMessage() {
  return (
    <div
      className="-translate-x-1/2 [word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[360px] leading-[0] left-1/2 not-italic text-[#9b7b3a] text-[12px] text-justify top-[4px] tracking-[0.24px] w-[240px]"
      data-name="熱意のメッセージ"
    >
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-0 top-[84px] w-[12px]"
        style={{ fontFeatureSettings: '"vert", "dlig"' }}
      >
        <p className="leading-[20px]">正直に書いた。</p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-[57px] top-[132px] w-[12px]"
        style={{ fontFeatureSettings: '"vert", "dlig"' }}
      >
        <p>
          <span className="leading-[20px]">博多駅周辺の店だけを</span>
          <span className="leading-[24px]">、</span>
        </p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-[114px] top-[108px] w-[12px]"
        style={{ fontFeatureSettings: '"vert", "dlig"' }}
      >
        <p>
          <span className="leading-[20px]">全部自分で食べた</span>
          <span className="leading-[24px]">。</span>
        </p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-[171px] top-[169px] w-[12px]"
        style={{ fontFeatureSettings: '"vert", "dlig"' }}
      >
        <p>
          <span className="leading-[20px]">うまくなる食べ物だと気づいた</span>
          <span className="leading-[24px]">。</span>
        </p>
      </div>
      <div
        className="-translate-y-1/2 absolute flex flex-col justify-center left-[228px] top-[96px] w-[12px]"
        style={{ fontFeatureSettings: '"vert", "dlig"' }}
      >
        <p className="leading-[20px]">知れば知るほど、</p>
      </div>
    </div>
  );
}

function PassionSection() {
  return (
    <div
      className="-translate-x-1/2 -translate-y-1/2 absolute h-[304px] left-[calc(50%-1px)] top-[calc(50%+1591.5px)] w-[326px]"
      data-name="熱意メッセージ"
    >
      <PassionMessage />
    </div>
  );
}

function ShopCard({
  children,
  photo,
  onClick,
}: {
  children: React.ReactNode;
  photo: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`content-stretch flex flex-col items-center relative shrink-0 size-[128px] ${onClick ? "cursor-pointer" : ""}`}
      onClick={onClick}
    >
      <div
        aria-hidden
        className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none"
      />
      {onClick && (
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity z-10" />
      )}
      <div className="h-[100px] relative shrink-0 w-full">
        <img
          alt=""
          className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
          src={photo}
        />
      </div>
      <div className="bg-[#f2ede4] h-[28px] relative shrink-0 w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

function ShopGrid({ onNavigate }: { onNavigate: (page: "sub") => void }) {
  return (
    <div
      className="absolute content-center flex flex-wrap gap-[60px_40px] h-[600px] items-center justify-center left-[17px] p-[30px] top-[135px] w-[356px]"
      data-name="商品特集"
    >
      <ShopCard photo={img1} onClick={() => onNavigate("sub")}>
        <p
          className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[24px] not-italic text-[#1c1008] text-[20px] text-center w-[128px]"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          一双
        </p>
      </ShopCard>
      <ShopCard photo={img2}>
        <p className="font-['Inria_Serif',sans-serif] not-italic text-[20px] text-black text-center">
          Shin Shin
        </p>
      </ShopCard>
      <ShopCard photo={img3}>
        <p
          className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[24px] not-italic text-[#1c1008] text-[20px] text-center w-[128px]"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          一風堂
        </p>
      </ShopCard>
      <ShopCard photo={img4}>
        <p
          className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] not-italic text-[20px] text-black text-center"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          一幸舎
        </p>
      </ShopCard>
      <ShopCard photo={imgRectangle2}>
        <p
          className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] not-italic text-[20px] text-black text-center"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          二男坊
        </p>
      </ShopCard>
      <ShopCard photo={img5}>
        <p
          className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] not-italic text-[20px] text-black text-center"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          海鳴
        </p>
      </ShopCard>
    </div>
  );
}

function Pagination() {
  return (
    <div
      className="-translate-x-1/2 absolute content-stretch flex gap-[4.5px] items-center left-[calc(50%-0.5px)] top-[739px]"
      data-name="次のページ"
    >
      <div className="bg-[#c0321a] content-stretch flex flex-col items-center relative shrink-0 size-[24px]">
        <div
          className="[word-break:break-word] flex flex-col font-['Yuji_Syuku',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-justify text-white w-[24px]"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          <p className="leading-[24px]">１</p>
        </div>
      </div>
      {["2", "3", "4", "5"].map((n) => (
        <div
          key={n}
          className="content-stretch flex flex-col items-center relative shrink-0 size-[24px]"
        >
          <div
            aria-hidden
            className="absolute border-[#9b7b3a] border-[1.5px] border-solid inset-0 pointer-events-none"
          />
          <div
            className="[word-break:break-word] flex flex-col font-['Yuji_Syuku',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9b7b3a] text-[24px] text-center w-full"
            style={{ fontFeatureSettings: '"dlig"' }}
          >
            <p className="leading-[24px]">{n}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function KenbaikiSection({
  onNavigate,
  sectionRef,
}: {
  onNavigate: (page: "sub") => void;
  sectionRef?: Ref<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={sectionRef}
      className="absolute contents left-0 top-[2517px]"
      data-name="商品紹介"
    >
      <div className="absolute bg-black h-[843.001px] left-0 top-[2517px] w-[390px]" />
      <div
        className="absolute h-[843.001px] left-px top-[2518px] w-[389px]"
        data-name="券売機"
      >
        <p
          className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[80px] left-[calc(50%-119.5px)] not-italic text-[#9b7b3a] text-[80px] text-justify top-[44px] whitespace-nowrap"
          style={{ fontFeatureSettings: '"dlig"' }}
        >
          券売機
        </p>
        <ShopGrid onNavigate={onNavigate} />
        <Pagination />
      </div>
    </div>
  );
}

function GuideSection({ onNavigate }: { onNavigate: (page: "sub") => void }) {
  return (
    <div className="absolute contents left-px top-[1673px]" data-name="誘導">
      <div
        className="absolute h-[844px] left-px top-[1673px] w-[389px]"
        data-name="誘導"
      >
        <div className="-translate-x-1/2 absolute flex h-[120px] items-center justify-center left-1/2 top-[691px] w-[15px]">
          <div className="flex-none rotate-90">
            <div className="h-[15px] relative w-[120px]">
              <svg
                className="absolute block inset-0 size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 120 15"
              >
                <g>
                  <path
                    d="M6 7.5H105"
                    stroke="var(--stroke-0, #1C1008)"
                    strokeWidth="2"
                  />
                  <path d={svgPaths.p4e81940} fill="var(--fill-0, #1C1008)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute bg-[#dedbd4] h-[844px] left-0 top-0 w-[389px]" />
        <div className="[word-break:break-word] absolute content-stretch flex flex-col font-['Yuji_Syuku',sans-serif] gap-[4px] items-start leading-[normal] left-[155px] not-italic text-[32px] text-black top-[153px] whitespace-nowrap">
          <p className="relative shrink-0">{`　`}</p>
          <p className="relative shrink-0">{`　`}</p>
          <p className="relative shrink-0">選</p>
          <p className="relative shrink-0">ん</p>
          <p className="relative shrink-0">で</p>
          <p className="relative shrink-0">く</p>
          <p className="relative shrink-0">だ</p>
          <p className="relative shrink-0">さ</p>
          <p className="relative shrink-0">い</p>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[203px] top-[152px]">
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">
            あ
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">
            な
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">
            た
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-black whitespace-nowrap">
            の
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[99.885%] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
            一
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[99.885%] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
            杯
          </p>
          <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[99.885%] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
            を
          </p>
          <div className="content-stretch flex flex-col h-[16px] items-center relative shrink-0 w-[32px]">
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-180">
                <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] leading-[99.885%] not-italic relative text-[32px] text-black tracking-[-0.32px] whitespace-nowrap">
                  、
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[150px] items-center justify-center left-[calc(50%-19px)] top-[2337px] w-[40px]">
        <div className="flex-none rotate-90">
          <div className="h-[40px] relative w-[150px]">
            <svg
              className="absolute block inset-0 size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 150 40"
            >
              <g>
                <path
                  d="M7.5 20H131.25"
                  stroke="var(--stroke-0, #1C1008)"
                  strokeWidth="2"
                />
                <path d={svgPaths.p3524a5c0} fill="var(--fill-0, #1C1008)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SiteIntro({ sectionRef }: { sectionRef?: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={sectionRef}
      className="absolute contents left-[calc(50%-192px)] top-[1251px]"
      data-name="サイト紹介"
    >
      <div
        className="absolute border-5 border-black border-solid h-[422px] left-[calc(50%-192px)] overflow-clip top-[1251px] w-[365px]"
        data-name="サイト紹介"
      >
        <div className="-translate-x-1/2 absolute bottom-[calc(0%-5px)] left-1/2 top-[calc(0.36%-4.96px)] w-[363px]">
          <div className="absolute inset-[-0.18%_-0.21%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 364.5 421.993"
            >
              <path
                d={svgPaths.p39326480}
                fill="var(--fill-0, #F2EDE4)"
                stroke="var(--stroke-0, #1C1008)"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bottom-[calc(3.32%-4.67px)] left-1/2 top-[calc(1.9%-4.81px)] w-[345px]">
          <svg
            className="absolute block inset-0 size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 345.5 400.5"
          >
            <path
              d={svgPaths.p2d1c8430}
              stroke="var(--stroke-0, black)"
              strokeDasharray="6 6"
              strokeWidth="0.5"
            />
          </svg>
        </div>
        <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%-117.5px)] not-italic text-[#9b7b3a] text-[32px] text-justify top-[25px] tracking-[-2.88px] whitespace-nowrap">
          <span className="leading-[normal]">いら</span>
          <span className="leading-[normal] tracking-[-3.68px]">っ</span>
          <span className="leading-[normal] tracking-[-2.08px]">し</span>
          <span className="leading-[normal] tracking-[-0.96px]">ゃ</span>
          <span className="leading-[normal] tracking-[0.16px]">い</span>
          <span className="leading-[normal]">ませ</span>
        </p>
        <div className="absolute h-0 left-[53px] top-[79px] w-[248px]">
          <div className="absolute inset-[-0.75px_0]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 248 1.5"
            >
              <path
                d="M0 0.75H248"
                stroke="var(--stroke-0, #9B7B3A)"
                strokeOpacity="0.39"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[5px] items-center left-[calc(50%+0.5px)] not-italic text-[#9b7b3a] text-justify top-[94px] w-[132px] whitespace-nowrap">
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[13px]">
            当サイトは福岡にて
          </p>
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[13px]">
            実際に食べ歩いた
          </p>
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[13px]">
            本物の豚骨ラーメンのみを
          </p>
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[13px]">
            厳選してご紹介して
          </p>
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[13px]">
            おります。
          </p>
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col gap-[2px] items-center justify-center left-1/2 not-italic text-[#9b7b3a] text-justify top-[227px] whitespace-nowrap">
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[12px]">
            広告・案件は
          </p>
          <p className="font-['Yuji_Syuku',sans-serif] leading-[normal] relative shrink-0 text-[12px]">
            一切ございません。
          </p>
        </div>
        <div className="-translate-x-1/2 absolute h-0 left-[calc(50%-4px)] top-[278px] w-[237px]">
          <div className="absolute inset-[-0.25px_0]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 237 0.5"
            >
              <path
                d="M0 0.25H237"
                stroke="var(--stroke-0, #9B7B3A)"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[64px] left-[calc(50%-63.5px)] not-italic text-[#9b7b3a] text-[64px] text-justify top-[285px] whitespace-nowrap">
          骨霧
        </p>
        <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[24px] left-[calc(50%-47.5px)] not-italic text-[#9b7b3a] text-[24px] text-justify top-[359px] whitespace-nowrap">
          こつぎり
        </p>
        {/* Hanko stamp */}
        <div className="absolute flex items-center justify-center left-[263.83px] size-[70.342px] top-[298.83px]">
          <div className="-rotate-11 flex-none">
            <div className="relative size-[60px]">
              <div className="absolute inset-[-2.29%_-0.7%_-1.84%_-2.26%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 61.7726 62.478"
                >
                  <circle
                    cx="31.355"
                    cy="31.3736"
                    fill="var(--fill-0, #FFFCFC)"
                    r="30"
                  />
                  <path
                    d={svgPaths.p2c80b900}
                    fill="var(--stroke-0, #C0321A)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[41.93px] items-center justify-center left-[269.88px] top-[310.67px] w-[55.376px]">
          <div className="-rotate-11 flex-none">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Yuji_Syuku',sans-serif] items-center not-italic relative text-[#c0321a] text-center w-[50px]">
              <p className="leading-[24px] relative shrink-0 text-[24px] w-full">
                骨霧
              </p>
              <p className="leading-[12px] relative shrink-0 text-[12px] uppercase w-full">
                こつぎり
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConceptSection({ sectionRef }: { sectionRef?: Ref<HTMLDivElement> }) {
  return (
    <div
      ref={sectionRef}
      className="-translate-x-1/2 absolute contents left-[calc(50%-1px)] top-[729.77px]"
      data-name="コンセプト"
    >
      <div className="-translate-x-1/2 absolute h-[243.228px] left-[calc(50%-1px)] top-[729.77px] w-[390px]">
        <div className="absolute bg-[#f2ede4] h-[225px] left-px top-0 w-[389px]" />
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[154px] leading-[24px] left-[calc(50%+1px)] not-italic text-[#c0321a] text-[24px] top-[40px] w-[212px]">
          <p
            className="absolute left-[13px] top-[67px] w-[28px]"
            style={{ fontFeatureSettings: '"dlig"' }}
          >
            分かった
          </p>
          <p
            className="absolute left-[67px] top-[24px] w-[19px]"
            style={{ fontFeatureSettings: '"dlig"' }}
          >
            本場と
          </p>
          <p
            className="absolute left-[120px] top-[22px] w-[24px]"
            style={{ fontFeatureSettings: '"dlig"' }}
          >
            瞬間に
          </p>
          <p
            className="absolute left-[174px] top-[-27px] w-[24px]"
            style={{ fontFeatureSettings: '"dlig"' }}
          >
            飲んだ
          </p>
        </div>
        <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%-113px)] not-italic text-[0px] text-black top-[354.23px] tracking-[20px] whitespace-nowrap">
          <span className="leading-[0.88] text-[105px]">拉</span>
          <span className="leading-[0.88] text-[100px]">麺</span>
        </p>
      </div>
      <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%-109px)] not-italic text-[0px] text-black top-[1188px] tracking-[2.4px] whitespace-nowrap">
        <span className="leading-[0.88] text-[48px]">ら</span>
        <span className="leading-[0.88] text-[40px] tracking-[23.6px]">ー</span>
        <span className="leading-[0.88] text-[48px] tracking-[1.44px]">
          めん
        </span>
      </p>
    </div>
  );
}

function NoodleDecoration() {
  return (
    <div className="absolute h-[115.041px] left-0 top-[555.42px] w-[389.5px]">
      <div className="absolute inset-[-0.43%_-0.13%_-0.43%_-0.12%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 390.443 116.041"
        >
          <g>
            <path d={svgPaths.p32a944dc} stroke="var(--stroke-0, #9B7B3A)" />
            <path d={svgPaths.pb52e800} stroke="var(--stroke-0, #9B7B3A)" />
            <path d={svgPaths.p2e050d40} stroke="var(--stroke-0, #9B7B3A)" />
            <path d={svgPaths.p109e3300} stroke="var(--stroke-0, #9B7B3A)" />
            <path d={svgPaths.p3533e080} stroke="var(--stroke-0, #9B7B3A)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FirstView({
  sectionRef,
  conceptRef,
}: {
  sectionRef?: Ref<HTMLDivElement>;
  conceptRef?: Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={sectionRef}
      className="absolute contents left-[-1px] top-0"
      data-name="ファーストビュー"
    >
      <div className="absolute bg-[#f2ede4] h-[1250.169px] left-[10px] top-0 w-[373px]" />
      <ConceptSection sectionRef={conceptRef} />
      <NoodleDecoration />
      {/* Title 骨霧 */}
      <div className="-translate-x-1/2 absolute h-[287px] left-[calc(50%-2px)] top-[17px] w-[120px]">
        <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex flex-col font-['Yuji_Syuku',sans-serif] gap-[10px] h-[600px] items-center justify-center leading-[200px] left-[calc(50%+2px)] not-italic text-[200px] text-black top-[-31px] whitespace-nowrap">
          <p className="relative shrink-0">骨</p>
          <p className="relative shrink-0">霧</p>
        </div>
      </div>
      {/* のれん */}
      <div className="-translate-x-1/2 absolute h-[175px] left-1/2 top-[1067px] w-[392px]">
        <div className="absolute inset-[0_0_-0.57%_0]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 392 176.02"
          >
            <path
              d={svgPaths.pba0b500}
              stroke="var(--stroke-0, black)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <p
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[310px] leading-[normal] left-[calc(50%+121px)] not-italic text-[#9b7b3a] text-[20px] top-[44px] w-[20px]"
        style={{ fontFeatureSettings: '"vert"' }}
      >
        福岡豚骨ラーメンサイト
      </p>
      <p
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[60px] left-[calc(50%-149px)] not-italic text-[#9b7b3a] text-[24px] top-[186px] w-[24px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        こつぎり
      </p>
    </div>
  );
}

export default function MainPage({ onNavigate }: Props) {
  const firstViewRef = useRef<HTMLDivElement | null>(null);
  const siteIntroRef = useRef<HTMLDivElement | null>(null);
  const conceptRef = useRef<HTMLDivElement | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);
  const authorRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (ref: { current: HTMLDivElement | null }) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="bg-[#f2ede4] relative"
      style={{ width: "390px", height: "4770px" }}
      data-name="スマホデザインカンプ(main)_最終版"
    >
      <Footer
        onGoTop={() => scrollTo(firstViewRef)}
        onSiteIntro={() => scrollTo(siteIntroRef)}
        onConcept={() => scrollTo(conceptRef)}
        onProduct={() => scrollTo(productRef)}
        onAuthor={() => scrollTo(authorRef)}
      />
      <PassionSection />
      <div
        ref={authorRef}
        className="-translate-x-1/2 absolute left-1/2 size-[296px] top-[3438px]"
        data-name="作者写真"
      >
        <img
          alt="作者写真"
          className="absolute block inset-0 max-w-none size-full"
          height="296"
          src={img}
          width="296"
        />
      </div>
      <div
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%-148px)] not-italic opacity-70 text-[9px] text-black top-[3740px] w-[162px]"
        style={{ fontFeatureSettings: '"dlig"' }}
      >
        <p className="leading-[12px] mb-0">福岡出身・在住21年の学生。</p>
        <p className="leading-[12px]">地元の豚骨ラーメンを食べ続けてきた。</p>
      </div>
      <KenbaikiSection onNavigate={onNavigate} sectionRef={productRef} />
      <GuideSection onNavigate={onNavigate} />
      <SiteIntro sectionRef={siteIntroRef} />
      <FirstView sectionRef={firstViewRef} conceptRef={conceptRef} />
    </div>
  );
}
