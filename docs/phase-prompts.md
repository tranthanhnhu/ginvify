# GINVIFY — PHASE PROMPTS FOR CURSOR

Copy-paste prompts to start each phase in a **new** Agent/Composer thread.
Always start a new thread per phase — don't keep piling phases into one
long chat, or context gets bloated and the agent starts forgetting earlier
rules.

Before pasting: make sure `ginvify-website-spec.md` is in the project root
and `.cursor/rules/*.mdc` are in place. Reference the spec with `@` so
Cursor pulls it into context explicitly rather than relying on rules alone.

---

## PHASE 1 — Foundation (start here)

```
@ginvify-website-spec.md

Ta đang ở PHASE 1 (xem Section 31 trong file spec). Phạm vi PHASE 1
là — và chỉ là:
- Design system (colors, type scale, spacing, tokens)
- Typography + animation primitives (reveal, stagger, blur-to-sharp)
- Navigation (desktop + mobile)
- Hero
- Three.js Intelligence Core, bao gồm G-signature morph (Section 5A)
- Scroll engine (GSAP + ScrollTrigger + Lenis), chứng minh hoạt động
  ít nhất ở transition Hero → Idea

KHÔNG build Services/AI/Automation/Engineering/Technology/Mascot/Contact
— để dành các phase sau.

Bước 1: chuyển sang Plan Mode. Liệt kê cấu trúc thư mục và các
component sẽ tạo (theo Section 27), thứ tự build, và cách
GLogoParticles.tsx sẽ hoạt động (G → particles → node network).
Đợi tôi duyệt plan trước khi code.
```

**Gate trước khi qua Phase 2**: Hero, Core, G-signature loop, và scroll
cơ bản phải đã "đẹp" thật sự — không chỉ chạy được. Nếu chưa, quay lại
sửa ở đây, đừng thêm section mới để "bù".

---

## PHASE 2 — Homepage story

```
@ginvify-website-spec.md

Phase 1 đã được duyệt (Hero + Intelligence Core + G-signature +
scroll engine hoạt động tốt). Giờ chuyển sang PHASE 2 (Section 31):

- Services section (6 category, Section 9)
- AI section (Section 10)
- Automation section (Section 11)
- Engineering section (Section 12)
- Technology constellation (Section 13)
- Experiments section (Section 14)
- About section (Section 15)
- Mascot component GinvifyCat.tsx tối thiểu (404/empty) — bản đầy đủ
  companion nổi là PHASE 5

QUAN TRỌNG: dùng lại đúng IntelligenceCore/NodeNetwork đã có ở Phase 1,
không tạo scene 3D mới riêng cho mỗi section — mỗi section chỉ đổi
state/target shape của core đã có (xem .cursor/rules/three-js-scene.mdc).

Plan Mode trước, liệt kê state nào của Core sẽ dùng cho section nào,
rồi mới code.
```

---

## PHASE 3 — Full site, i18n, contact, SEO

```
@ginvify-website-spec.md

Phase 2 đã duyệt. Chuyển sang PHASE 3:

- Contact section + form (Section 16) — đây là nơi network hội tụ
  ngược lại thành G trước khi hiện "LET'S BUILD WHAT'S NEXT."
- Toàn bộ route còn lại (Section 20)
- Service detail pages (Section 21) cho 6 service
- Japanese localization (Section 26) — tách content ra /locales,
  không hardcode text trong component
- SEO (Section 25): metadata, OG, sitemap, robots.txt, hreflang

Plan Mode trước: liệt kê toàn bộ route sẽ tạo và cấu trúc locale file,
rồi mới code từng nhóm (routes → i18n → SEO), không làm cả 3 cùng lúc.
```

---

## PHASE 4 — Experience polish (G scroll + UI readability)

```
@ginvify-website-spec.md
@.cursor/rules/three-js-scene.mdc

Phase 3 đã duyệt. Chuyển sang PHASE 4 — Experience polish.
KHÔNG thêm section/route mới. KHÔNG build floating mascot (Phase 5).

Mục tiêu:

1) G-signature scroll-driven (quan trọng nhất)
- Chữ G KHÔNG chỉ hiện 1–2 giây lúc load rồi mất.
- Morph gắn với scroll progress: ở đầu trang / scroll lên về Hero
  thì G hiện rõ và mượt; scroll xuống thì G dissolve dần sang
  cluster → network → workflow…; scroll lên thì morph ngược lại
  về G một cách continuous (scrub), không nhảy cut.
- Contact vẫn converge về G ở cuối journey.
- Sửa GLogoParticles / IntelligenceCore / ScrollStory cho
  intro-auto ngắn (hoặc bỏ) và để scroll là nguồn sự thật chính.

2) UI readability
- Các block text trên nền tối/WebGL khó đọc: thêm border, scrim,
  nền bán trong suốt, hoặc tăng contrast — giữ aesthetic tối premium.
- Footer: redesign cho gọn, rõ hierarchy, typography hợp hơn.
- Font: đánh giá Space Grotesk; điều chỉnh type scale / tracking /
  hoặc bổ sung font phù hợp editorial hơn nếu cần (không Inter mặc định).
- Primary button lime: chữ PHẢI contrast đủ (dùng text gần đen
  `#050607` / `bg-0`, KHÔNG chữ trắng trên lime neon). Tone xuống
  neon nếu cần — premium, không cyberpunk.

Plan Mode trước: liệt kê file sẽ đụng (three + sections + footer +
button/tokens), thứ tự sửa (Core scroll trước → UI → footer/button),
đợi duyệt rồi code. Commit riêng sau mỗi nhóm.
```

**Gate trước Phase 5**: scroll lên/xuống Hero đều thấy G morph mượt;
text/CTA đọc được; footer chấp nhận được.

---

## PHASE 5 — Persistent companion mascot

```
@ginvify-website-spec.md
@.cursor/rules/mascot.mdc

Phase 4 đã duyệt. Chuyển sang PHASE 5 — Persistent companion mascot
(Section 5B cập nhật). KHÔNG hardening Lighthouse (để Phase 6).

Xây linh vật mèo cute, đẹp, luôn hiện trên màn hình mọi trang:

- Component chính: GinvifyCat + CompanionShell (fixed, không chặn click
  nội dung quan trọng — pointer-events hợp lý).
- Hiệu ứng: idle, blink, walk/pace, jump/hop nhẹ theo scroll hoặc
  idle loop; react nhẹ khi đổi route / scroll direction.
- Visual: vẫn cùng vocabulary với Core (line/node accents lime/cyan)
  nhưng được phép dễ thương hơn bản 404 tối giản — không plush 3D nặng,
  không neon cartoon.
- Luôn visible (góc màn hình, có thể kéo nhẹ / ẩn tạm trên mobile
  nếu che CTA) — KHÔNG thay logo nav, KHÔNG cạnh tranh Hero headline.
- prefers-reduced-motion → pose tĩnh.
- Giữ 404/empty variants; companion global mount ở locale layout.

Plan Mode trước: wireframe vị trí, state machine animation, file structure
dưới components/mascot/, đợi duyệt rồi code.
```

**Gate trước Phase 6**: mascot chạy mượt mọi route EN/JP; không che CTA;
reduced-motion OK.

---

## PHASE 6 — Hardening (ex-Phase 4)

```
@ginvify-website-spec.md

Phase 5 đã duyệt. Chuyển sang PHASE 6 — hardening, KHÔNG thêm
tính năng/section/mascot mới:

- Responsive/mobile optimization (Section 22) — mobile phải có bố cục
  riêng, không chỉ scale desktop xuống
- Performance (Section 23): lazy-load, texture nén, giảm draw call,
  IntersectionObserver, code splitting
- Accessibility pass (Section 24): semantic HTML, keyboard nav, focus
  state, contrast, alt text cho cả mascot companion
- Final animation polish trên toàn site

Chạy audit trước (Lighthouse/tương tự) rồi báo cáo điểm hiện tại,
sau đó mới sửa từng nhóm vấn đề một, commit sau mỗi nhóm.
```

---

## Mẹo dùng chung

- Sau mỗi bước nhỏ trong 1 phase (vd: xong Hero, xong Core, xong scroll
  engine), **commit git riêng** — đây là điểm rollback nếu agent làm hỏng
  animation phức tạp.
- Nếu response của agent tạo component 3D mới ngoài
  `components/three/IntelligenceCore.tsx` và nhánh của nó — dừng lại,
  nhắc lại rule trong `.cursor/rules/project-context.mdc`.
- Floating mascot chỉ thuộc Phase 5 (+ giữ 404/empty). Đừng nhét companion
  global vào Phase 4.
- Dùng Ask Mode khi chỉ muốn hỏi/kiểm tra code cũ, dùng Agent Mode khi
  thực sự muốn sửa nhiều file.
