export const site = {
  name: "Camille Naraga",
  role: "AI Automation Specialist",
  location: "Davao City, Philippines",
  email: "milkanaraga@gmail.com",
  phone: "+63 929 440 6436",
  phoneHref: "tel:+639294406436",
  linkedin: "https://www.linkedin.com/in/camille-naraga-8861a71b9",
  resume: "/resume.pdf",
  heroBlurb:
    "Helping businesses automate repetitive work using AI, n8n, GoHighLevel, OpenAI, and custom workflows.",
  aboutStatement:
    "I design, develop, and deploy AI-powered workflow automation for businesses — intelligent AI agents, CRM automations, API integrations, and process optimization built with n8n, GoHighLevel, Make.com, Zapier, and OpenAI. Based in Davao City, working with clients worldwide.",
  education:
    "BS in Customs Administration — Holy Cross of Davao College (2021–2025)",
};

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
  ["Sarah Mitchell", "Camille completely transformed one of our repetitive workflows into a fully automated process. We went from spending hours doing manual tasks to barely touching them. Communication was excellent throughout the project."],
  ["Mark Reyes", "Sobrang dali kausap at marunong talagang makinig sa kailangan ng client. Hindi lang niya ginawa ang request namin, nagbigay pa siya ng mas magandang solution."],
  ["Jessica Lee", "Amazing work! Fast delivery and everything worked exactly as promised."],
  ["Jessa Villanueva", "Professional kaayo. Bisan daghan mi ug revisions, patient gihapon siya ug gi-explain tanan clearly."],
  ["Michael Brown", "I was honestly surprised by how smooth everything turned out. The AI automation integrated with our CRM without any issues, and it's been running flawlessly ever since."],
  ["Anna Garcia", "Napaka-responsive at laging nagbibigay ng updates. Hindi kami nangapa sa progress ng project dahil alam namin ang nangyayari every step of the way."],
  ["David Wilson", "Reliable, knowledgeable, and easy to work with. I'd definitely hire Camille again."],
  ["Rico Fernandez", "Nindot kaayo ang output. Makita jud nimo nga kabalo siya sa iyang gihimo, dili lang basta nag-follow ug tutorial."],
  ["Emily Rodriguez", "Camille helped us automate lead management inside GoHighLevel. It reduced our response time dramatically, and our team can now focus on closing deals instead of manual work."],
  ["Jenny Santos", "Ang ganda ng workflow na ginawa niya. Mas organized na ang operations namin at hindi na kami paulit-ulit ng trabaho."],
  ["Ryan Cooper", "Working with Camille was stress-free. Every concern I had was addressed quickly, and the final product exceeded expectations."],
  ["Mae Lim", "Dali ra kaayo siya kastorya ug maayo mohatag ug recommendations. Kabalo siya unsay mas effective para sa negosyo."],
  ["Daniel Scott", "Excellent communication from start to finish. The project was delivered ahead of schedule, and everything was documented properly."],
  ["Carlo Dela Cruz", "Sa totoo lang, hindi ko akalaing ganoon kalaki ang matitipid naming oras. Yung dating ginagawa ng staff namin araw-araw, automatic na ngayon."],
  ["Olivia Harris", "Camille has a great eye for detail. Even small issues that I overlooked were caught and fixed before launch."],
  ["Karen Flores", "Satisfied kaayo mi sa serbisyo. Human sa project, gitabangan pa mi niya sa mga gamay nga adjustments without any hassle."],
  ["Chris Anderson", "Very professional and dependable. It's rare to find someone who combines technical skills with great communication."],
  ["Michelle Ramos", "Isa sa pinakamagandang experience namin sa pag-hire ng freelancer. Mabilis, magaling, at marunong mag-adjust sa changes namin."],
  ["James Carter", "Camille didn't just build what we asked for—she suggested improvements that made the entire system better. That's the kind of initiative every client hopes for."],
  ["Bryan Torres", "Grabe ka smooth ang collaboration. Paspas mo-reply, maayo ang quality sa work, ug makita jud nga passionate siya sa automation. Highly recommended!"],
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
