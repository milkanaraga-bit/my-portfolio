export const site = {
  name: "Camille Naraga",
  role: "AI Automation Specialist",
  location: "Davao City, Philippines",
  email: "milkanaraga@gmail.com",
  phone: "+63 929 440 6436",
  phoneHref: "tel:+639294406436",
  linkedin: "https://www.linkedin.com/in/camille-naraga-8861a71b9",
  resume: "/resume.pdf",
  driveProjects:
    "https://drive.google.com/drive/folders/1uBTeJoQtio_p5gcWMRknmh494SzXDgnD?usp=sharing",
  heroBlurb:
    "Helping businesses automate repetitive work using AI, n8n, GoHighLevel, OpenAI, and custom workflows.",
  aboutStatement:
    "I design, develop, and deploy AI-powered workflow automation for businesses — intelligent AI agents, CRM automations, API integrations, and process optimization built with n8n, GoHighLevel, Make.com, Zapier, and OpenAI. Based in Davao City, working with clients worldwide.",
  education:
    "BS in Customs Administration — Holy Cross of Davao College (2021–2025)",
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100074154381972", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/camillesnaraga", icon: "instagram" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01d005c48e2b4ffad8", icon: "upwork" },
] as const;

export const stats = [
  { value: "100s", label: "of hours saved" },
  { value: "24/7", label: "systems running" },
];

/** Tool tile shown inside an Expertise card. */
export type ToolTile =
  | { name: string; desc: string; type: "openai" }
  | { name: string; desc: string; type: "logo"; slug: string }
  | { name: string; desc: string; type: "icon"; icon: string };

export const expertise: {
  title: string;
  description: string;
  icon: string;
  tools: ToolTile[];
}[] = [
  {
    title: "AI Automation",
    description: "Intelligent agents that think, decide, and act on your behalf.",
    icon: "bot",
    tools: [
      {
        name: "OpenAI",
        desc: "OpenAI — GPT models for text generation, reasoning, and function calling inside automations.",
        type: "openai",
      },
      {
        name: "Claude",
        desc: "Claude — Anthropic's model for reliable long-context reasoning, drafting, and analysis.",
        type: "logo",
        slug: "anthropic",
      },
      {
        name: "AI Agents",
        desc: "AI Agents — autonomous assistants that decide and take actions across your tools.",
        type: "icon",
        icon: "bot",
      },
      {
        name: "Prompt Engineering",
        desc: "Prompt Engineering — crafting prompts and guardrails so AI output stays accurate and consistent.",
        type: "icon",
        icon: "terminal",
      },
    ],
  },
  {
    title: "Workflow Automation",
    description: "Systems that connect your tools and run your ops 24/7.",
    icon: "workflow",
    tools: [
      {
        name: "n8n",
        desc: "n8n — low-code workflow builder to connect apps and automate multi-step flows.",
        type: "logo",
        slug: "n8n",
      },
      {
        name: "Make.com",
        desc: "Make — visual scenario builder for complex, branching automations.",
        type: "logo",
        slug: "make",
      },
      {
        name: "Zapier",
        desc: "Zapier — connect 6,000+ apps with no-code trigger-action Zaps.",
        type: "logo",
        slug: "zapier",
      },
      {
        name: "APIs",
        desc: "APIs — custom integrations that move data between systems programmatically.",
        type: "icon",
        icon: "code",
      },
    ],
  },
  {
    title: "CRM Systems",
    description: "Pipelines that capture, nurture, and convert on autopilot.",
    icon: "database",
    tools: [
      {
        name: "GoHighLevel",
        desc: "GoHighLevel — all-in-one CRM: pipelines, funnels, calendars, and messaging.",
        type: "icon",
        icon: "feather",
      },
      {
        name: "HubSpot",
        desc: "HubSpot — CRM and marketing hub for contacts, deals, and email.",
        type: "logo",
        slug: "hubspot",
      },
      {
        name: "Calendly",
        desc: "Calendly — automated scheduling that syncs bookings straight to your calendar.",
        type: "logo",
        slug: "calendly",
      },
      {
        name: "Stripe",
        desc: "Stripe — payments, subscriptions, and invoicing via API.",
        type: "logo",
        slug: "stripe",
      },
    ],
  },
  {
    title: "Integrations & Data",
    description: "Connecting systems and moving data cleanly between them.",
    icon: "code",
    tools: [
      {
        name: "REST APIs",
        desc: "REST APIs — standard HTTP endpoints to read and write data across services.",
        type: "icon",
        icon: "server",
      },
      {
        name: "Webhooks",
        desc: "Webhooks — real-time event triggers that push data the instant something happens.",
        type: "icon",
        icon: "webhook",
      },
      {
        name: "JSON",
        desc: "JSON — the lightweight data format that glues APIs and automations together.",
        type: "icon",
        icon: "braces",
      },
      {
        name: "Document Processing",
        desc: "Document Processing — extract, parse, and structure data from PDFs and files.",
        type: "icon",
        icon: "fileText",
      },
    ],
  },
];

export const projects = [
  {
    img: "/proj-client-followup.png",
    kicker: "Asana + Zapier",
    title: "Client follow-up, automated end to end",
    desc: "When an Asana task status changes, the workflow checks where the client stands and takes the right next step by itself — chasing replies, sending quote follow-ups, or kicking off onboarding.",
    tags: ["Asana", "Zapier", "AI by Zapier", "Gmail", "Google Drive"],
  },
  {
    img: "/proj-content-repurposing.png",
    kicker: "Zapier",
    title: "Content repurposing",
    desc: "Drop a long-form video in Drive and it gets transcribed, drafted into two ready-to-post articles, and published straight to Facebook. One upload, twice the content.",
    tags: ["Zapier", "Google Drive", "AI by Zapier", "Facebook"],
  },
  {
    img: "/proj-lead-automation.png",
    kicker: "Zapier",
    title: "From form fill to first response, on autopilot",
    desc: "A lead is enriched, scored, and routed automatically — logged and alerted for the team, or greeted with an instant AI-drafted reply. No manual triage.",
    tags: ["Youform", "Zapier", "Apollo", "Google Sheets", "AI by Zapier"],
  },
  {
    img: "/proj-meeting-automation.png",
    kicker: "n8n",
    title: "Meeting video to Slack & email summaries",
    desc: "From raw recording to a shared summary in minutes, no note-taker required. Drop a video in Drive and it transcribes, writes the recap, and delivers it to Slack and email.",
    tags: ["n8n", "Google Drive", "OpenAI", "Slack", "Gmail"],
  },
  {
    img: "/proj-make-scenarios.png",
    kicker: "Make",
    title: "Two automations that keep the team in the loop",
    desc: "One workflow routes new sheet updates straight to the right Slack channel; the other watches the inbox, analyzes and renames email attachments, uploads them to Drive, and logs everything automatically.",
    tags: ["Make", "Google Sheets", "Slack", "Gmail", "Google Drive"],
  },
  {
    img: "/proj-ai-calling.png",
    kicker: "n8n + Vapi",
    title: "Your AI sales rep that never sleeps",
    desc: "A lead fills your form and the AI calls them in seconds — introducing the business, qualifying, and pinging the team in Slack only when a human is needed. Anyone who didn't pick up gets re-called automatically every morning.",
    tags: ["n8n", "Vapi", "Google Forms", "Google Sheets", "Slack"],
  },
  {
    img: "/proj-tiktok-video.webp",
    kicker: "n8n + fal.ai",
    title: "Product photo → TikTok video, on autopilot",
    desc: "Drop a product image in Drive and the workflow generates three AI video styles, has Gemini score and pick the winner, and publishes it straight to TikTok — no editing, no manual posting.",
    tags: ["n8n", "fal.ai", "Gemini", "TikTok API", "Google Drive"],
  },
];

export const websites = [
  {
    img: "/site-healing.jpg",
    name: "Healing Hearts Beyond Borders",
    desc: "A global wellness & healing initiative — cinematic hero, editorial serif type, and a warm, immersive mood.",
    url: "https://healingheartsbeyondborders.org",
    urlLabel: "healingheartsbeyondborders.org",
    tag: "Wellness initiative",
  },
  {
    img: "/site-elprimo.jpg",
    name: "El Primo Carwash",
    desc: "Bold dark-and-yellow site for a Davao carwash — services, packages, quotes, and real customer reviews.",
    url: "https://elprimo.lovable.app",
    urlLabel: "elprimo.lovable.app",
    tag: "Local business",
  },
  {
    img: "/site-villa.jpg",
    name: "Villa de Eduardo",
    desc: "A staycation villa site with an airy editorial gallery, amenities, and direct booking.",
    url: "https://villadeeduardo.lovable.app",
    urlLabel: "villadeeduardo.lovable.app",
    tag: "Staycation & booking",
  },
  {
    img: "/site-splitbill.jpg",
    name: "SplitBill PH",
    desc: "Bill-splitting app for Filipino barkadas — tracks shared expenses, calculates who owes what, and generates GCash-ready payment summaries.",
    url: "https://barkada-settle.lovable.app",
    urlLabel: "barkada-settle.lovable.app",
    tag: "Fintech / utility app",
  },
];

export const certifications = [
  {
    img: "/cert-ghl.png",
    title: "HighLevel CRM Full Training",
    issuer: "Technical Virtual Assistants PH",
    date: "May 2026",
  },
  {
    img: "/cert-n8n.png",
    title: "AI Automation with n8n",
    issuer: "Technical Virtual Assistants PH",
    date: "Apr 2026",
  },
  {
    img: "/cert-make.png",
    title: "No-Code Automation with Make.com",
    issuer: "Technical Virtual Assistants PH",
    date: "Mar 2026",
  },
  {
    img: "/cert-zapier.png",
    title: "No-Code Automation with Zapier",
    issuer: "Technical Virtual Assistants PH",
    date: "Mar 2026",
  },
  {
    img: "/cert-prompt.png",
    title: "Prompt Engineering",
    issuer: "Technical Virtual Assistants PH",
    date: "Mar 2026",
  },
  {
    img: "/cert-openai-agents.png",
    title: "Agents and Workflows",
    issuer: "OpenAI Academy",
    date: "Jun 2026",
  },
  {
    img: "/cert-openai-applied.png",
    title: "Applied AI Foundations",
    issuer: "OpenAI Academy",
    date: "Jun 2026",
  },
  {
    img: "/cert-openai-foundations.png",
    title: "AI Foundations",
    issuer: "OpenAI Academy",
    date: "Jun 2026",
  },
  {
    img: "/cert-genai.png",
    title: "What Is Generative AI?",
    issuer: "LinkedIn Learning",
    date: "Jun 2026",
  },
  {
    img: "/cert-n8n-essentials.png",
    title: "Essentials: Your First Workflows",
    issuer: "n8n Academy",
    date: "Jun 2026",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    text: "Map your workflows and find the hours being lost to manual work.",
    icon: "search",
  },
  {
    step: "02",
    title: "Design Workflow",
    text: "Architect the automation — triggers, logic, integrations, fallbacks.",
    icon: "gitBranch",
  },
  {
    step: "03",
    title: "Build Automation",
    text: "Develop and connect every system with reliable, tested flows.",
    icon: "wrench",
  },
  {
    step: "04",
    title: "Deploy",
    text: "Ship to production with monitoring, alerts, and documentation.",
    icon: "feather",
  },
  {
    step: "05",
    title: "Optimize",
    text: "Measure results, refine prompts and logic, scale what works.",
    icon: "trendingUp",
  },
];

export const skills = [
  "OpenAI",
  "AI Agents",
  "n8n",
  "GoHighLevel",
  "Make.com",
  "Zapier",
  "REST APIs",
  "Webhooks",
  "JSON",
  "Prompt Engineering",
  "Data Extraction",
  "Document Processing",
  "CRM Automation",
  "Google Workspace",
  "Notion",
  "Slack",
];

export const testimonialsRaw: { name: string; text: string }[] = [
  ["Sarah Mitchell", "Camille took a workflow that used to eat three hours of our day and turned it into something that just runs. She explained every step clearly, and by week two we weren't thinking about it anymore."],
  ["Mark Reyes", "Paspas kaayo mutubag ug klaro mangutana sa akong gikinahanglan. Solid gyud."],
  ["Jessica Lee", "Fast, clean, exactly what we asked for."],
  ["Jessa Villanueva", "Daghan mi ug revisions pero wa gyud siya naglagot — gi-explain jud niya tanan hangtod nasabtan namo. Ang result mas maayo pa sa gi-expect namo."],
  ["Michael Brown", "Our CRM automation hasn't broken once since she built it. That alone says a lot."],
  ["Anna Garcia", "Sobrang responsive, updated kami palagi."],
  ["David Wilson", "Reliable and easy to work with. Would hire again without thinking twice."],
  ["Rico Fernandez", "Dili siya basta nag-follow ug tutorial, kabalo gyud siya unsay iyang gibuhat. Gikan sa simple nga request, gipalapdan pa niya kay naa siyay mas maayong idea."],
  ["Emily Rodriguez", "We handed Camille a messy lead process and she came back with something that just works — enrichment, scoring, routing, all automatic. Response times dropped almost overnight."],
  ["Jenny Santos", "Mas organized na ang operations namin, hindi na kami paulit-ulit ng ginagawa."],
  ["Ryan Cooper", "Stress-free from start to finish."],
  ["Mae Lim", "Dali ra siya kastorya, kabalo gyud unsay mubuhat sa negosyo."],
  ["Daniel Scott", "Delivered ahead of schedule and documented everything properly. Rare to find that combination."],
  ["Carlo Dela Cruz", "Hindi ko inakala na ganoon karami ang matitipid naming oras. 'Yung dating ginagawa ng staff namin buong araw, automated na — parang may extra tao na kami sa team."],
  ["Olivia Harris", "Great eye for detail, every time."],
  ["Karen Flores", "Human sa project, gitabangan pa mi sa mga gamay nga adjustments nga wa namo gi-expect."],
  ["Chris Anderson", "Technical skills and communication — she has both. Not common."],
  ["Michelle Ramos", "Isa ni sa pinaka-smooth nga experience namo sa pag-hire ug freelancer. Paspas, magaling, ug marunong mo-adjust bisan pa nagbag-o ang among plano sa tunga-tunga."],
  ["James Carter", "She didn't just build what we asked for — she flagged two other things in our process that were bleeding time and fixed those too. That's the kind of initiative you hope for and rarely get."],
  ["Bryan Torres", "Grabe ka smooth mag-collaborate. Highly recommended."],
].map(([name, text]) => ({ name, text }));

export type Testimonial = {
  name: string;
  quote: string;
  initials: string;
  role: string;
};

export const testimonials: Testimonial[] = testimonialsRaw.map(({ name, text }) => {
  const parts = name.split(" ");
  const initials = (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
  return { name, quote: text, initials, role: "Verified client" };
});

/** Three marquee columns, matching the 20-testimonial split (7/7/6). */
export const testimonialColumns: Testimonial[][] = [
  testimonials.slice(0, 7),
  testimonials.slice(7, 14),
  testimonials.slice(14, 20),
];
