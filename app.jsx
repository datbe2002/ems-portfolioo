// app.jsx — PTI insurance consultant landing page

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "midnight-azure",
  "serif": "Plus Jakarta Sans",
  "density": "cozy",
  "advisorName": "Tăng Thị Thảo Trang",
  "advisorTitle": "Trưởng phòng phát triển đại lý cá nhân",
  "advisorBranch": "PTI Thống Nhất",
  "advisorRegion": "Lầu 2, Chung cư Thủy Lợi 4, số 205 Nguyễn Xí, Phường 25, Quận Bình Thạnh, TP. Hồ Chí Minh",
  "advisorPhone": "0866 033 594",
  "advisorEmail": "trangttt2@pti.com.vn"
} /*EDITMODE-END*/;

// ── icons ────────────────────────────────────────────────────────────────
const Ico = {
  shield: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>,
  check: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m5 12 5 5L20 7" /></svg>,
  car: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 17h14" /><path d="M5 17v-3l2-5h10l2 5v3" /><path d="M5 17v2h2v-2" /><path d="M17 17v2h2v-2" /><circle cx="8" cy="14" r="1" /><circle cx="16" cy="14" r="1" /></svg>,
  heart: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 20s-7-4.5-9-9.5C2 7 4.5 4 8 4c2 0 3.5 1 4 2.5C12.5 5 14 4 16 4c3.5 0 6 3 5 6.5-2 5-9 9.5-9 9.5Z" /></svg>,
  home: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></svg>,
  plane: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M3 13.5 21 5l-3 9-6 1-3 6-1.5-4Z" /><path d="m8 17 3-3" /></svg>,
  building: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M4 21V5h10v16" /><path d="M14 11h6v10" /><path d="M7 9h.01M11 9h.01M7 13h.01M11 13h.01M7 17h.01M11 17h.01M17 14h.01M17 18h.01" /></svg>,
  doc: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M14 3H6v18h12V7l-4-4Z" /><path d="M14 3v4h4" /><path d="M9 13h6M9 17h6M9 9h2" /></svg>,
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>,
  plus: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M12 5v14M5 12h14" /></svg>,
  star: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="m12 2 3 7 7.5.5-5.7 5 1.7 7.5L12 18l-6.5 4 1.7-7.5L1.5 9.5 9 9l3-7Z" /></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></svg>,
  clock: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  chat: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l1.5-4.6A8.5 8.5 0 1 1 21 11.5Z" /></svg>,
  users: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="9" cy="8" r="3.5" /><path d="M2 20a7 7 0 0 1 14 0" /><circle cx="17" cy="9" r="2.5" /><path d="M18 15c2.5 0 4 2 4 4" /></svg>,
  globe: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>,
  burger: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M4 6h16M4 12h16M4 18h16" /></svg>,
  x: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}><path d="M6 6 18 18M18 6 6 18" /></svg>,
  zalo: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 3C6.5 3 2 6.8 2 11.4c0 2.4 1.3 4.6 3.3 6.1L4.7 21l3.5-1.8c1.2.3 2.5.5 3.8.5 5.5 0 10-3.8 10-8.3S17.5 3 12 3Z" /></svg>,
  fb: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13 22v-9h3l.5-4H13V6.5c0-1.1.3-1.9 1.9-1.9H17V1.1c-.4 0-1.7-.1-3.2-.1-3.2 0-5.3 1.9-5.3 5.4V9H5v4h3.5v9H13Z" /></svg>,
  briefcase: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...p}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 12h18" /></svg>,
  spark: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M6 18l3-3M15 9l3-3" /></svg>
};

// ── shared layout pieces ─────────────────────────────────────────────────
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
}

function Logo({ subtitle = "Tư vấn bảo hiểm PTI" }) {
  return (
    <a className="logo" href="#top">
      <span className="logo-mark">
        <LogoMark />
      </span>
      <span>
        <span style={{ display: "block", lineHeight: 1.1 }}>PTI Advisor</span>
        <small>{subtitle}</small>
      </span>
    </a>);

}

function LogoMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="lm-svg">
      <text x="11" y="17.5" textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="18" fontWeight="500" letterSpacing="-0.02em"
        fill="currentColor">P</text>
      <circle cx="18" cy="7" r="1.6" className="lm-dot" />
    </svg>
  );
}

const NAV = [
  { id: "about", label: "Giới thiệu" },
  { id: "services", label: "Dịch vụ" },
  { id: "process", label: "Quy trình" },
  { id: "reviews", label: "Đánh giá" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Liên hệ" }];


function Header({ onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
  };
  return (
    <>
      <header className={"hdr" + (scrolled ? " scrolled" : "")}>
        <div className="wrap hdr-inner">
          <nav className="nav-desktop">
            {NAV.map((n) =>
              <a key={n.id} className="nav-link" onClick={() => go(n.id)}>{n.label}</a>
            )}
          </nav>
          <button className="btn btn-primary btn-sm hdr-cta" onClick={onCta}>
            Tư vấn miễn phí <Ico.arrow style={{ width: 14, height: 14 }} />
          </button>
          <button className="btn btn-secondary btn-sm nav-mobile-btn" aria-label="Menu"
            onClick={() => setMobileOpen((v) => !v)}>
            {mobileOpen ? <Ico.x style={{ width: 16, height: 16 }} /> : <Ico.burger style={{ width: 16, height: 16 }} />}
          </button>
        </div>
      </header>
      {mobileOpen &&
        <div className="mobile-menu">
          {NAV.map((n) => <a key={n.id} onClick={() => go(n.id)}>{n.label}</a>)}
          <button className="btn btn-primary" onClick={() => { setMobileOpen(false); onCta(); }}>
            Nhận tư vấn miễn phí <Ico.arrow style={{ width: 16, height: 16 }} />
          </button>
        </div>
      }
    </>);

}

// silhouette portrait — placeholder for real photo
function PortraitSilhouette({ tint = "rgba(255,255,255,.18)" }) {
  return (
    <svg viewBox="0 0 240 280" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      {/* shoulders/jacket */}
      <path d="M30 280 C 40 200, 80 180, 120 178 C 160 180, 200 200, 210 280 Z" fill={tint} />
      {/* shirt collar */}
      <path d="M100 200 L120 224 L140 200 L138 240 L102 240 Z" fill="rgba(255,255,255,.4)" />
      {/* tie placeholder */}
      <path d="M116 224 L124 224 L128 264 L120 274 L112 264 Z" fill="rgba(245,166,35,.55)" />
      {/* neck */}
      <rect x="108" y="170" width="24" height="22" rx="6" fill={tint} />
      {/* head */}
      <ellipse cx="120" cy="140" rx="38" ry="44" fill={tint} />
      {/* hair */}
      <path d="M82 130 C 86 96, 110 80, 122 80 C 144 80, 158 100, 158 124 C 152 116, 138 110, 122 110 C 104 110, 90 118, 82 130 Z" fill="rgba(0,0,0,.32)" />
    </svg>);

}

// ── Hero ────────────────────────────────────────────────────────────────
function Hero({ onCta, advisorName }) {
  const trustBadges = [
    "Tư vấn rõ ràng",
    "Hỗ trợ nhanh chóng",
    "Đồng hành khi bồi thường",
    "Giải pháp từ PTI"];

  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <span className="hero-eyebrow">
            <span className="dot" />
            Tư vấn bảo hiểm phi nhân thọ · PTI
          </span>
          <h1>
            Bảo vệ tài sản, sức khỏe<br />và <em>sự an tâm</em> của bạn cùng PTI
          </h1>
          <p className="lede">
            Tư vấn giải pháp bảo hiểm phi nhân thọ phù hợp cho cá nhân, gia đình và doanh nghiệp
            — rõ ràng, tận tâm và dễ hiểu.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={onCta}>
              Nhận tư vấn miễn phí <Ico.arrow style={{ width: 16, height: 16 }} />
            </button>
            <a className="btn btn-ghost-light" href="#services" onClick={(e) => {
              e.preventDefault();
              scrollToId("services");
            }}>
              Xem các gói bảo hiểm
            </a>
          </div>
          <div className="trust-row">
            {trustBadges.map((t) =>
              <span key={t} className="trust-pill">
                <Ico.check />
                {t}
              </span>
            )}
          </div>
        </div>

        <div className="reveal in" style={{ transitionDelay: ".15s" }}>
          <div className="portrait">
            <img className="photo" src="assets/advisor-portrait.png"
              alt="Tư vấn viên bảo hiểm PTI"
              loading="eager" fetchpriority="high" decoding="async" />
            <div className="portrait-badge">
              <span className="dot" />
              Đang nhận tư vấn
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ── About ───────────────────────────────────────────────────────────────
function About({ advisorName }) {
  const values = [
    { ico: <Ico.spark />, title: "Minh bạch trong tư vấn", desc: "Giải thích đầy đủ điều khoản, phạm vi và điều kiện trước khi ký hợp đồng." },
    { ico: <Ico.heart />, title: "Tận tâm khi hỗ trợ", desc: "Lắng nghe nhu cầu thực tế, không ép mua, không phóng đại quyền lợi." },
    { ico: <Ico.shield />, title: "Đồng hành khi rủi ro", desc: "Hỗ trợ chuẩn bị hồ sơ và theo dõi tiến độ bồi thường cùng khách hàng." }];

  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="wrap">
        <div className="about-grid">
          <div className="reveal">
            <div className="about-photo">
              <div className="frame-corner tl" />
              <div className="frame-corner br" />
              <img className="photo" src="assets/advisor-about.png"
                alt="Tư vấn viên bảo hiểm PTI"
                loading="lazy" decoding="async" />
              <div className="credential" style={{ opacity: "0" }}>
                <span className="logo-mark">
                  <Ico.shield style={{ width: 14, height: 14 }} />
                </span>
                <div>
                  <div style={{ fontWeight: 600, lineHeight: 1.2 }}>{advisorName}</div>
                  <div style={{ fontSize: 12, color: "var(--muted)" }}>Tư vấn viên bảo hiểm — PTI</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <span className="section-eyebrow">Về tôi</span>
            <h2 className="section-title">Đồng hành cùng bạn,<br />không chỉ là một hợp đồng bảo hiểm.</h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--ink-2)", marginTop: 0 }}>
              Tôi là <b style={{ color: "var(--ink)" }}>{advisorName}</b>, hiện đang làm việc trong lĩnh vực
              bảo hiểm phi nhân thọ tại PTI. Tôi hỗ trợ khách hàng lựa chọn các giải pháp bảo hiểm
              phù hợp với nhu cầu thực tế — từ bảo hiểm xe cơ giới, sức khỏe, tài sản đến bảo hiểm
              cho doanh nghiệp.
            </p>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
              Mục tiêu của tôi không chỉ là bán một hợp đồng bảo hiểm, mà là giúp khách hàng
              <b style={{ color: "var(--ink)" }}> hiểu đúng, chọn đúng và được hỗ trợ đúng lúc</b> khi cần.
            </p>

            <div className="values">
              {values.map((v) =>
                <div key={v.title} className="value">
                  <span className="ico">{React.cloneElement(v.ico, { style: { width: 18, height: 18 } })}</span>
                  <b>{v.title}</b>
                  <span>{v.desc}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

// ── Services ────────────────────────────────────────────────────────────
function Services() {
  const items = [
    { ico: <Ico.car />, title: "Bảo hiểm xe ô tô / xe máy", desc: "Bảo vệ trước rủi ro tai nạn, va chạm, trách nhiệm dân sự và thiệt hại vật chất xe." },
    { ico: <Ico.heart />, title: "Bảo hiểm sức khỏe cá nhân", desc: "Hỗ trợ chi phí y tế, nằm viện, điều trị và chăm sóc sức khỏe cho bạn và gia đình." },
    { ico: <Ico.home />, title: "Bảo hiểm tài sản", desc: "Bảo vệ nhà ở, văn phòng, cửa hàng, kho hàng và những tài sản có giá trị." },
    { ico: <Ico.plane />, title: "Bảo hiểm du lịch", desc: "Hỗ trợ rủi ro trong chuyến đi: tai nạn, y tế, hành lý và sự cố ngoài ý muốn." },
    { ico: <Ico.building />, title: "Bảo hiểm doanh nghiệp", desc: "Giải pháp bảo vệ tài sản, nhân sự và hoạt động kinh doanh cho doanh nghiệp." },
    { ico: <Ico.doc />, title: "Tư vấn hồ sơ bồi thường", desc: "Hỗ trợ chuẩn bị hồ sơ, hiểu quy trình và theo dõi tiến độ bồi thường minh bạch." }];

  return (
    <section className="section" id="services" data-screen-label="03 Services" style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--brand-soft) 50%, var(--bg)))" }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span className="section-eyebrow">Dịch vụ tư vấn</span>
          <h2 className="section-title">Giải pháp bảo hiểm phi nhân thọ<br />cho từng nhu cầu</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Sáu nhóm sản phẩm phổ biến mà tôi có thể tư vấn — chọn nhóm phù hợp để tìm hiểu kỹ
            hoặc liên hệ trực tiếp nếu bạn chưa biết bắt đầu từ đâu.
          </p>
        </div>
        <div className="grid-3 reveal">
          {items.map((s) =>
            <div key={s.title} className="card card-hover svc">
              <span className="svc-ico">{React.cloneElement(s.ico, { style: { width: 24, height: 24 } })}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a className="more" href="#contact" onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}>
                Tìm hiểu thêm <Ico.arrow style={{ width: 14, height: 14 }} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Why ─────────────────────────────────────────────────────────────────
function Why() {
  const reasons = [
    "Tư vấn dựa trên nhu cầu thực tế, không ép mua",
    "Giải thích điều khoản bảo hiểm dễ hiểu",
    "Hỗ trợ trước, trong và sau khi ký hợp đồng",
    "Đồng hành khi khách hàng cần làm hồ sơ bồi thường",
    "Đưa ra giải pháp phù hợp với ngân sách",
    "Làm việc chuyên nghiệp, phản hồi nhanh"];

  return (
    <section className="section" id="why" data-screen-label="04 Why">
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 720, marginBottom: 40 }}>
          <span className="section-eyebrow">Vì sao chọn tôi</span>
          <h2 className="section-title">Bảo hiểm là cam kết dài hạn — và tôi xem việc đồng hành là phần quan trọng nhất.</h2>
        </div>
        <div className="why-grid reveal">
          {reasons.map((r, i) =>
            <div key={r} className="why-item">
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <b>{r}</b>
                <span>
                  {[
                    "Lắng nghe trước, đề xuất sau — không gây áp lực quyết định.",
                    "Bóc tách các điều khoản phức tạp thành ngôn ngữ đời thường.",
                    "Hỗ trợ liên tục, kể cả sau khi hợp đồng đã có hiệu lực.",
                    "Tôi đứng cạnh bạn trong toàn bộ quy trình bồi thường.",
                    "Cân đối quyền lợi và ngân sách thay vì chọn gói đắt nhất.",
                    "Cam kết phản hồi trong thời gian hợp lý, không để bạn chờ."][
                    i]}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Process ─────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    { n: "01", t: "Lắng nghe nhu cầu", d: "Tìm hiểu tình trạng cá nhân, tài sản, phương tiện hoặc doanh nghiệp của khách hàng." },
    { n: "02", t: "Đề xuất giải pháp", d: "Gợi ý gói bảo hiểm phù hợp với nhu cầu và ngân sách của bạn." },
    { n: "03", t: "Giải thích quyền lợi", d: "Làm rõ phạm vi, điều khoản loại trừ, phí bảo hiểm và quy trình bồi thường." },
    { n: "04", t: "Đồng hành sau bán", d: "Hỗ trợ khi cần thay đổi thông tin, gia hạn hợp đồng hoặc yêu cầu bồi thường." }];

  return (
    <section className="section" id="process" data-screen-label="05 Process" style={{ background: "linear-gradient(180deg, color-mix(in oklab, var(--brand-soft) 50%, var(--bg)), transparent)" }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 60px" }}>
          <span className="section-eyebrow">Quy trình làm việc</span>
          <h2 className="section-title">Bốn bước rõ ràng,<br />không bất ngờ</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Mỗi bước đều minh bạch — bạn biết mình đang ở đâu trong quy trình và điều gì sẽ diễn ra tiếp theo.
          </p>
        </div>
        <div className="process reveal">
          {steps.map((s) =>
            <div key={s.n} className="step">
              <span className="marker">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Stats ───────────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { big: "100+", small: "khách hàng đã được tư vấn và đồng hành" },
    { big: "24 / 7", small: "sẵn sàng hỗ trợ thông tin khi cần thiết" },
    { big: "6", small: "nhóm sản phẩm bảo hiểm phi nhân thọ chủ lực" },
    { big: "A → Z", small: "đồng hành từ tư vấn đến bồi thường" }];

  return (
    <section className="section" id="stats" data-screen-label="06 Stats" style={{ paddingTop: 0 }}>
      <div className="wrap reveal">
        <div className="stats">
          <div className="stats-grid">
            {stats.map((s) =>
              <div key={s.big} className="stat">
                <b>{s.big}</b>
                <span>{s.small}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}

// ── Testimonials ────────────────────────────────────────────────────────
function Testimonials() {
  const items = [
    { q: "Bạn tư vấn rất dễ hiểu, giúp tôi chọn gói bảo hiểm xe phù hợp mà không bị rối bởi quá nhiều điều khoản.", who: "Anh Tuấn", role: "Khách hàng cá nhân — Hà Nội", initial: "T" },
    { q: "Khi cần hỏi về hồ sơ bồi thường, tôi được hỗ trợ nhanh và rõ ràng. Cảm giác có người đồng hành thật sự khác biệt.", who: "Chị Hương", role: "Chủ hộ kinh doanh — Hải Phòng", initial: "H" },
    { q: "Tôi thích cách tư vấn minh bạch, không ép mua, phân tích đúng nhu cầu — chứ không phải gói đắt nhất.", who: "Anh Quang", role: "Khách hàng doanh nghiệp — Bắc Ninh", initial: "Q" }];

  return (
    <section className="section" id="reviews" data-screen-label="07 Testimonials">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span className="section-eyebrow">Khách hàng nói gì</span>
          <h2 className="section-title">Niềm tin được xây dựng<br />qua từng trải nghiệm</h2>
        </div>
        <div className="grid-3 reveal">
          {items.map((it, i) =>
            <div key={i} className="card quote">
              <div className="stars">
                {[0, 1, 2, 3, 4].map((s) => <Ico.star key={s} />)}
              </div>
              <p>{it.q}</p>
              <div className="who">
                <span className="avatar">{it.initial}</span>
                <div>
                  <b>{it.who}</b>
                  <span>{it.role}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── FAQ ─────────────────────────────────────────────────────────────────
function FAQ() {
  const items = [
    {
      q: "Bảo hiểm phi nhân thọ là gì?",
      a: "Bảo hiểm Phi Nhân Thọ giúp mình giảm bớt gánh nặng chi phí trước những rủi ro bất ngờ trong cuộc sống. Từ ô tô, xe máy, sức khỏe, tai nạn, nhà xưởng, tài sản đến du lịch… Em Trang PTI đều có thể hỗ trợ tư vấn, báo phí và cấp đơn nhanh ạ"
    },
    {
      q: "Tôi nên mua loại bảo hiểm nào trước?",
      a: "Tùy vào nhu cầu cụ thể của bạn. Nếu bạn có xe, nên ưu tiên bảo hiểm xe (bao gồm cả trách nhiệm dân sự bắt buộc). Nếu có gia đình, nên cân nhắc bảo hiểm sức khỏe. Nếu kinh doanh, nên xem xét bảo hiểm tài sản và trách nhiệm cho hoạt động kinh doanh."
    },
    {
      q: "Khi xảy ra rủi ro, tôi cần làm gì?",
      a: "Liên hệ ngay tư vấn viên hoặc tổng đài hỗ trợ của PTI, giữ lại tất cả chứng từ liên quan (ảnh hiện trường, hóa đơn, giấy tờ y tế, biên bản…) và chuẩn bị hồ sơ theo hướng dẫn. Tôi sẽ đồng hành cùng bạn trong toàn bộ quy trình."
    },
    {
      q: "Tư vấn có mất phí không?",
      a: "Tư vấn ban đầu hoàn toàn miễn phí. Bạn có thể trao đổi nhu cầu, nhận đề xuất gói bảo hiểm phù hợp và hiểu rõ phí trước khi ra quyết định."
    },
    {
      q: "Tôi có thể thay đổi gói bảo hiểm sau khi đã ký không?",
      a: "Có những thay đổi được cho phép tùy theo điều khoản hợp đồng (ví dụ: bổ sung quyền lợi, thay đổi đối tượng bảo hiểm…). Hãy liên hệ trước khi gia hạn hoặc khi nhu cầu của bạn thay đổi để được tư vấn cụ thể."
    }];

  const [open, setOpen] = React.useState(0);
  return (
    <section className="section" id="faq" data-screen-label="08 FAQ">
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 40px" }}>
          <span className="section-eyebrow">Câu hỏi thường gặp</span>
          <h2 className="section-title">Những điều bạn có thể đang băn khoăn</h2>
        </div>
        <div className="faq-list reveal">
          {items.map((it, i) =>
            <div key={i} className="faq-item" data-open={open === i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-icon"><Ico.plus style={{ width: 14, height: 14 }} /></span>
              </button>
              <div className="faq-a"><div><p>{it.a}</p></div></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

// ── Contact ─────────────────────────────────────────────────────────────
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzjmhVSccFIMjcHojLiliatLanqu6OdmUsB5nrtsTlfjIES4_AA-XZ_XtBvMdWbXYCE/exec";

function Contact({ advisor }) {
  const [submitted, setSubmitted] = React.useState(false);
  const [lastSubmit, setLastSubmit] = React.useState(0);
  const [honey, setHoney] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "", phone: "",
    need: "Bảo hiểm xe ô tô / xe máy", msg: ""
  });
  const COOLDOWN = 60;

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();

    if (honey) return;

    const now = Date.now();
    const secondsLeft = Math.ceil((COOLDOWN * 1000 - (now - lastSubmit)) / 1000);
    if (lastSubmit && secondsLeft > 0) {
      alert(`Vui lòng chờ ${secondsLeft} giây trước khi gửi lại.`);
      return;
    }

    setLastSubmit(now);
    setLoading(true);

    try {
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (_) { }

    setLoading(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section" id="contact" data-screen-label="09 Contact"
      style={{ background: "linear-gradient(180deg, transparent, color-mix(in oklab, var(--brand-soft) 60%, var(--bg)))" }}>
      <div className="wrap">
        <div className="reveal" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 48px" }}>
          <span className="section-eyebrow">Liên hệ tư vấn</span>
          <h2 className="section-title">Gửi yêu cầu, tôi sẽ phản hồi trong thời gian sớm nhất</h2>
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Để lại thông tin bên dưới, hoặc liên hệ nhanh qua điện thoại / Zalo. Tư vấn ban đầu miễn phí.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-card reveal" onSubmit={submit}>
            <input type="text" value={honey} onChange={(e) => setHoney(e.target.value)}
              style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
            <div className="field">
              <label>Họ và tên</label>
              <input type="text" required placeholder="Nguyễn Văn A"
                value={form.name} onChange={onChange("name")} />
            </div>
            <div className="field">
              <label>Số điện thoại</label>
              <input type="tel" required placeholder="09xx xxx xxx"
                value={form.phone} onChange={onChange("phone")} />
            </div>
            <div className="field">
              <label>Nhu cầu bảo hiểm</label>
              <select value={form.need} onChange={onChange("need")}>
                {["Bảo hiểm xe ô tô / xe máy", "Bảo hiểm sức khỏe cá nhân",
                  "Bảo hiểm tài sản", "Bảo hiểm du lịch",
                  "Bảo hiểm doanh nghiệp", "Tư vấn hồ sơ bồi thường",
                  "Tôi chưa rõ — cần tư vấn"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div className="field">
              <label>Tin nhắn (không bắt buộc)</label>
              <textarea placeholder="Mô tả ngắn ví dụ ra, hiệu xe, năm sản xuất..."
                value={form.msg} onChange={onChange("msg")} />
            </div>

            {submitted ? (
              <div className="form-success">
                <Ico.check style={{ width: 18, height: 18 }} />
                Đã ghi nhận yêu cầu — tôi sẽ liên hệ lại sớm. Cảm ơn bạn!
              </div>
            ) : (
              <button type="submit" className="btn btn-primary"
                style={{ width: "100%" }} disabled={loading}>
                {loading ? (
                  <>
                    <span style={{
                      width: 16, height: 16, border: "2px solid currentColor",
                      borderTopColor: "transparent", borderRadius: "50%",
                      display: "inline-block", animation: "spin .7s linear infinite"
                    }} />
                    Đang gửi...
                  </>
                ) : (
                  <><span>Gửi yêu cầu tư vấn</span><Ico.arrow style={{ width: 16, height: 16 }} /></>
                )}
              </button>
            )}

            <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 14, marginBottom: 0, lineHeight: 1.55 }}>
              Bằng việc gửi yêu cầu, bạn đồng ý để tôi liên hệ tư vấn các sản phẩm bảo hiểm phù hợp.
            </p>
          </form>

          {/* Phần info-block và quick-contact giữ nguyên không đổi */}
          <div className="reveal">
            <div className="info-block">
              <div className="info-row">
                <span className="ico"><Ico.users style={{ width: 18, height: 18 }} /></span>
                <div><b>Tư vấn viên</b><span>{advisor.name}</span></div>
              </div>
              <div className="info-row">
                <span className="ico"><Ico.briefcase style={{ width: 18, height: 18 }} /></span>
                <div><b>Đơn vị</b><span>CÔNG TY BẢO HIỂM BƯU ĐIỆN THỐNG NHẤT<br />Tầng 2, 205 Nguyễn Xí, Phường Bình Thạnh, TP.HCM</span></div>
              </div>
              <div className="info-row">
                <span className="ico"><Ico.phone style={{ width: 18, height: 18 }} /></span>
                <div><b>Điện thoại</b><span>{advisor.phone}</span></div>
              </div>
              <div className="info-row">
                <span className="ico"><Ico.mail style={{ width: 18, height: 18 }} /></span>
                <div><b>Email</b><span>{advisor.email}</span></div>
              </div>
              <div className="info-row">
                <span className="ico"><Ico.pin style={{ width: 18, height: 18 }} /></span>
                <div><b>Khu vực hỗ trợ</b><span>{advisor.region}</span></div>
              </div>
              <div className="info-row">
                <span className="ico"><Ico.clock style={{ width: 18, height: 18 }} /></span>
                <div><b>Thời gian phản hồi</b><span>24/7</span></div>
              </div>
            </div>

            <div className="quick-contact">
              <button className="quick-btn" type="button">
                <span className="ico" style={{ background: "var(--accent)", color: "#1B1100" }}><Ico.phone style={{ width: 16, height: 16 }} /></span>
                Gọi điện
              </button>
              <button className="quick-btn" type="button">
                <span className="ico" style={{ background: "#0068FF" }}><Ico.zalo style={{ width: 18, height: 18 }} /></span>
                Nhắn Zalo
              </button>
              <button className="quick-btn" type="button">
                <span className="ico" style={{ background: "#1877F2" }}><Ico.fb style={{ width: 16, height: 16 }} /></span>
                Facebook
              </button>
              <button className="quick-btn" type="button">
                <span className="ico" style={{ background: "var(--brand-2)" }}><Ico.mail style={{ width: 16, height: 16 }} /></span>
                Gửi email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────
function PtiBrandMark({ pretty, tag, accent = "#F5A623" }) {
  return (
    <div className="pti-mark">
      <div className="pti-mark-row">
        <span className="pti-mark-pti">
          <span className="pti-mark-curve" style={{ background: accent }} />
          pti
        </span>
        <span className="pti-mark-italic" style={{ color: accent }}>{pretty}</span>
      </div>
      <div className="pti-mark-tag">{tag}</div>
    </div>
  );
}

function Footer({ advisor }) {
  const subBrands = [
    { pretty: "SOS", tag: "Cứu hộ & Bảo hiểm", accent: "#F5A623" },
    { pretty: "Care", tag: "Sức khỏe & Bảo hiểm", accent: "#3D74E0" },
    { pretty: "Commercial", tag: "Chuyên gia tư vấn & Bảo hiểm", accent: "#F5A623" },
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        {/* Business-card block */}
        <div className="footer-card">
          <div className="footer-card-head">
            <div className="footer-card-logo">
              <div className="pti-logo-lg">
                <span className="pti-logo-curve" />
                pti
              </div>
              <div className="pti-logo-side">
                <div>People</div>
                <div>Trust</div>
                <div>Insurance</div>
              </div>
            </div>
            <div className="footer-card-pub">BẢO HIỂM BƯU ĐIỆN</div>
          </div>

          <div className="footer-card-divider" />

          <div className="footer-card-body">
            <div>
              <div className="fc-name">{advisor.name}</div>
              <div className="fc-title">{advisor.title}</div>
              <div className="fc-branch">{advisor.branch}</div>
            </div>
            <ul className="fc-contact">
              <li>
                <span className="fc-ico"><Ico.pin style={{ width: 14, height: 14 }} /></span>
                <span>{advisor.region}</span>
              </li>
              <li>
                <span className="fc-ico"><Ico.phone style={{ width: 14, height: 14 }} /></span>
                <a href={`tel:${advisor.phone.replace(/\s/g, "")}`}>{advisor.phone}</a>
              </li>
              <li>
                <span className="fc-ico"><Ico.mail style={{ width: 14, height: 14 }} /></span>
                <a href={`mailto:${advisor.email}`}>{advisor.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-brand row */}
        <div className="footer-subbrands">
          <div className="footer-subbrands-label">Các nhóm sản phẩm PTI</div>
          <div className="footer-subbrands-grid">
            {subBrands.map((b) => <PtiBrandMark key={b.pretty} {...b} />)}
          </div>
        </div>

        {/* Links grid */}
        <div className="footer-grid">
          <div>
            <h5>Liên hệ nhanh</h5>
            <ul>
              <li><a href={`tel:${advisor.phone.replace(/\s/g, "")}`}>{advisor.phone}</a></li>
              <li><a href={`mailto:${advisor.email}`}>{advisor.email}</a></li>
              <li><a href="#contact">Zalo · Facebook</a></li>
            </ul>
          </div>
          <div>
            <h5>Dịch vụ chính</h5>
            <ul>
              <li><a href="#services">Bảo hiểm xe cơ giới</a></li>
              <li><a href="#services">Bảo hiểm sức khỏe</a></li>
              <li><a href="#services">Bảo hiểm tài sản</a></li>
              <li><a href="#services">Bảo hiểm du lịch</a></li>
              <li><a href="#services">Bảo hiểm doanh nghiệp</a></li>
            </ul>
          </div>
          <div>
            <h5>Trang</h5>
            <ul>
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#process">Quy trình</a></li>
              <li><a href="#reviews">Đánh giá</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#contact">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h5>Website chính thức</h5>
            <ul>
              <li><a href="https://www.pti.com.vn" target="_blank" rel="noopener">www.pti.com.vn</a></li>
            </ul>
            <p className="footer-mini">
              Tổng Công ty CP<br />Bảo hiểm Bưu điện (PTI)
            </p>
          </div>
        </div>
      </div>

      <div className="wrap footer-disclaimer">
        <p>
          <b style={{ color: "rgba(255,255,255,.85)" }}>Ghi chú:</b> Thông tin trên website chỉ mang tính tham khảo.
          Quyền lợi bảo hiểm cụ thể phụ thuộc vào điều khoản, điều kiện và hợp đồng bảo hiểm được phát hành bởi PTI.
        </p>
        <p>© {new Date().getFullYear()} {advisor.name} · Tư vấn bảo hiểm tại PTI.</p>
      </div>
    </footer>);

}

// ── Floating CTA ────────────────────────────────────────────────────────
function FloatingCta({ onCta }) {
  return (
    <div className="floating-cta">
      <button className="fab zalo" aria-label="Zalo" title="Liên hệ Zalo">
        <Ico.zalo style={{ width: 22, height: 22 }} />
      </button>
      <button className="fab phone" aria-label="Gọi điện" title="Gọi tư vấn" onClick={onCta}>
        <Ico.phone style={{ width: 22, height: 22 }} />
      </button>
    </div>);

}

// ── App ─────────────────────────────────────────────────────────────────
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const PALETTE_SWATCHES = {
  "midnight-azure": ["#0E2A57", "#1E4FB8", "#F5A623"],
  "trust-teal": ["#0F3B36", "#2D9D8E", "#E07A3C"],
  "ivory-navy": ["#152545", "#2C447C", "#C46A2E"]
};
const getPaletteSwatches = (k) => PALETTE_SWATCHES[k] || PALETTE_SWATCHES["midnight-azure"];
const swatchesToPalette = (arr) => {
  const key = (a) => a.join("|").toLowerCase();
  const found = Object.entries(PALETTE_SWATCHES).find(([, v]) => key(v) === key(arr));
  return found ? found[0] : "midnight-azure";
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  useReveal();
  React.useEffect(() => {
    document.documentElement.setAttribute("data-palette", t.palette);
    document.documentElement.setAttribute("data-density", t.density);
    document.documentElement.style.setProperty("--ff", `"${t.serif}"`);
  }, [t.palette, t.density, t.serif]);

  const scrollToContact = () => scrollToId("contact");

  const advisor = {
    name: t.advisorName,
    title: t.advisorTitle,
    branch: t.advisorBranch,
    region: t.advisorRegion,
    phone: t.advisorPhone,
    email: t.advisorEmail
  };

  return (
    <>
      <Header onCta={scrollToContact} />
      <main>
        <Hero onCta={scrollToContact} advisorName={t.advisorName} />
        <About advisorName={t.advisorName} />
        <Services />
        <Why />
        <Process />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact advisor={advisor} />
      </main>
      <Footer advisor={advisor} />
      <FloatingCta onCta={scrollToContact} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Giao diện" />
        <TweakColor label="Bảng màu" value={getPaletteSwatches(t.palette)}
          options={[
            ["#0E2A57", "#1E4FB8", "#F5A623"],
            ["#0F3B36", "#2D9D8E", "#E07A3C"],
            ["#152545", "#2C447C", "#C46A2E"]]
          }
          onChange={(arr) => setTweak("palette", swatchesToPalette(arr))} />
        <TweakRadio label="Chế độ" value={t.palette}
          options={[
            { value: "midnight-azure", label: "Azure" },
            { value: "trust-teal", label: "Teal" },
            { value: "ivory-navy", label: "Ivory" }]
          }
          onChange={(v) => setTweak("palette", v)} />
        <TweakSelect label="Font chữ" value={t.serif}
          options={["Plus Jakarta Sans", "Be Vietnam Pro", "Inter", "DM Sans", "Manrope"]}
          onChange={(v) => setTweak("serif", v)} />
        <TweakRadio label="Khoảng cách" value={t.density}
          options={[
            { value: "compact", label: "Compact" },
            { value: "cozy", label: "Cozy" },
            { value: "spacious", label: "Spacious" }]
          }
          onChange={(v) => setTweak("density", v)} />

        <TweakSection label="Thông tin tư vấn viên" />
        <TweakText label="Tên" value={t.advisorName} onChange={(v) => setTweak("advisorName", v)} />
        <TweakText label="Khu vực" value={t.advisorRegion} onChange={(v) => setTweak("advisorRegion", v)} />
        <TweakText label="Điện thoại" value={t.advisorPhone} onChange={(v) => setTweak("advisorPhone", v)} />
        <TweakText label="Email" value={t.advisorEmail} onChange={(v) => setTweak("advisorEmail", v)} />
      </TweaksPanel>
    </>);

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);