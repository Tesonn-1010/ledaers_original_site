import svgPaths from "../../imports/スマホデザインカンプSub最終版/svg-77puehqdlq";
import imgRectangle4 from "../../imports/スマホデザインカンプSub最終版/93e0105758c8c1fb202207630a3dea113cdcec0e.png";
import img from "../../imports/スマホデザインカンプSub最終版/7b565c0ae529e8a6942588620720afd226207ecf.png";

interface Props {
  onNavigate: (page: "main") => void;
  scrollRoot: React.RefObject<HTMLDivElement | null>;
}

function FooterBackArrow({ onTop }: { onTop: () => void }) {
  return (
    <div className="absolute contents left-[calc(50%+126px)] top-[2944px]" data-name="戻る矢印">
      <div className="absolute h-[90.897px] left-[calc(50%+126px)] top-[2944px] w-0">
        <div className="absolute inset-[-0.55%_-3.68px_0_-3.68px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36396 91.3975">
            <path d={svgPaths.p2ea9b4b0} fill="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <button
        onClick={onTop}
        className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[50px] leading-[10px] left-[calc(50%+128px)] not-italic text-[10px] text-black top-[2986px] w-[10px] bg-transparent border-none cursor-pointer p-0"
      >
        最初に戻る
      </button>
    </div>
  );
}

function FooterNavContents({ onNavigate }: { onNavigate: (page: "main") => void }) {
  const navClass =
    "[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] not-italic text-[8px] text-black top-[17px] w-[8px] bg-transparent border-none cursor-pointer p-0 text-left";
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="コンテンツ">
      <div className="absolute h-0 left-0 top-0 w-[100px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 1">
            <path d="M0 0.5H100" stroke="var(--stroke-0, black)" />
          </svg>
        </div>
      </div>
      <button type="button" onClick={() => onNavigate("main")} className={`${navClass} leading-[8px] left-[92px]`} style={{ fontFeatureSettings: '"dlig"' }}>トップ</button>
      <button type="button" onClick={() => onNavigate("main")} className={`${navClass} leading-[0] left-[calc(50%-4px)]`} style={{ fontFeatureSettings: '"dlig"' }}>
        <span className="block leading-[8px]">サイト紹介</span>
      </button>
      <button type="button" onClick={() => onNavigate("main")} className={`${navClass} leading-[8px] left-[70px]`} style={{ fontFeatureSettings: '"dlig"' }}>コンセプト</button>
      <button type="button" onClick={() => onNavigate("main")} className={`${navClass} leading-[8px] left-[24px]`} style={{ fontFeatureSettings: '"dlig"' }}>商品特集</button>
      <button type="button" onClick={() => onNavigate("main")} className={`${navClass} leading-[8px] left-0`} style={{ fontFeatureSettings: '"dlig"' }}>作者紹介</button>
    </div>
  );
}

function FooterMessage() {
  return (
    <div className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-black" data-name="メッセージ">
      <p className="col-1 h-[37px] leading-[13px] ml-[86.46px] mt-0 relative row-1 text-[13px] w-[13.542px]" style={{ fontFeatureSettings: '"dlig"' }}>福岡に</p>
      <p className="col-1 h-[37px] leading-[13px] ml-[60.29px] mt-[17px] relative row-1 text-[13px] w-[13.542px]" style={{ fontFeatureSettings: '"dlig"' }}>来たら</p>
      <p className="col-1 h-[75px] leading-[13px] ml-[31.17px] mt-[26px] relative row-1 text-[13px] w-[13.542px]" style={{ fontFeatureSettings: '"dlig"' }}>食べて欲しい</p>
      <p className="col-1 h-[62px] leading-[12px] ml-0 mt-[65px] relative row-1 text-[12px] w-[13.542px]" style={{ fontFeatureSettings: '"dlig"' }}>一杯がある</p>
    </div>
  );
}

function Footer({ onNavigate, onTop }: { onNavigate: (page: "main") => void; onTop: () => void }) {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%+1.92px)] top-[2577.01px]" data-name="フッター">
      <FooterBackArrow onTop={onTop} />
      <div className="absolute flex h-[1.631px] items-center justify-center left-[calc(50%-181.08px)] top-[2577.01px] w-[366px]">
        <div className="flex-none rotate-[-179.74deg] skew-x-[0.26deg]">
          <div className="h-0 relative w-[366.003px]">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 366.003 1">
                <path d="M0 0.5H366.003" stroke="var(--stroke-0, black)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[67.645px] leading-[16px] left-[calc(50%-75.08px)] not-italic text-[16px] text-black top-[2673.19px] w-[16px]" style={{ fontFeatureSettings: '"dlig"' }}>こつぎり</p>
      {/* フッター main block */}
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[25px] h-[444.975px] items-start left-[calc(50%+1.94px)] top-[2596.03px]">
        <p className="[word-break:break-word] font-['Yuji_Syuku',sans-serif] h-[196px] leading-[100px] min-w-full not-italic relative shrink-0 text-[100px] text-black w-[min-content]" style={{ fontFeatureSettings: '"dlig"' }}>骨霧</p>
        <FooterNavContents onNavigate={onNavigate} />
        <FooterMessage />
      </div>
    </div>
  );
}

function TipsSection() {
  return (
    <div className="absolute h-[426px] left-0 overflow-clip top-[2131px] w-[390px]" data-name="お得情報">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 390 426">
        <path d="M390 0H0V426H390V0Z" fill="var(--fill-0, #F2EDE4)" />
      </svg>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[9.09%_26%_83.03%_8%] leading-[normal] text-[#1c1008] text-[18px]">知っておくと得する情報</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP',sans-serif] font-normal inset-[17.58%_78.67%_79.39%_8%] leading-[normal] text-[#9b7b3a] text-[8px]">四つの心得</p>
      {[
        { top: "26.67%", bottom: "73.33%" },
        { top: "46.67%", bottom: "53.33%" },
        { top: "61.21%", bottom: "38.79%" },
        { top: "75.76%", bottom: "24.24%" },
        { top: "90.91%", bottom: "9.09%" },
      ].map((pos, i) => (
        <div key={i} className="absolute inset-0" style={{ top: pos.top, bottom: pos.bottom, left: "8%", right: "8%" }}>
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 327.6 1">
              <path d="M0 0.5H327.6" stroke="var(--stroke-0, #9B7B3A)" strokeOpacity="0.4" />
            </svg>
          </div>
        </div>
      ))}
      {/* 一 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[31.82%_87.67%_62.42%_8%] leading-[normal] text-[#9b7b3a] text-[13px]">一</p>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[32.12%_37.33%_62.73%_18.67%] leading-[0] text-[#1c1008] text-[12px]">
        <span className="leading-[normal]">券売機は</span>
        <span className="font-bold leading-[normal] text-[#c0321a]">並んでいる間</span>
        <span className="leading-[normal]">に</span>
      </p>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[37.58%_41.33%_57.27%_18.67%] leading-[normal] text-[#1c1008] text-[12px]">確認するとスムーズ。</p>
      {/* 二 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[51.82%_87.67%_42.42%_8%] leading-[normal] text-[#9b7b3a] text-[13px]">二</p>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[52.12%_5%_42.73%_18.67%] leading-[normal] text-[#1c1008] text-[12px]">カウンター席のみ。一人でも入りやすい。</p>
      {/* 三 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[66.36%_87.67%_27.88%_8%] leading-[normal] text-[#9b7b3a] text-[13px]">三</p>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[66.67%_17.67%_28.18%_18.67%] leading-[0] text-[#1c1008] text-[12px]">
        <span className="leading-[normal]">スープが濃いめなので</span>
        <span className="font-bold leading-[normal] text-[#c0321a]">水は多め</span>
        <span className="leading-[normal]">に。</span>
      </p>
      {/* 四 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[80.91%_87.67%_13.33%_8%] leading-[normal] text-[#9b7b3a] text-[13px]">四</p>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[81.21%_9.67%_13.64%_18.67%] leading-[0] text-[#1c1008] text-[12px]">
        <span className="leading-[normal]">替え玉は</span>
        <span className="font-bold leading-[normal] text-[#c0321a]">スープが残るうち</span>
        <span className="leading-[normal]">に頼むこと。</span>
      </p>
    </div>
  );
}

function WaitTimeSection() {
  return (
    <div className="absolute h-[386px] left-[calc(50%-182px)] top-[1753px] w-[365px]" data-name="空いている時間">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 365 386">
        <path d="M365 0H0V386H365V0Z" fill="var(--fill-0, #F2EDE4)" />
      </svg>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[10.99%_44%_79.49%_8%] leading-[normal] text-[#1c1008] text-[18px]">すいている時間帯</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP',sans-serif] font-normal inset-[21.24%_58.67%_75.09%_8%] leading-[normal] text-[#9b7b3a] text-[8px]">平日 ─ 実際に並んで計った</p>
      {/* dividers */}
      {[
        { top: "32.23%", bottom: "67.77%" },
        { top: "49.82%", bottom: "50.18%" },
        { top: "67.4%", bottom: "32.6%" },
        { top: "84.98%", bottom: "15.02%" },
      ].map((pos, i) => (
        <div key={i} className="absolute" style={{ top: pos.top, bottom: pos.bottom, left: "8%", right: "8%" }}>
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306.6 1">
              <path d="M0 0.5H306.6" stroke="var(--stroke-0, #9B7B3A)" strokeOpacity="0.4" />
            </svg>
          </div>
        </div>
      ))}
      {/* 十一時 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[37.73%_77%_54.21%_8%] leading-[normal] text-[#c0321a] text-[15px]">十一時</p>
      <div className="absolute inset-[41.76%_38.67%_58.24%_33.33%]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102.2 1">
            <path d="M0 0.5H102.2" stroke="var(--stroke-0, #C0321A)" strokeDasharray="1.5 3" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[38.46%_8%_54.58%_66%] leading-[normal] text-[#c0321a] text-[13px] text-right">並ばず入れる</p>
      {/* 十二時 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[55.31%_77%_36.63%_8%] leading-[normal] text-[#1c1008] text-[15px]">十二時</p>
      <div className="absolute inset-[59.34%_34.67%_40.66%_33.33%]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116.8 1">
            <path d="M0 0.5H116.8" stroke="var(--stroke-0, #1C1008)" strokeDasharray="1.5 3" strokeOpacity="0.35" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-normal inset-[56.04%_8%_37%_70.33%] leading-[normal] text-[#1c1008] text-[13px] text-right">三十分待ち</p>
      {/* 十四時 */}
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[72.89%_77%_19.05%_8%] leading-[normal] text-[#c0321a] text-[15px]">十四時</p>
      <div className="absolute inset-[76.92%_30.67%_23.08%_33.33%]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 131.4 1">
            <path d="M0 0.5H131.4" stroke="var(--stroke-0, #C0321A)" strokeDasharray="1.5 3" strokeOpacity="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Noto_Serif_JP',sans-serif] font-bold inset-[73.62%_8%_19.42%_74.67%] leading-[normal] text-[#c0321a] text-[13px] text-right">十分待ち</p>
      <p className="[word-break:break-word] absolute font-['Noto_Sans_JP',sans-serif] font-normal inset-[91.94%_8%_2.2%_55.33%] leading-[normal] text-[#9b7b3a] text-[11px] text-right">週末夜は避けるべし。</p>
    </div>
  );
}

function EatMethodSection() {
  return (
    <div className="-translate-x-1/2 absolute bg-black drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)] h-[461px] left-[calc(50%+0.5px)] top-[1294px] w-[365px]" data-name="最強の食べ方">
      <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] inset-[8.93%_12.88%_58.93%_80.55%] leading-[24px] not-italic text-[#c0321a] text-[24px]">最強の食べ方</p>
      <div className="[word-break:break-word] absolute h-[351px] left-[38px] not-italic text-[#9b7b3a] top-[51px] w-[250px]">
        {/* 数字 */}
        <div className="absolute content-stretch flex font-['Yuji_Syuku',sans-serif] gap-[40px] items-center justify-center left-0 text-[20px] text-center top-0 w-[250px]">
          <p className="leading-[normal] relative shrink-0 w-[16px]">四</p>
          <p className="leading-[normal] relative shrink-0 w-[16px]">三</p>
          <p className="leading-[normal] relative shrink-0 w-[16px]">二</p>
          <p className="leading-[99.955%] relative shrink-0 w-[16px]">一</p>
        </div>
        {/* 食べ方テキスト */}
        <p className="absolute font-['Yuji_Syuku',sans-serif] leading-[15px] left-[201px] text-[15px] top-[44px] w-[16px]" style={{ fontFeatureSettings: '"vert"' }}>ラーメン＋替え玉＋辛子高菜が一双の正解。</p>
        <p className="absolute font-['Yuji_Syuku',sans-serif] leading-[15px] left-[145px] text-[15px] top-[47px] w-[16px]" style={{ fontFeatureSettings: '"vert"' }}>最初の一口はスープだけ飲む。</p>
        <p className="absolute font-['Yuji_Syuku',sans-serif] leading-[15px] left-[89px] text-[15px] top-[47px] w-[16px]" style={{ fontFeatureSettings: '"vert"' }}>中盤で辛子高菜を投入して味変。</p>
        <p className="absolute font-['Yuji_Syuku',sans-serif] leading-[16px] left-[32px] text-[16px] top-[47px] w-[16px]" style={{ fontFeatureSettings: '"vert"' }}>替え玉は「ハリガネ」で頼むのが一双流。</p>
      </div>
    </div>
  );
}

function BasicInfoSection() {
  return (
    <div className="absolute contents left-[calc(50%-143px)] top-[1057px]" data-name="基本情報">
      <div className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] leading-[0] left-[calc(50%-143px)] text-[0px] text-black top-[1074px] whitespace-nowrap">
        <p className="leading-[normal] mb-0 text-[20px] whitespace-pre">基本情報</p>
        <p className="leading-[normal] mb-0 text-[20px] whitespace-pre">​</p>
        <p className="mb-0 text-[12px] whitespace-pre"><span className="leading-[21px]">福岡市博多区店屋町7-28</span></p>
        <p className="mb-0 text-[12px] whitespace-pre"><span className="leading-[21px]">11:00〜翌2:00</span></p>
        <p className="leading-[21px] mb-0 text-[12px] whitespace-pre">不定休</p>
        <p className="text-[12px] whitespace-pre"><span className="leading-[21px]">¥800〜¥1,000</span></p>
      </div>
      <div className="absolute h-[188px] left-1/2 top-[1057px] w-[167px]">
        <img alt="店舗写真" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
    </div>
  );
}

function KodawariSection() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute content-stretch flex font-['Yuji_Syuku',sans-serif] gap-[48px] items-center justify-center left-[calc(50%-3.5px)] not-italic top-[677px]" data-name="こだわり">
      <p className="h-[222px] leading-[20px] relative shrink-0 text-[#c0321a] text-[20px] w-[20px]" style={{ fontFeatureSettings: '"vert"' }}>替え玉をしないと後悔する。</p>
      <p className="leading-[0] relative shrink-0 text-[0px] text-black w-[13px]" style={{ fontFeatureSettings: '"vert"' }}>
        <span className="leading-[14px] text-[#9b7b3a] text-[13px]">極細麺との絡みが異常なほど完成されている</span>
        <span className="leading-[14px] text-[#9b7b3a] text-[11px]">。</span>
      </p>
      <p className="leading-[0] relative shrink-0 text-[0px] text-black w-[13px]" style={{ fontFeatureSettings: '"vert"' }}>
        <span className="leading-[14px] text-[#9b7b3a] text-[13px]">白濁したスープは雑味がなく</span>
        <span className="leading-[14px] text-[#9b7b3a] text-[11px]">、</span>
      </p>
      <p className="leading-[14px] relative shrink-0 text-[#9b7b3a] text-[13px] w-[13px]" style={{ fontFeatureSettings: '"vert"' }}>博多駅から徒歩圏内にある、行列が絶えない一軒。</p>
    </div>
  );
}

function FirstView() {
  return (
    <div className="-translate-x-1/2 absolute h-[609px] left-1/2 top-0 w-[378px]" data-name="詳細ページファーストビュー">
      <div className="absolute left-[4px] size-[367px] top-[4px]">
        <img alt="一双ラーメン" className="absolute block inset-0 max-w-none size-full" height="367" src={img} width="367" />
      </div>
      <p className="[word-break:break-word] absolute font-['Yuji_Syuku',sans-serif] h-[408px] leading-[200px] left-[calc(50%-189px)] not-italic text-[#c0321a] text-[250px] text-shadow-[17px_3px_4px_rgba(255,255,255,0.4)] top-[190px] w-[251px]">一双</p>
      <p className="[word-break:break-word] absolute bottom-[1.64%] font-['Yuji_Syuku',sans-serif] leading-none left-[calc(50%+122px)] not-italic text-[#c0321a] text-[24px] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] top-[53.53%] w-[24px]" style={{ fontFeatureSettings: '"vert"' }}>濃厚なスープが麺と絡む</p>
    </div>
  );
}

export default function SubPage({ onNavigate, scrollRoot }: Props) {
  const scrollTop = () =>
    scrollRoot.current?.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="bg-[#f2ede4] relative" style={{ width: "390px", height: "3200px" }} data-name="スマホデザインカンプ(sub)_最終版">
      <Footer onNavigate={onNavigate} onTop={scrollTop} />
      <TipsSection />
      <WaitTimeSection />
      <EatMethodSection />
      <BasicInfoSection />
      <KodawariSection />
      <FirstView />
    </div>
  );
}
