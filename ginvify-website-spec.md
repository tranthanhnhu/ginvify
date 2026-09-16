# GINVIFY — PREMIUM TECHNOLOGY WEBSITE

## Master Design & Development Specification (v2 — Phased Build + Mascot + Signature Effect)

Build a premium, highly interactive technology company website for **GINVIFY**.

The website must feel like a combination of:

* premium creative technology studio
* AI engineering company
* software product engineering company
* futuristic digital systems company
* enterprise technology brand

Do NOT make it look like a generic SaaS template.

Do NOT simply copy any reference website.

Instead, study the visual and structural principles of:

* United Carriers — immersive WebGL, 3D storytelling, cinematic scroll experience
* Seinetime.ai — AI / agentic storytelling and intelligent systems narrative
* TensorLab — engineering, architecture, product development and technology positioning
* Trellix — enterprise-grade information architecture, platform thinking and technology credibility
* DUOTECH — service structure, product engineering services, projects and contact information

Use these websites as design references only. Create an original Ginvify visual identity.

---

## HOW TO USE THIS SPEC (IMPORTANT — READ FIRST)

This document is meant to be fed to an AI coding agent (Claude Code, Codex, Cursor, etc.).

**Do not ask the agent to build all pages and features in one pass.** Build in six phases, in order, and do not move to the next phase until the current one is genuinely good — not just "working."

```
PHASE 1          PHASE 2            PHASE 3           PHASE 4              PHASE 5              PHASE 6
Design System    Homepage sections  All subpages      Experience polish    Persistent mascot   Hardening
+ Hero           + Services         + EN/JP i18n      + Scroll-scrubbed G  + Always-on cat      + Mobile
+ Three.js Core  + AI / Automation  + Contact         + UI readability     + Walk/jump/scroll   + Perf
+ Scroll Engine  + Technology       + SEO             + Footer / fonts     + Cute companion     + A11y
+ Signature G    + Experiments/About                  + Button contrast                         + Polish
```

**Phase 1 is the most important phase for structure.** Phase 4 is the quality gate for the G-signature *feeling* (scroll-driven, not a 1–2s intro flash). Phase 5 adds the persistent companion mascot. Phase 6 hardens performance and accessibility. Do not skip ahead.

See **Section 31 — Development Priority & Phased Build Plan** for the detailed breakdown of what belongs in each phase.

---

# 1. BRAND

Company:

GINVIFY

Positioning:

Technology company specializing in:

* Web Applications
* AI Engineering
* AI Agents
* Automation
* SaaS Platforms
* Landing Pages
* Digital Products
* Software Engineering

Core brand idea:

"Engineering Intelligence."

Alternative positioning:

"From Ideas to Intelligent Systems."

The website should communicate:

* engineering quality
* intelligence
* innovation
* technical depth
* reliability
* modern design
* premium execution
* global capability

Avoid exaggerated claims.

Do not invent clients, awards, revenue, employee counts, number of projects, or fake testimonials.

If portfolio items are needed, clearly label conceptual or experimental projects as such.

---

# 2. COMPANY INFORMATION

Company name:

GINVIFY

Address:

501/2 Lũy Bán Bích,
Phú Thạnh,
Ho Chi Minh City,
Vietnam

Phone:

+84 867 249 092

Vietnam Tax ID:

0319695451

Languages:

English
Japanese

Primary website language:

English

Secondary:

Japanese

Use language switch:

EN | 日本語

---

# 3. VISUAL DIRECTION

Create a dark premium technology aesthetic.

Primary background:

near-black / deep charcoal.

Suggested palette:

#050607
#0A0D10
#11161A

Accent colors:

electric lime
soft cyan

Suggested:

#B7FF3C
#5CE1E6

Do not overuse gradients.

The design should rely on:

* typography
* negative space
* motion
* depth
* WebGL
* subtle glow
* technical diagrams
* animated geometry
* sophisticated transitions

The visual language should feel closer to:

"creative engineering laboratory"

than:

"normal software outsourcing company."

---

# 4. TYPOGRAPHY

Use a modern grotesk typeface.

Preferred:

Inter
Geist
Space Grotesk
Satoshi

Use very large editorial headings.

Examples:

BUILD
WHAT'S
NEXT.

or:

WE BUILD
INTELLIGENT
SYSTEMS.

Large typography should be part of the animation system.

Use:

* word reveal
* line reveal
* clip-path reveal
* blur-to-sharp
* stagger
* vertical displacement
* opacity
* subtle scale

Avoid excessive text animation.

---

# 5. HERO

Create a full-screen cinematic hero.

Headline:

"Engineering Intelligence."

Supporting text:

"We design and build web applications, AI systems, automation and SaaS products."

CTA:

"START A PROJECT"

Secondary CTA:

"EXPLORE SERVICES"

Hero background must contain a sophisticated Three.js / WebGL scene.

Do not use a generic rotating sphere.

Create an original "Digital Intelligence Core" — and this scene IS the signature "G" effect described in Section 5A. Do not treat the hero object and the brand signature as two separate things; they are the same object.

Concept:

A living digital system composed of:

* nodes
* particles
* connections
* geometric structures
* subtle volumetric light
* data streams

The object represents the transformation:

IDEA
→ DATA
→ INTELLIGENCE
→ SOFTWARE
→ AUTOMATION
→ BUSINESS

The camera should slowly move around the system.

Mouse movement should create subtle parallax.

Scroll should influence camera position.

Hero must remain elegant and minimal.

---

# 5A. SIGNATURE EFFECT — "THE G → INTELLIGENCE CORE"

This is the single most important visual idea in the entire website. It is what should make someone say **"that's Ginvify"** instead of **"oh, this has Three.js."** Every other section should feel like an evolution of this one object, not a separate scene.

### Concept

The Ginvify logo mark — the letter **G** — is not a static logo. It is the seed of the entire 3D world.

```
        G
     G G G
    G
    G  GGG
     G   G
      GGG
```

The **G** dissolves into hundreds of geometric particles, which then organize themselves into the "Digital Intelligence Core" used throughout the hero and scroll story, and — at the very end of the homepage — the system converges back into the G.

### The loop

```
G  (logo, solid)
  ↓  dissolve
particles
  ↓  organize
nodes
  ↓  connect
network
  ↓  evolve
AI system
  ↓  evolve
software architecture
  ↓  evolve
automation workflow
  ↓  converge
network contracts back into the G
  ↓
        DIGITAL SYSTEM
             ↓
          GINVIFY
```

### Where it appears

* **Hero (entry):** the G is the default resting shape at the top of the page. As the visitor scrolls down, it dissolves into the particle field / Intelligence Core. Scrolling back up returns smoothly to the G (scroll-scrubbed morph — not a one-shot 1–2 second intro that disappears forever).
* **Scroll story (Sections 8–13):** the same particle system reshapes itself as the user scrolls — it never fully disappears and never gets replaced by an unrelated 3D object. Nodes that were part of the G are the same nodes that become the AI network, the automation workflow, and the architecture diagram. Morph direction follows scroll (down = evolve away from G; up = return toward G when near the hero).
* **Contact / final section:** the network converges back into the G as the final beat, immediately before the "LET'S BUILD WHAT'S NEXT." headline. This is the visual "exhale" that closes the story.
* **Loading state:** a lightweight, low-cost version of the G-forming-from-particles animation can be used as the site's loading/transition motif (see Section 19, Page Transitions) instead of a generic spinner.
* **Favicon / logo mark:** the static G is the logotype used in navigation and favicon; the particle version is reserved for the 3D experience only, never for small UI elements.

### Technical notes

* Build this as ONE reusable core system (see `/components/three/IntelligenceCore.tsx` in Section 6 and 27), not one 3D object per section. Sections change the *state* of the core (its shape, node count, connection pattern, color emphasis), not the underlying object.
* The G shape can be generated from an SVG path of the logo, sampled into a point cloud, and used as one of several "target shapes" the particle system can morph toward (G → sphere/node-cluster → network graph → workflow diagram → G).
* **Scroll is the source of truth for morph.** Do not rely on a short autoplay intro that shows G for 1–2 seconds and then abandons it. Prefer ScrollTrigger scrub (or equivalent) so scrolling down evolves the shape and scrolling up restores the G when returning to the hero. A brief optional intro is fine only if it hands off cleanly to scroll control.
* Keep the core G ⇄ network loop excellent before layering later section states. Phase 4 (Experience polish) is explicitly for fixing scroll-scrubbed G behavior if Phase 1 left an intro-only flash.
* On mobile / reduced-motion, keep the *concept* (G appears, subtly resolves into a simplified static or lightly-animated network) but drop the expensive parts — see Section 22 and 23.

---

# 5B. MASCOT — GINVIFY CAT

Ginvify has a cute geometric cat companion. It adds warmth without turning the site into a cartoon brand. The premium/editorial/engineering feel from Section 28 always comes first; the cat supports that feel, it does not replace it.

### Visual style

* Geometric / line-art first, allowed to be **clearly cute** (expressive ears, soft hop, tail motion) while staying in the site's near-black + lime/cyan vocabulary.
* Constructed from the same visual language as the Intelligence Core: thin outlines, small circular "node" joints (ears, paws, tail tip), optional soft accent glow.
* Two forms:
  1. **Companion cat** (Phase 5) — polished SVG (or lightweight canvas/Lottie-equivalent) with idle / walk / jump / scroll-reactive states; always present as a fixed-layer companion.
  2. **Minimal line-art** — simpler variant for 404 / empty states if the full companion is reduced.
* Optional stretch: a rare particle-cat easter egg formed from the same particle system as the G — only after Section 5A is solid.
* Never a separate candy-colored cartoon palette; never a heavy 3D plush that fights the WebGL Core.

### Personality

Curious, quiet, precise — a small companion to the engineering story. No dialogue, no puns, no "mascot voice" in copy.

### Where it appears

* **Persistent companion (Phase 5):** fixed on-screen across all pages/locales (corner placement). May pace, hop, or react lightly to scroll/route changes. Must not cover primary CTAs; on small screens may minimize or dock.
* **404 / error page** and **empty states** (Experiments filter empty, contact success) — calm presence.
* **Footer:** optional tiny static mark near copyright / language (in addition to the floating companion, keep it subtle).

### Where it must NOT appear

* Not as the primary logo or nav wordmark (static G logotype remains the logo).
* Not inside `components/three/` or as a replacement for the G → Intelligence Core narrative.
* Not accompanied by cutesy marketing copy.

### Implementation

* Components under `/components/mascot/` — e.g. `GinvifyCat.tsx` + `CompanionShell.tsx` (global mount from locale layout in Phase 5).
* Animation state machine: idle, blink, walk, jump/hop, scroll-react; static fallback for `prefers-reduced-motion`.
* Meaningful accessible name / description required.
* **Phase 2** may ship a minimal 404/empty cat. **Phase 5** is the full always-on companion. Do not build the floating companion during Phase 4 Experience polish.

---

# 6. DIGITAL INTELLIGENCE CORE

Implement the main 3D scene using:

Three.js
React Three Fiber
Drei

The scene should support:

* animated nodes
* animated connections
* camera movement
* subtle particle motion
* controlled glow
* object morphing (including the G ⇄ network morph described in Section 5A)
* scroll-based transitions
* responsive scaling
* mobile fallback

Do not over-render.

Keep geometry and draw calls optimized.

The scene must be architected as reusable components.

Example:

/components/three/IntelligenceCore.tsx
/components/three/NodeNetwork.tsx
/components/three/DataStream.tsx
/components/three/CameraController.tsx
/components/three/GLogoParticles.tsx

---

# 7. SCROLL STORYTELLING

The entire homepage should behave like a continuous visual story.

Use:

GSAP
GSAP ScrollTrigger
Lenis or equivalent smooth scrolling

Do not make every section feel independent.

The experience should feel like one continuous journey — one object (the Intelligence Core / G, per Section 5A) evolving, not a series of unrelated 3D scenes.

Story:

01 IDEA
02 ARCHITECTURE
03 INTELLIGENCE
04 SOFTWARE
05 AUTOMATION
06 SCALE

As the user scrolls:

* camera moves
* 3D system transforms
* nodes connect
* text changes
* background changes
* objects move
* sections transition smoothly

Use pinned sections where appropriate.

Avoid excessive ScrollTrigger instances.

Centralize scroll state where possible.

---

# 8. SECTION: THE IDEA

Minimal section.

Large typography:

"Every product starts with an idea."

Then reveal:

IDEA

The word should become part of the 3D environment. This is the moment right after the G has dissolved into particles (Section 5A) — the particle field is what "IDEA" sits inside.

Transition:

IDEA
→ ARCHITECTURE

---

# 9. SECTION: SERVICES

Create six service categories.

01 — WEB APPLICATIONS

Modern web applications built for performance, scalability and real users.

Technologies may include:

React
Next.js
TypeScript
Node.js
APIs
Cloud

02 — AI ENGINEERING

Build intelligent applications using:

LLMs
RAG
AI Agents
Machine Learning
Computer Vision
AI APIs

03 — AUTOMATION

Transform repetitive workflows into intelligent systems.

Include:

workflow automation
API integration
AI automation
agentic workflows
business process automation

04 — SAAS PLATFORMS

Design and engineer scalable SaaS products.

Include:

multi-tenant systems
authentication
subscription systems
dashboards
analytics
cloud architecture

05 — LANDING PAGES

Premium interactive landing pages focused on:

brand
conversion
performance
motion
storytelling

06 — DIGITAL PRODUCTS

From idea to production.

Include:

discovery
UI/UX
prototype
MVP
engineering
deployment
optimization

Create service cards with sophisticated hover effects.

Cards should interact with the 3D scene.

---

# 10. AI SECTION

Headline:

"AI that doesn't just answer. It acts."

Create a visual flow:

OBSERVE
↓
REASON
↓
DECIDE
↓
ACT
↓
LEARN

Represent this as an animated network — a continuation of the same node system from Section 5A, not a new 3D object.

Do not use cliché robot imagery.

Use:

nodes
data
signals
graphs
connections
abstract intelligence

---

# 11. AUTOMATION SECTION

Headline:

"Turn repetitive work into intelligent systems."

Create an animated workflow:

CUSTOMER
↓
WEB APP
↓
API
↓
AI AGENT
↓
DATABASE
↓
CRM
↓
ACTION

Nodes should activate as the user scrolls.

Use subtle glowing data packets travelling through the network.

Allow hover interaction on desktop.

---

# 12. ENGINEERING SECTION

Position Ginvify as an engineering partner.

Headline:

"From idea to production."

Process:

DISCOVER
→ DESIGN
→ ENGINEER
→ INTEGRATE
→ DEPLOY
→ SCALE

Create a technical architecture visual.

Use:

* grid
* nodes
* system architecture
* code fragments
* connection lines
* animated data flows

Do not make it look like a fake dashboard.

---

# 13. TECHNOLOGY SECTION

Create an interactive technology constellation.

Groups:

AI
WEB
CLOUD
DATA
AUTOMATION

Example:

AI:

LLMs
RAG
Agents
Computer Vision
Machine Learning

WEB:

React
Next.js
TypeScript
Node.js

CLOUD:

AWS
Cloud infrastructure
Docker
CI/CD

DATA:

PostgreSQL
Vector databases
Data pipelines

AUTOMATION:

APIs
Workflows
AI Agents
Integrations

Do not display technology logos as a boring horizontal logo wall.

Make them part of an interactive system.

---

# 14. PRODUCTS / EXPERIMENTS

Since Ginvify does not yet have a large public portfolio, do not fabricate case studies.

Section title:

"Things We're Building."

Include conceptual / experimental work.

Examples:

AI AGENT SYSTEM
SaaS PLATFORM CONCEPT
AUTOMATION ENGINE
AI DOCUMENT SYSTEM
COMPUTER VISION LAB
DIGITAL PRODUCT CONCEPT

Clearly mark them:

CONCEPT
EXPERIMENT
PROTOTYPE

The visual treatment should still feel premium.

If a filtered/empty state is possible here (e.g. filtering by category with no results), this is an approved place to use the mascot's empty-state variant (Section 5B).

---

# 15. ABOUT

Keep the About section concise.

Text:

"GINVIFY is a technology company focused on software, artificial intelligence and intelligent automation."

Secondary statement:

"Engineering from Vietnam. Built for global teams."

Show location:

Ho Chi Minh City, Vietnam

Do not invent team statistics.

---

# 16. CONTACT

Create a dramatic final section.

This is where the signature effect closes its loop (Section 5A): the network converges back into the G immediately before this headline appears.

Huge typography:

"LET'S
BUILD
WHAT'S
NEXT."

CTA:

START A PROJECT →

Display:

GINVIFY

501/2 Lũy Bán Bích,
Phú Thạnh,
Ho Chi Minh City,
Vietnam

+84 867 249 092

Tax ID:
0319695451

Language:

EN | 日本語

Include a contact form:

Name
Email
Company
Project type
Message

On successful submission, the confirmation state may use the mascot (Section 5B) — a small, quiet touch, not a celebration animation.

---

# 17. NAVIGATION

Create a minimal floating navigation.

Logo:

GINVIFY (static G logotype — see Section 5A; the particle version is reserved for the 3D experience, never used as the small nav logo)

Navigation:

Services
AI
Technology
Experiments
About
Contact

Right side:

EN | 日本語

CTA:

START A PROJECT

Navigation should become compact after scrolling.

Use smooth transitions.

Mobile navigation must become a full-screen animated menu.

---

# 18. MICRO-INTERACTIONS

Implement premium interactions.

Buttons:

* magnetic movement
* hover expansion
* arrow movement
* subtle border glow
* background transition

Cards:

* subtle 3D tilt
* image movement
* border illumination
* content displacement

Cursor:

Custom cursor on desktop.

States:

default
hover
view
drag
link

Disable custom cursor on mobile.

Do not make the cursor distracting.

---

# 19. PAGE TRANSITIONS

Implement elegant page transitions.

Use GSAP and/or a lightweight routing transition system.

Avoid white flashes.

Use:

* dark overlay
* clip-path
* scale
* blur
* opacity

The transition should feel like entering another layer of the same digital system. A lightweight version of the G-particle motif (Section 5A) is the preferred loading/transition motif over a generic spinner, where performance allows.

---

# 20. ADDITIONAL PAGES

Create the following pages:

/

/services

/services/web-applications

/services/ai-engineering

/services/automation

/services/saas

/services/landing-pages

/services/digital-products

/technology

/experiments

/about

/contact

Each page must use the same visual language.

Do not make every page identical.

---

# 21. SERVICE DETAIL PAGE

Each service page should contain:

Hero

Problem

What we build

Capabilities

Technology

Process

Example use cases

FAQ

CTA

Use animated diagrams.

For example:

AI Engineering:

DATA
↓
RAG
↓
LLM
↓
AGENT
↓
ACTION

Automation:

TRIGGER
↓
WORKFLOW
↓
AI
↓
INTEGRATION
↓
RESULT

SaaS:

USER
↓
AUTH
↓
APPLICATION
↓
API
↓
DATABASE
↓
CLOUD

---

# 22. RESPONSIVE DESIGN

Desktop:

cinematic full WebGL experience.

Tablet:

reduce WebGL complexity.

Mobile:

do not simply shrink desktop.

Create dedicated mobile composition.

Reduce:

* particle count
* geometry complexity
* post-processing
* expensive shaders
* continuous animation

Use static or video fallback if required. The G ⇄ network signature loop (Section 5A) should still exist on mobile in a simplified form — it should never be silently dropped, only lightened.

Respect:

prefers-reduced-motion.

---

# 23. PERFORMANCE

Performance is a first-class requirement.

Target:

Desktop:
60 FPS where practical.

Mobile:
30–60 FPS depending on device.

Requirements:

* lazy-load GLB assets
* lazy-load videos
* use compressed textures
* use Draco/Meshopt where appropriate
* use KTX2 where appropriate
* limit polygon count
* limit draw calls
* reuse materials
* dispose unused resources
* pause off-screen animation
* use IntersectionObserver
* avoid unnecessary React re-renders
* keep WebGL state outside normal React render flow where appropriate
* optimize shaders
* avoid huge textures
* preload only critical assets
* code split heavy components

Do not sacrifice performance for decorative effects.

---

# 24. ACCESSIBILITY

Support:

* semantic HTML
* keyboard navigation
* visible focus states
* sufficient contrast
* reduced motion
* accessible buttons
* accessible forms
* meaningful alt text

WebGL must never contain the only important information.

All important content must remain available as HTML.

The mascot (Section 5B), wherever it appears, must have meaningful alt text / an accessible description — it should never be a decoration-only image with no semantic fallback.

---

# 25. SEO

Implement:

* metadata
* Open Graph
* Twitter cards
* structured headings
* sitemap
* robots.txt
* canonical URLs
* localized metadata

English:

/en

Japanese:

/jp

Use proper hreflang.

---

# 26. INTERNATIONALIZATION

Do not hard-code content directly inside components.

Use a translation structure.

Example:

/locales/en.json
/locales/ja.json

All:

* navigation
* headings
* service descriptions
* CTA
* forms
* footer
* metadata

must support English and Japanese.

Japanese typography must be tested separately.

---

# 27. CODE ARCHITECTURE

Recommended:

Next.js
React
TypeScript
Three.js
React Three Fiber
Drei
GSAP
ScrollTrigger
Lenis
Tailwind CSS

Suggested structure:

```
app/
components/
components/ui/
components/three/
components/three/IntelligenceCore.tsx
components/three/NodeNetwork.tsx
components/three/DataStream.tsx
components/three/CameraController.tsx
components/three/GLogoParticles.tsx
components/animation/
components/sections/
components/mascot/
components/mascot/GinvifyCat.tsx
lib/
locales/
public/
public/models/
public/textures/
public/videos/
```

Separate:

UI
animation logic
Three.js scene
mascot component (kept isolated — never imported into hero/scroll-story sections)
content
localization

Do not create one giant component.

---

# 28. DESIGN QUALITY

The website must NOT look like:

* generic AI startup
* generic SaaS template
* generic Tailwind landing page
* random 3D sphere website
* excessive neon cyberpunk
* crypto website
* gaming website
* a website with a cutesy mascot slapped everywhere (the mascot in Section 5B is a small, rare accent — not a brand character driving the design)

Instead it should feel:

premium
minimal
technical
editorial
cinematic
intelligent
precise
modern

Think:

"Apple-level restraint + creative WebGL studio + AI engineering laboratory — with one small, quiet cat hiding in the corners for people who look closely."

---

# 29. IMPORTANT DESIGN PRINCIPLE

Every animation must have a purpose.

Do not add animation simply because Three.js can do it.

Use animation to communicate:

* transformation
* intelligence
* connection
* flow
* architecture
* scale
* automation

The user should feel that they are moving through a digital system — specifically, through the evolving G / Intelligence Core described in Section 5A, which is the spine of that feeling from hero to contact.

---

# 30. FINAL EXPERIENCE

The final website should feel like:

The user enters Ginvify.

They see the G form, then dissolve into an abstract digital intelligence system.

As they scroll, the system evolves.

IDEA becomes ARCHITECTURE.

Architecture becomes SOFTWARE.

Software becomes INTELLIGENCE.

Intelligence becomes AUTOMATION.

Automation becomes BUSINESS VALUE.

At the end, the system converges back into the G.

"LET'S BUILD WHAT'S NEXT."

This should be the central narrative of the entire website.

Do not build a collection of disconnected sections.

Build one continuous visual story — one object, evolving, from G to G.

---

# 31. DEVELOPMENT PRIORITY & PHASED BUILD PLAN

**Do not ask the coding agent to build all 15+ pages in a single pass.** Split the work into six phases and review each one before continuing to the next. This section replaces a flat priority list with an explicit phase boundary the agent must respect.

## PHASE 1 — Foundation (build this first, and make it excellent before moving on)

1. Design system (colors, type scale, spacing, tokens)
2. Typography system + animation primitives (reveal, stagger, blur-to-sharp)
3. Navigation (desktop + mobile)
4. Hero
5. Three.js Intelligence Core, including the G ⇄ particle signature morph (Section 5A)
6. Scroll engine (GSAP + ScrollTrigger + Lenis) wired to the Core, proven on at least the Hero → Idea transition

**Gate before Phase 2:** the Hero, the Core, the G-signature loop, and basic scroll behavior must already feel premium. If they don't, stop and iterate here — do not add more sections to compensate.

## PHASE 2 — Homepage story

7. Services section
8. AI section
9. Automation section
10. Engineering section
11. Technology constellation
12. Experiments section
13. About section
14. Minimal mascot for 404/empty only (full always-on companion is Phase 5)

**Gate before Phase 3:** the full homepage scroll story should read as one continuous journey per Section 30 (Contact close-the-loop lands in Phase 3).

## PHASE 3 — Full site, i18n, contact, SEO

15. Contact section + form (network → G before "LET'S BUILD WHAT'S NEXT.")
16. All remaining routes from Section 20
17. Service detail pages (Section 21)
18. Japanese localization (Section 26)
19. SEO implementation (Section 25)

## PHASE 4 — Experience polish (G scroll + UI readability)

20. Scroll-scrubbed G signature: G persists at top / returns when scrolling up; dissolve evolves on scroll down — not a 1–2s intro flash
21. UI readability: borders/scrims/contrast on text blocks over WebGL
22. Footer redesign + typography adjustments
23. Primary button contrast (dark text on lime; reduce neon glare)

**Gate before Phase 5:** G morph feels continuous both ways; copy and CTAs are readable; footer is acceptable.

## PHASE 5 — Persistent companion mascot

24. Always-on Ginvify Cat companion (Section 5B): idle / walk / jump / scroll-reactive
25. Global mount on all pages; keep 404/empty variants; respect reduced-motion and CTA clearance

**Gate before Phase 6:** companion works on every route EN/JP without blocking primary actions.

## PHASE 6 — Hardening

26. Responsive / mobile optimization (Section 22)
27. Performance optimization (Section 23)
28. Accessibility pass (Section 24)
29. Final animation polish across all pages
30. Lighthouse (or equivalent) audit → fix by group, commit per group

**General rule:** first make the structure correct. Then make the signature feel right (Phase 4). Then add the companion (Phase 5). Then make it fast and accessible (Phase 6). Do not skip ahead while earlier-phase foundations are still weak.

---

# 32. QUALITY BAR

The final result should look like a serious international technology company website.

It must be visually impressive within the first 5 seconds.

The hero should immediately communicate:

AI
Software
Engineering
Automation

without relying on long text.

The website should feel substantially more sophisticated than a typical Vietnamese software outsourcing website.

Use United Carriers as inspiration for cinematic scroll storytelling and WebGL quality, but create an original Ginvify identity.

Do not copy its assets, exact layouts, text, branding, or proprietary visual elements.

Create an original experience inspired by the underlying design principles.
