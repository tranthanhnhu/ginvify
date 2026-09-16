import type { ServiceSlug } from "@/lib/i18n/config";

export type ServicePageContent = {
  title: string;
  tagline: string;
  problem: string;
  whatWeBuild: string;
  capabilities: string[];
  technology: string[];
  process: string[];
  useCases: string[];
  faq: { q: string; a: string }[];
  cta: string;
  diagram?: string[];
};

export const servicePagesEn: Record<ServiceSlug, ServicePageContent> = {
  "web-applications": {
    title: "Web Applications",
    tagline: "Modern web applications built for performance, scalability and real users.",
    problem:
      "Products stall when the foundation can't scale, stay secure, or stay fast under real traffic.",
    whatWeBuild:
      "End-to-end web applications — from interface to API to cloud — designed for production from day one.",
    capabilities: [
      "Product UI and design systems",
      "API and backend services",
      "Auth and multi-role access",
      "Performance and observability",
      "Cloud deployment and CI/CD",
    ],
    technology: ["React", "Next.js", "TypeScript", "Node.js", "APIs", "Cloud"],
    process: ["Discover", "Design", "Engineer", "Integrate", "Deploy", "Scale"],
    useCases: [
      "Customer portals",
      "Internal tools",
      "Marketplace platforms",
      "Content-driven product sites",
    ],
    faq: [
      {
        q: "Do you rebuild legacy apps?",
        a: "Yes — we modernize in phases so you keep shipping while the stack improves.",
      },
      {
        q: "Can you work with an existing design system?",
        a: "We can adopt yours or establish a lean system that matches Ginvify-level craft.",
      },
    ],
    cta: "Start a web project",
  },
  "ai-engineering": {
    title: "AI Engineering",
    tagline: "AI that doesn't just answer. It acts.",
    problem:
      "Most AI demos stop at chat. Production needs retrieval, tools, evaluation and safe action.",
    whatWeBuild:
      "Intelligent systems — RAG, agents, vision and APIs — wired into real product workflows.",
    capabilities: [
      "LLM application design",
      "RAG pipelines",
      "AI agents and tool use",
      "Computer vision",
      "Evaluation and guardrails",
    ],
    technology: [
      "LLMs",
      "RAG",
      "AI Agents",
      "Machine Learning",
      "Computer Vision",
      "AI APIs",
    ],
    process: ["Observe", "Reason", "Decide", "Act", "Learn"],
    useCases: [
      "Document intelligence",
      "Support copilots",
      "Ops agents",
      "Vision-assisted workflows",
    ],
    faq: [
      {
        q: "Do you train custom models?",
        a: "When needed — otherwise we prefer strong foundation models plus retrieval and fine-tuning where it pays off.",
      },
    ],
    cta: "Start an AI project",
    diagram: ["DATA", "RAG", "LLM", "AGENT", "ACTION"],
  },
  automation: {
    title: "Automation",
    tagline: "Turn repetitive work into intelligent systems.",
    problem:
      "Manual handoffs between apps drain teams and create fragile, unmeasurable processes.",
    whatWeBuild:
      "Workflow automation that connects apps, agents and data into reliable business action.",
    capabilities: [
      "Workflow orchestration",
      "API integration",
      "AI-assisted automation",
      "Agentic workflows",
      "Business process automation",
    ],
    technology: ["APIs", "Workflows", "AI Agents", "Integrations", "CRM", "Databases"],
    process: ["Trigger", "Workflow", "AI", "Integration", "Result"],
    useCases: [
      "Lead routing",
      "Document processing",
      "Ops ticketing",
      "Finance reconciliations",
    ],
    faq: [
      {
        q: "Can you connect to our existing tools?",
        a: "Yes — we design around your stack and only introduce new systems when they clearly earn their place.",
      },
    ],
    cta: "Automate a workflow",
    diagram: ["TRIGGER", "WORKFLOW", "AI", "INTEGRATION", "RESULT"],
  },
  saas: {
    title: "SaaS Platforms",
    tagline: "Design and engineer scalable SaaS products.",
    problem:
      "SaaS fails quietly when tenancy, billing, auth or data isolation are bolted on late.",
    whatWeBuild:
      "Multi-tenant platforms with the product, auth, billing and cloud architecture to grow.",
    capabilities: [
      "Multi-tenant systems",
      "Authentication",
      "Subscription systems",
      "Dashboards and analytics",
      "Cloud architecture",
    ],
    technology: ["Next.js", "Auth", "Postgres", "APIs", "Cloud", "Billing"],
    process: ["User", "Auth", "Application", "API", "Database", "Cloud"],
    useCases: [
      "B2B product platforms",
      "Analytics SaaS",
      "Vertical SaaS MVPs",
      "Internal platform products",
    ],
    faq: [
      {
        q: "Do you help with MVP to scale?",
        a: "We design for the path you're on — ship an MVP cleanly, then harden tenancy and ops as you grow.",
      },
    ],
    cta: "Build a SaaS product",
    diagram: ["USER", "AUTH", "APPLICATION", "API", "DATABASE", "CLOUD"],
  },
  "landing-pages": {
    title: "Landing Pages",
    tagline: "Premium interactive landing pages focused on brand, conversion and motion.",
    problem:
      "Generic pages don't carry a technical brand — or convert sophisticated buyers.",
    whatWeBuild:
      "Cinematic, high-performance landing experiences with intentional motion and clear CTAs.",
    capabilities: [
      "Brand storytelling",
      "Conversion-focused structure",
      "Performance budgets",
      "Motion systems",
      "Scroll narratives",
    ],
    technology: ["Next.js", "GSAP", "WebGL", "Tailwind", "Analytics"],
    process: ["Brief", "Narrative", "Design", "Motion", "Build", "Measure"],
    useCases: [
      "Product launches",
      "Company brand sites",
      "Campaign microsites",
      "Waitlist experiences",
    ],
    faq: [
      {
        q: "Can pages include WebGL?",
        a: "Yes — when it serves the story. We keep a lighter fallback for mobile and reduced motion.",
      },
    ],
    cta: "Start a landing page",
  },
  "digital-products": {
    title: "Digital Products",
    tagline: "From idea to production.",
    problem:
      "Ideas stall between discovery, design and engineering without a single accountable path.",
    whatWeBuild:
      "Full product cycles — discovery through MVP, engineering, deployment and optimization.",
    capabilities: [
      "Discovery",
      "UI/UX",
      "Prototype",
      "MVP",
      "Engineering",
      "Deployment",
      "Optimization",
    ],
    technology: ["Product strategy", "Design", "React", "APIs", "Cloud"],
    process: ["Discover", "Design", "Engineer", "Integrate", "Deploy", "Scale"],
    useCases: [
      "New product MVPs",
      "Feature platforms",
      "0→1 digital ventures",
      "Product redesigns",
    ],
    faq: [
      {
        q: "Do you only engineer, or also discover?",
        a: "Both — we can enter at discovery or plug into an existing product team as an engineering partner.",
      },
    ],
    cta: "Start a product engagement",
  },
};
