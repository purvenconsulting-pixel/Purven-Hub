/**
 * Knowledge Base - All ChatLLM documentation embedded as chunks
 * Each chunk has a title, content, and source URL for citation
 */

export interface KnowledgeChunk {
  id: string;
  title: string;
  content: string;
  source: string;
  section: string;
}

export const knowledgeBase: KnowledgeChunk[] = [
  // Introduction
  {
    id: "intro-1",
    title: "What is ChatLLM Teams",
    content: `Abacus.AI Super Assistant, also known as ChatLLM Teams, is an all-in-one AI platform that provides access to the world's top Large Language Models (LLMs) from both open-source and proprietary domains. It's designed as a comprehensive AI assistant for professionals, students, and teams. ChatLLM Teams consolidates multiple AI capabilities into a single, unified interface, eliminating the need to juggle between different specialized tools. As Abacus.AI describes it, it's "one AI assistant with access to all top LLMs, video and image generators" with general purpose and coding agents included.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/introduction",
    section: "Introduction"
  },
  {
    id: "intro-2",
    title: "Multimodal AI Features",
    content: `ChatLLM Teams offers the following multimodal AI features: Generate presentations (PowerPoint and Word documents), Search the web with real-time information, Create and analyze documents (PDF, DOCX, CSV), Generate images using FLUX-1 Pro, DALL·E, Ideogram, and Recraft, Generate videos from text using KlingAI, Lumalabs, Hailuo, and RunwayML, Code generation and editing with GitHub integration, Execute code, analyze data, and draw plots, Text-to-speech and voice mode capabilities.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/introduction",
    section: "Introduction"
  },
  {
    id: "intro-3",
    title: "Why Choose ChatLLM Teams",
    content: `Instead of paying for and managing multiple AI subscriptions (ChatGPT for text, Midjourney for images, Runway for video, GitHub Copilot for code), ChatLLM Teams provides all these capabilities in one platform. As noted by Indie Boosting, it offers "features such as image and video generation, PowerPoint and Word document creation, PDF analysis, and advanced developer tools including code auto-completion and GitHub integration." The platform is designed to be more powerful and accessible than ChatGPT alone, offering generous usage limits that allow thousands of messages per month on top-tier models without hitting quotas.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/introduction",
    section: "Introduction"
  },

  // Prompting Tips
  {
    id: "prompt-1",
    title: "Be Clear and Specific",
    content: `Be Clear and Specific: Clearly specify what you want in your prompt. The more detailed your request, the better the response. Example: Generate a detailed summary of the latest trends in AI technology.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-2",
    title: "Use Simple Language",
    content: `Use Simple Language: Avoid using overly complex language. Keep your prompts straightforward to ensure the AI understands. Example: Explain the concept of blockchain in simple terms.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-3",
    title: "Provide Context",
    content: `Provide Context: Give enough context in your prompts to help the AI generate accurate responses. Example: Write a marketing email for a new fitness app targeting young professionals.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-4",
    title: "Iterate and Refine",
    content: `Iterate and Refine: If the response isn't what you expected, try refining your original question or providing more details. Example: Summarize the benefits of renewable energy. Focus on solar and wind power.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-5",
    title: "Break Down Complex Tasks",
    content: `Break Down Complex Tasks: For complex requests, break them down into smaller, manageable steps. Example: First, generate an outline for a research paper on climate change. Then, write an introduction based on the outline.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-6",
    title: "Text Generation Tips",
    content: `Text Generation: To get a well-written article or blog post, be specific about the topic and desired length. Example: Write a 500-word blog post about the benefits of remote work.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-7",
    title: "Image Generation Tips",
    content: `Image Generation: For generating images, clearly describe the scene or object you want. Example: Create an image of a serene beach with palm trees and a sunset in the background.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-8",
    title: "Web Search Tips",
    content: `Web Search: To trigger a web search, use words like recent, latest etc. The more explicit you are the better. Example: Find the latest news on electric vehicles.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-9",
    title: "Code Generation Tips",
    content: `Code Generation: For coding, mention the programming language and the task you need. Example: Write a Python script to fetch weather data from an API.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },
  {
    id: "prompt-10",
    title: "Data Analysis Tips",
    content: `Data Analysis: For data analysis, upload your data and ask specific questions about it. Example: Analyze this sales data and provide insights on monthly trends.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/prompting-tips-and-tricks",
    section: "Prompting Tips"
  },

  // FAQs - General
  {
    id: "faq-1",
    title: "What is ChatLLM and its benefits",
    content: `ChatLLM is the world's first AI super-assistant. You get access to all the state-of-the-art LLMs including GPT-5.2, GPT-5.2 Thinking, GPT-Image, Sonnet-4.5, Opus 4.5, Gemini 3 Pro, Grok 4.1, Qwen 3 and Llama 4. We will also add any new state-of-the-art LLM that is launched as soon as possible to the product. You can query the web, generate images, execute code, chat with PDFs, humanize your text, analyze charts, create custom chatbots and AI Workflows, access our playground feature and much more. With ChatLLM you can also connect all your internal systems including GDrive, Slack and Confluence and set up custom chatbots and AI Agents on your data.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-2",
    title: "Who is ChatLLM designed for",
    content: `ChatLLM is best for professionals, students and small teams. You can invite everyone on your team and share chats and manage your subscription.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-3",
    title: "Chatbot Abilities",
    content: `Our built-in chatbots can perform a large variety of tasks automatically: Document Analysis (analyze, summarize, and discuss uploaded documents including PDFs, Word, PowerPoint, images), Data Analysis (perform data analysis and generate charts from uploaded CSVs and Excel files), Image Generation (generate pictures using top SOTA models like GPT Image 1.5, Nano Banana Pro, FLUX.2, Recraft, Imagen, and Ideogram), Video Generation (generate videos using top SOTA models like Sora 2, KlingAI, Veo-3, Lumalabs, Hailuo, and RunwayML), Text Humanization (humanize responses with Professional, Humorous, and Caring tone options), iPhone and Android apps (both apps have all state-of-the-art abilities including voice), Custom Instructions (apply instructions to all chats), Code Playground (generate and run code for self-contained applications), Web Search (search the web and get up-to-date information), AI Engineer (create custom chatbots and AI agents), Slack, Teams, and Other Integrations (connect with enterprise systems).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-4",
    title: "Integrations with other tools",
    content: `Yes, ChatLLM offers integrations with various tools and platforms. You can connect ChatLLM to communication platforms like Slack and Microsoft Teams, as well as integrate with other APIs and services to enhance your workflow.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-5",
    title: "How often are new LLMs added",
    content: `We strive to stay at the forefront of AI advancements. ChatLLM continuously monitors developments in the AI field and aims to integrate the latest LLMs as soon as they become available.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-6",
    title: "Customize AI agents",
    content: `Yes, ChatLLM allows you to customize AI agents to suit your specific requirements. You can configure settings, define behaviors, and set instructions to tailor the AI agents to your needs.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-7",
    title: "Python code execution",
    content: `ChatLLM allows you to generate and execute Python code directly within the platform. Simply input your code prompt or request, and ChatLLM will provide you with the code and an option to execute it. To execute Python code: Provide a clear prompt for the code you need, review the generated code snippet, click on the "Execute" button next to the code snippet, view the results directly within the platform. You can save Python code snippets for future use.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-8",
    title: "How to Purchase More Credits",
    content: `If you have run out of credits, you can purchase more by following these steps: Click on the profile icon in the top right corner, navigate to Profile → Profile & Billing, click on the "Buy Credits" button. Pro Tip: If you've used all 3 Abacus AI Agent conversations included in the Basic plan, consider upgrading to the Pro tier. Pro removes this limit so you can start as many Abacus AI Agent conversations as you need, as long as you have credits available!`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-9",
    title: "What is the Best LLM",
    content: `At Abacus, we don't believe one LLM is the best at everything; instead, we leverage multiple models to provide the best results for various tasks. We also run our own contamination free benchmark which you can see at LiveBench.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },
  {
    id: "faq-10",
    title: "Support Contact",
    content: `If you have any questions or feedback, please don't hesitate to reach out to us at support@abacus.ai. Our team is ready to assist you with anything you need, and are always working to improve your experience.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/faqs/general",
    section: "FAQs"
  },

  // Toolbar and LLM Configuration
  {
    id: "toolbar-1",
    title: "What is the Toolbar feature",
    content: `The Toolbar feature in ChatLLM allows users to enhance their custom ChatLLM with additional functionalities such as Image Generation, Doc Generation, and more. This field is optional and only required if you want your custom ChatLLM to showcase a toolbar.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/toolbar-llm-configuration",
    section: "Toolbar"
  },
  {
    id: "toolbar-2",
    title: "Toolbar Options",
    content: `The Toolbar offers a variety of options: Video Analysis (analyzes video content to extract insights), Scrape URL (extracts information from a specified web URL), Video-Gen (generates video content), Humanize (converts GenAI text into something more human-like), Doc-Gen (creates documents from provided data or templates), Image (handles image-related tasks such as editing or generating images), Code (assists with coding tasks including writing and debugging code), Code playground (an interactive space for testing and experimenting with code), Editor (a tool for editing text or documents), Screenshot (captures and manages screenshots), Powerpoint-Gen (generates PowerPoint presentations from data or templates).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/toolbar-llm-configuration",
    section: "Toolbar"
  },
  {
    id: "toolbar-3",
    title: "LLM Behavior Instructions",
    content: `Behavior Instructions are directives that shape how the model approaches the problem to be solved. Examples: For answering questions on a document, say "Use only the top search results while generating the answer." For querying a database, say "While writing SQL code try to retrieve related columns to provide more background to the results." For web search, say "Always perform a web search before answering the query."`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/toolbar-llm-configuration",
    section: "Toolbar"
  },
  {
    id: "toolbar-4",
    title: "Response Instructions",
    content: `Response Instructions focus on the way the LLM responds to the user. You can control: Tone (formal, casual, humorous, empathetic), Persona (technical expert, friendly assistant, strict moderator), Ethical Guidelines (avoid certain topics, respect privacy), Engagement (take initiative, ask follow-up questions), Length (concise to detailed), Complexity (language complexity for different audiences), Content (include or exclude examples, analogies, references), Clarification (how to handle ambiguous queries). Example: "You are a professional consultant. Keep responses under three sentences unless elaborating on complex topics. Use bullet points for step-by-step instructions."`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/toolbar-llm-configuration",
    section: "Toolbar"
  },
  {
    id: "toolbar-5",
    title: "Web Search Considerations",
    content: `Before enabling Web Search, consider: Enabling this option may send data to alternate models. Ensure that it aligns with your data privacy and security requirements. Be aware that enabling Web Search can introduce additional latency in responses.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/toolbar-llm-configuration",
    section: "Toolbar"
  },

  // Connectors
  {
    id: "connector-1",
    title: "Connecting to your data",
    content: `Abacus offers a very simple way to connect your applications with ChatLLM Teams. Just browse to your first party connectors and create a connection. Once you have a connection setup, all of the Chatbots, as well as Abacus AI Agent will be able to freely query data from these connectors based on your prompts.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/connections/user-connectors",
    section: "Connectors"
  },

  // Abacus AI Agent
  {
    id: "agent-1",
    title: "What is Abacus AI Agent",
    content: `Abacus AI Agent is your multi-skilled AI agent that can not only think — it can act. From building apps to analyzing data, writing reports to managing entire workflows, Abacus AI Agent connects with your tools, performs real-time research, and delivers beautifully packaged results — all in one place. Whether you're a creator, analyst, founder, or knowledge worker — Abacus AI Agent empowers you to go from idea to execution in minutes.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-2",
    title: "App and Website Creation",
    content: `Abacus AI Agent lets you create powerful, production-ready apps and websites — with real databases, authentication, LLM capabilities, versioning, and seamless deployment. Key capabilities: Database + Auth Support (build apps with built-in database integration and secure authentication, no setup needed), LLM-Enabled Apps (add AI chat, document Q&A, or generation features), Checkpointing & Deployments (make changes, preview versions, and deploy instantly), Custom Domain Publishing (host your app on your own domain).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-3",
    title: "Automated AI Workflows",
    content: `Set up powerful, hands-free AI workflows that connect with your favorite tools. Key capabilities: Automated Workflow Creation (just describe what you want done, Abacus AI Agent designs the entire workflow), Rich Integration Support (connects natively to tools like Slack, Gmail, and internal systems), MCP Discovery Engine (finds and recommends the right MCP or tool for apps like Github, Notion, Salesforce, JIRA, or Twitter), Custom API Support (connect to your own APIs by pasting your token), Task Scheduling (automate recurring workflows like daily AI news, weekly Slack reports, meeting summaries).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-4",
    title: "AI Chatbots",
    content: `Abacus AI Agent lets you build powerful AI chatbots that go far beyond answering questions. You can create assistants trained on your content, enable them to take actions, share them with your team, embed them on your website — and connect them to your tools. Key capabilities: Knowledge-Driven Assistants (train on websites, documents, PDFs, or internal wikis — no coding required), Share Anywhere (private for your team, public, or embed on your website), Tool Integration for Actions (schedule meetings, send reports, read from Google Docs, query Slack or Jira).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-5",
    title: "Presentations and Reports",
    content: `Abacus AI Agent creates polished, presentation-ready slides and documents — in PowerPoint or PDF — with structured layouts, visuals, and compelling content. Key capabilities: Smart Slide Structuring (get up to 25 well-organized slides with relevant images, charts, flows, and clean formatting), Use Your Data or Source from Web (upload your own data or ask Abacus AI Agent to research content online).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-6",
    title: "Deep Research and Live Web Browsing",
    content: `Abacus AI Agent conducts real-time research using live web access — gathering trusted sources, extracting insights, and organizing them into structured, readable reports with visuals. Key capabilities: Live Web Access (includes the most up-to-date articles, reports, and web content), In-Depth + Interdisciplinary Research (works across domains — tech, science, business, policy), Visual-Enhanced Reports (pulls relevant images and media), Structured Outputs (includes citations, comparison tables, and concise takeaways). Perfect for: trend scouting, market research, technology exploration, sourcing latest reports.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-7",
    title: "Data Analysis and Insights",
    content: `Abacus AI Agent helps you uncover powerful insights from spreadsheets, structured web data, and domain-specific datasets — no code, no formulas. Key capabilities: Upload or Extract Data (upload CSV/Excel files, or scrape structured tables from websites), Smart Analysis Across Domains (financial, spatial, market, or performance analytics), Bulk Data + LLM Actions (clean, reformat, or transform entire columns at once), Insightful Dashboards (get beautiful, professional dashboards that visualize key insights and trends).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-8",
    title: "Short Videos and AI-Generated Images",
    content: `Create viral-ready short videos and stunning images with just a prompt. Key capabilities: Generate Reels, Shorts & Explainers (instantly create platform-ready videos with script, scenes, visuals, sound, and even lip-sync), Create or Edit AI Images (generate realistic faces, graphics, marketing creatives, or product mockups — or edit any image with just a prompt), Script-to-Scene Flow (provide an idea and get back full scenes, narration, and visuals), All-in-One Generative Studio (from video storytelling to image design).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-9",
    title: "Agent Prompting Best Practices",
    content: `To get the most out of Abacus AI Agent: Be clear and specific about the task: what you want, how long, and what format. For complex tasks, break down your task into multiple steps first and then start small and build more on top of it for the best results. Mention if you want sources, charts, visuals, or summaries. You can always say "you decide" if you want Abacus AI Agent to make smart decisions.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },
  {
    id: "agent-10",
    title: "Agent Credits and Pro Tier",
    content: `Each Abacus AI Agent task typically uses 500–1000 credits. On the Basic Tier, you get 3 Abacus AI Agent tasks/month. Upgrade to Pro Tier ($10/month) for: Unlimited task access (as long as you have credits), a more powerful version of Abacus AI Agent, +5000 bonus credits.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent",
    section: "Abacus AI Agent"
  },

  // Agent Tasks
  {
    id: "tasks-1",
    title: "What Are Tasks",
    content: `Tasks are scheduled, repeatable Abacus AI Agent workflows that run automatically at defined intervals (hourly, daily, weekly, monthly, or custom schedules). You can use Tasks to: Generate reports, Send emails or reminders, Post on social media, Create videos or images, Generate or update documents, Run browser automation, Analyze data, Execute database operations, Trigger conditional workflows. Think of Tasks as AI workers operating 24/7 on your behalf. Usage limits: Up to 20 active tasks, Up to 50 total tasks per user.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },
  {
    id: "tasks-2",
    title: "General Scheduled Tasks",
    content: `Automate content creation, communication, and reporting. Examples: Generate and post tweets every 3 hours, Send yourself a daily to-do list from Slack, Create weekly reports and email them, Generate images or videos on a schedule, Create or update documents automatically.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },
  {
    id: "tasks-3",
    title: "Multi-Step Agentic Tasks",
    content: `Agentic Tasks perform multi-step reasoning and execution, not just simple rule-based automation. Examples: Find the latest Product Manager jobs daily, compile them into a CSV, and email it. Scan Gmail for support emails, analyze using your knowledge base, draft human-like replies, and log responses. Auto-reply to trending, high-engagement tweets aligned with your themes. Reply daily to top comments with witty, human-like responses. Act as your brand's support voice — responding to positive mentions while skipping abuse.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },
  {
    id: "tasks-4",
    title: "Browser Automation Tasks",
    content: `Abacus AI Agent can run scheduled browser workflows that simulate real user actions. Examples: Log into portals and download invoices, Manage and update Google Sheets, Automate job applications from a Google Sheet, Automate app testing using browser-based flows, Monitor competitor pricing daily and email CSV reports, Analyze NVDA charts, capture screenshots, gather news, and email daily trading reports. Browser automation is ideal for systems without APIs or when UI-level automation is required.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },
  {
    id: "tasks-5",
    title: "Tasks with Database Access",
    content: `You can Schedule Tasks with DB access as well. You can create apps in Abacus AI Agent and attach Tasks directly to their databases. With DB access, Tasks can: Read and write records, Execute conditional logic, Track progress across runs, Maintain state and memory, Update structured data, Continuously improve workflows. Examples: Monitor pending invoices and send payment reminders, Confirm orders and generate invoices, Send upcoming payment reminders, Generate operational reports, Analyze customer reviews weekly, Identify decision-makers and run personalized campaigns, Track LinkedIn outreach and optimize messaging.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },
  {
    id: "tasks-6",
    title: "Live Dashboards",
    content: `You can create Live Dashboards powered by Tasks. How it works: A Task runs on a schedule, Data is updated automatically, Dashboards always reflect the latest state. Examples: Daily sales dashboard, Trading insights dashboard, Social media performance tracker, Customer support metrics, Lead conversion analytics. No manual updates required.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-tasks",
    section: "Agent Tasks"
  },

  // Pricing
  {
    id: "pricing-1",
    title: "Pricing Overview",
    content: `Abacus.AI provides a generous free tier for database, file hosting, and app server management until your app starts receiving significant traffic (up to 25,000 credits per month). Beyond that, charges apply.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/pricing-apps",
    section: "Pricing"
  },
  {
    id: "pricing-2",
    title: "App Hosting Costs",
    content: `App visits: 320 Credits per 1,000 visits. Outbound data transfer: 33 Credits per GiB. App visits = Every time people visit your app, it uses credits. Outbound data = When your app sends data out (images, pages, etc.).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/pricing-apps",
    section: "Pricing"
  },
  {
    id: "pricing-3",
    title: "Database Costs",
    content: `Storage: 500 Credits per GiB per month. Requests: 300 Credits per 1M DB requests. Storage = space used for user information, settings, etc. DB request = any lookup, save, update, or delete.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/pricing-apps",
    section: "Pricing"
  },
  {
    id: "pricing-4",
    title: "File Storage Costs",
    content: `Storage: 300 Credits per GiB per month. Transfer: 100 Credits per GiB. Complex operations: 8 Credits per 1000 ops. Simple operations: 6 Credits per 10,000 ops. Complex ops: upload, copy, create, list, delete. Simple ops: GET, SELECT, HEAD (checking or viewing a file).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/pricing-apps",
    section: "Pricing"
  },
  {
    id: "pricing-5",
    title: "Email Notifications Costs",
    content: `Emails sent: 1,000 Credits per 10,000 emails. Emails sent = Any email notification sent via the app to users or admins.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/pricing-apps",
    section: "Pricing"
  },

  // MCP Servers
  {
    id: "mcp-1",
    title: "What Are MCPs",
    content: `The Model Context Protocol (MCP) is an open standard that connects AI models, like those in Abacus AI Agent, to external systems via a client-server architecture. Think of MCP as a universal connector, allowing Abacus AI Agent to access tools (such as GitHub or databases) and resources (like files or APIs) without custom integrations. With MCP, you can enable Abacus AI Agent to perform tasks like querying databases, fetching web content, or automating workflows.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/mcp-servers",
    section: "MCP Servers"
  },
  {
    id: "mcp-2",
    title: "MCP Prerequisites",
    content: `You'll need: An Abacus AI Agent account with access to the platform. API keys or credentials for external tools you want to integrate (for example, GitHub or Notion). Access to an MCP server (community-built or custom) or the ability to set one up. You can find a list of community-built MCP servers at GitHub and mcp.so.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/mcp-servers",
    section: "MCP Servers"
  },
  {
    id: "mcp-3",
    title: "MCP Configuration Steps",
    content: `Step 1: Go to MCP Settings Config Page - Log in to your Abacus.AI account, navigate to the Abacus AI Agent Homepage, click the Configure MCP button. Step 2: Install and Configure an MCP Server - Choose an MCP server that suits your needs. Both local servers (installable via npm or PyPI) and remote servers (already deployed) are supported. Servers requiring access to your local filesystem will not work. Copy the server's config JSON and paste it into the JSON Config settings page. Add a new MCP server config JSON based on its transport type: Stdio (for local servers, provide command, args, env) or SSE (for remote servers, provide the server URL). Step 3: Use MCP Tools in Abacus AI Agent - In your chat interface, instruct the agent to use the MCP tool.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/mcp-servers",
    section: "MCP Servers"
  },
  {
    id: "mcp-4",
    title: "MCP Example Config",
    content: `Example JSON configuration for two MCP servers: GitHub and Google Tasks. { "github": { "command": "npx", "args": ["-y", "@modelcontextprotocol/server-github"], "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>" } }, "google_tasks": { "url": "<REMOTE_SERVER_URL>" } }`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/mcp-servers",
    section: "MCP Servers"
  },
  {
    id: "mcp-5",
    title: "MCP FAQs",
    content: `Why isn't my MCP server connecting? Ensure that the command or URL in your config JSON is correct and matches the format shown in the example config. Also, verify that the server is running. Can I use multiple MCP servers? Yes, Abacus AI Agent supports adding up to 5 servers and up to 50 tools across those servers. How do I secure my MCP connections? Use MCP servers from trusted sources only, and prefer OAuth authentication for remote servers.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/mcp-servers",
    section: "MCP Servers"
  },

  // App Deployment
  {
    id: "deploy-1",
    title: "Deployment Options",
    content: `Abacus.AI offers three ways to deploy your application: Abacus.AI domain (quick demos, testing, or sharing without setup - example: yoursite.abacusai.app), Custom Domain (when you want to host on your own domain - you must own the domain and verify it), Custom SubDomain (when you already have a website and want to host the app on a subdomain - example: app.yoursite.com).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps-deployment",
    section: "App Deployment"
  },
  {
    id: "deploy-2",
    title: "Deploy on Abacus.AI Domain",
    content: `Step 1: Click the Deploy button in the top right corner. Step 2: Select Abacus.AI as your deployment type. Step 3: Enter your desired subdomain (e.g., myapp.abacusai.app), then click Deploy. Step 4: A public URL will be generated. It may take a few minutes (~5 minutes) for your URL to be active.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps-deployment",
    section: "App Deployment"
  },
  {
    id: "deploy-3",
    title: "Deploy on Custom Domain",
    content: `Step 1: Click Deploy, select custom domains tab, click Manage Domains, click Add New and enter your domain name. Step 2: Update DNS Records and Verify Ownership. Option A - Automatic Configuration (partnered with Entri for seamless DNS configuration via SSO to your domain provider). Option B - Manual Configuration: Nameservers/NS records (Recommended for GoDaddy, Squarespace, Porkbun, Hostinger) or CNAME records (Recommended for Cloudflare, Namecheap). Step 3: After successful verification, select the domain and click Deploy.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps-deployment",
    section: "App Deployment"
  },
  {
    id: "deploy-4",
    title: "Domain Verification Status",
    content: `Verified: Your domain has been successfully verified and is ready for deployment. Pending: Your domain registration was not completed successfully. Please re-try. In Progress: Ensure your DNS records are updated. If they're already set, verification is underway and should complete within 24 hours. Failed: The verification attempt was unsuccessful. Double-check your DNS settings and try again.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps-deployment",
    section: "App Deployment"
  },
  {
    id: "deploy-5",
    title: "Deployment Tags",
    content: `Deployment tags are custom labels that let you pin different domains to specific versions of your app. For example, you can keep myapp.com pointing to your stable production build while staging.myapp.com tracks a work-in-progress version. When deploying, only domains sharing the same tag are updated. Untagged deployments update all untagged domains, and tagged deployments update all domains with that tag.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps-deployment",
    section: "App Deployment"
  },

  // Abacus Claw
  {
    id: "claw-1",
    title: "What is Abacus Claw",
    content: `Abacus Claw is the hosted, managed version of OpenClaw – an open-source platform for building always-on AI agents that run in the cloud, connect to the tools and channels you already use, and keep working even when you close your browser. Unlike one-shot AI chatbots that reset after every conversation, Claw gives your agent: Persistent memory (remembers context across sessions and channels), A full cloud computer (Linux environment with terminal, browser, and persistent file storage), Multi-channel presence (talk to you on WhatsApp, Telegram, and Slack simultaneously), Background automation (schedule recurring tasks with cron jobs), Tool integrations (connect Slack, Notion, GitHub, Gmail, Google Calendar, and more). You can start using Claw right now at claw.abacus.ai — no local setup required.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-2",
    title: "Persistent Memory",
    content: `Your agent maintains continuous memory across all conversations, channels, and sessions. It remembers what you've told it before, tracks ongoing projects, and builds context over time — so you never have to repeat yourself. This isn't just chat history. Your agent actively uses its memory to: Recall preferences and past decisions, Track long-running tasks and follow up proactively, Connect information across different conversations and channels, Build a personalized understanding of your work and goals.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-3",
    title: "Persistent Operation",
    content: `Your agent runs 24/7 in the cloud — it doesn't sleep, doesn't need your laptop to be open, and doesn't stop working when you close the browser. This means it can: Respond to messages on WhatsApp, Telegram, or Slack even when you're offline, Execute scheduled tasks at any time of day or night, Monitor external services and trigger actions in real-time, Maintain continuous workflows that span hours, days, or weeks.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-4",
    title: "Cron Jobs",
    content: `Cron jobs let you schedule your agent to perform tasks automatically on a recurring basis — daily briefings, weekly reports, periodic data pulls, or anything else that benefits from automation. You set up cron jobs by telling your agent what to do and when. It handles the scheduling natively.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-5",
    title: "WhatsApp Configuration",
    content: `WhatsApp integration turns your agent into a WhatsApp contact that can handle DMs and group conversations. Key settings: selfChatMode (operates in your personal WhatsApp chat with yourself), dmPolicy (pairing, allowlist, open, disabled), allowFrom (list of approved phone numbers), groupPolicy (allowlist, open, disabled), groupAllowFrom (list of group JIDs), requireMention (only responds when @mentioned in groups). Tips: Group JIDs look like 120363xxxxx@g.us. Each group gets its own isolated conversation session. Start with allowlist for both DM and group policies while testing.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-6",
    title: "Telegram Configuration",
    content: `Telegram integration works through a Telegram Bot created via @BotFather. Key settings: botToken (API token from BotFather), dmPolicy (allowlist, open, disabled), allowFrom (numeric Telegram user IDs), requireMention (only responds when @mentioned), Privacy mode (must disable in BotFather if agent needs to read all group messages). Tips: Send a message to @userinfobot to get your numeric ID. Forum topics are supported. Each topic can be treated as a separate conversation context.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-7",
    title: "Slack Configuration",
    content: `Slack integration connects your agent to a Slack workspace. Two connection modes: Socket Mode (recommended, uses WebSocket, no public URL needed, requires App-Level Token xapp-... and Bot Token xoxb-...) and HTTP Mode (uses public URL endpoint, more complex, requires Bot Token and configured Request URL). Key settings: appToken (xapp-...), botToken (xoxb-...), channelPolicy (allowlist, open, disabled), requireMention (only responds when @mentioned). Tips: Agent responds in threads by default. Socket Mode is easiest and works behind firewalls. Required OAuth scopes: chat:write, channels:history, groups:history, im:history, app_mentions:read, connections:write.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-8",
    title: "Claw Billing",
    content: `With Pro subscription ($20/user/month), you get: Abacus AI Agent (build full-stack web applications, create presentations, set up scheduled tasks, write/debug/refactor code, conduct research and data analysis, automate complex workflows) + Abacus Claw (user-friendly interface, pre-configured AI models, enterprise-grade security, seamless integration). Credits: 30,000 credits per month. Two types of credit usage: Hosting costs (1 credit per 5 minutes while computer is running) and AI model usage (each LLM call billed separately based on model and tokens).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-9",
    title: "Claw Sessions",
    content: `Each session is a self-contained conversation with its own context and memory. Active session: You can chat, give instructions, and your agent will act on them. Past sessions: You can open previous sessions to review past conversations, but you cannot continue chatting in them. All new interactions must happen in a new session. Note: Past sessions are read-only. If you need to pick up where you left off, start a new session — your agent's persistent memory carries forward automatically.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },
  {
    id: "claw-10",
    title: "OpenClaw Dashboard",
    content: `The OpenClaw Dashboard is your visual control center. What you can do: Live Monitoring & Sessions (live session streaming, active sessions view with model usage and token counts, session history, real-time updates every 5 seconds), Cron Job Management (view scheduled jobs, enable/disable, manually trigger, monitor execution history), Channel Settings UI (configure WhatsApp, Telegram, Slack visually, set DM policies and allowlists), Tool Management (see connected tools, add new integrations, review usage logs, manage authentication).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/abacus-claw",
    section: "Abacus Claw"
  },

  // Agent Skills
  {
    id: "skills-1",
    title: "What Are Agent Skills",
    content: `Agent Skills give Abacus AI Agent specialized expertise in specific domains — think of them as hiring expert consultants for your AI. Each skill equips Abacus AI Agent with domain knowledge, proven workflows, and best practices tailored to particular types of tasks. Unlike generic AI responses, skills ensure: Consistent quality (following established methodologies), Specialized expertise (technical writing, data analysis, code reviews, research), Automatic activation (Abacus AI Agent detects when to use each skill), Time savings (no need to explain requirements repeatedly).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/agent-skills",
    section: "Agent Skills"
  },
  {
    id: "skills-2",
    title: "Creating a Custom Skill",
    content: `Click + New Skill to open the creation form. Required fields: Name (lowercase with hyphens, e.g., tech-writer, data-analyst), Description (brief explanation of what the skill does), Skill Package (upload a .zip file containing SKILL.md at the root level, max 50 MB). File structure: your-skill-name.zip ├── SKILL.md (required) ├── examples/ (optional) ├── templates/ (optional) └── references/ (optional). Important: SKILL.md must be at the root of the .zip file, not inside a subfolder.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/agent-skills",
    section: "Agent Skills"
  },
  {
    id: "skills-3",
    title: "SKILL.md Structure",
    content: `Your SKILL.md file defines how Abacus AI Agent behaves when using this skill. A well-structured skill file includes: 1. Skill Description (what the skill does and when it should be activated), 2. Workflow (step-by-step process the agent should follow), 3. Tools & Capabilities (which tools and approaches to use), 4. Quality Standards (what makes excellent output), 5. Examples (sample inputs and expected outputs).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/agent-skills",
    section: "Agent Skills"
  },
  {
    id: "skills-4",
    title: "Managing Skills",
    content: `Enable/Disable: Toggle the switch next to any skill. ON (blue) — Abacus AI Agent can use this skill automatically. OFF (grey) — Skill won't be activated. Export: Click on the skill name, click Export, download as .zip, share with teammates. Edit: Click on the skill name, download the current package, modify SKILL.md, re-upload. Delete: Click on the skill name, click Delete, confirm. Warning: This action cannot be undone. Import: Click + New Skill and select Import, upload .zip, review, click Import.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/agent-skills",
    section: "Agent Skills"
  },
  {
    id: "skills-5",
    title: "Project-Level Customization",
    content: `Apply custom instructions and skills to specific projects for consistent behavior across all chats within that project. How to customize: Open any project, find the Customize AI card in the right sidebar, click + Customize, add project-specific instructions, enable relevant skills, click Save. Benefits: Context Consistency (set context once, applies to all project chats), Team Alignment (everyone gets the same AI behavior), Focused Skills (enable only skills needed for this project).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/agent-skills",
    section: "Agent Skills"
  },

  // Agent Apps
  {
    id: "apps-1",
    title: "Building Apps with Abacus AI Agent",
    content: `Abacus AI Agent helps you get started with vibe coding. Start with something simple and then learn how to nudge the AI to make changes, fix bugs, and iterate. Abacus AI Agent is meant for full-stack apps but we will start with simple apps and front-end heavy websites. Steps: Start with a simple prompt, check out the pages that the AI built, ask the AI to make edits, when you are ready hit deploy to publish the app, get a friendly URL to share with the world. You can also host your apps on custom domains that you own.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-2",
    title: "Agent App Key Capabilities",
    content: `Database + Auth Support: Build apps with built-in database integration and secure, reliable authentication. No setup needed. LLM-Enabled Apps: Add AI chat, document Q&A, or generation features to your app. Abacus AI Agent can integrate LLMs right into the flow. Checkpointing & Deployments: Make changes, preview versions, and deploy the one you like — instantly. Iterate at the speed of thought. Custom Domain Publishing: Host your app on your own domain. Provide the domain on the Abacus AI Agent platform and complete the simple integration — your app goes live with a custom URL in minutes.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-3",
    title: "Agent App Limitations",
    content: `Abacus AI Agent works best with small to medium-sized applications. Extremely complex or enterprise-grade apps may go beyond its current capabilities. If your project involves uploading or unpacking large zip files, or building on top of pre-existing codebases, Abacus AI Agent won't be able to handle those scenarios yet. It's ideal for rapid prototyping, MVPs, and simpler full-stack apps.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-4",
    title: "Managing Your Apps",
    content: `All apps you create can be accessed and managed through the Apps Management Console. From there, you can: View and edit all your created apps, Preview apps before deploying, View database, Deploy or un-deploy apps anytime, Access version history to view or revert changes, Configure and manage custom domains.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-5",
    title: "Adding a Database",
    content: `If your app requires a database, you don't need to worry about setting one up yourself. Just mention your data needs in your prompt, and Abacus AI Agent will create the necessary database for you, including tables, fields, and sample data when needed. Once the app is created successfully, you can view/export the database from Apps Management Console or respective Abacus AI Agent conversation.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-6",
    title: "Vibe Coding Guide",
    content: `Effective Prompting: Crisp (keep your prompt clean and free from fluff), Concise (use simple language and get to the point quickly), Contextual (make sure Abacus AI Agent understands what you're trying to build). Build Iteratively with Checkpoints: Break it down into small manageable tasks, prompt the AI one task at a time, test immediately using the preview window, decide to move on or roll back. Abacus AI Agent automatically saves checkpoints (up to last 5), so you can roll back. Authentication and RBAC: Built-in support with no coding or configuration required. Just describe what you want in your prompt.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },
  {
    id: "apps-7",
    title: "Debugging Your App",
    content: `How to Debug with Abacus AI Agent: Describe the issue clearly (tell Abacus AI Agent what's going wrong and where), Copy error messages into the prompt (Abacus AI Agent can often identify and correct the issue directly), Use checkpoints to roll back (revert to a previous checkpoint and rebuild from a stable version), Always re-test after debugging (test thoroughly before moving forward). Remember: errors are part of the process. The key is to fix, test, and keep iterating with confidence.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/deepagent-apps",
    section: "Agent Apps"
  },

  // Abacus AI Desktop
  {
    id: "desktop-1",
    title: "What is Abacus AI Desktop",
    content: `Abacus AI Desktop is your all-in-one desktop AI assistant—transforming how developers and professionals interact with their desktop environment. From automating complex workflows to intelligent code assistance and seamless integration, Abacus AI Agent brings AI directly into your everyday tools. Beyond coding and debugging, it powers agentic browsing, real-time desktop listening, task automation via CoWork, and workflow automation. Ranked among the Top 3 Verified Benchmark scorers, outperforming Claude and Codex.`,
    source: "https://abacus.ai/help/abacusai-desktop/introduction",
    section: "Abacus AI Desktop"
  },
  {
    id: "desktop-2",
    title: "Abacus AI CLI",
    content: `The Abacus AI CLI brings the full power of the AI coding agent directly into your favorite terminal. Choose from top-performing AI coding models like Abacus AI Agent, Sonnet-4.5, Opus-4.5, GPT-5.1 Codex, and others. With built-in MCP integration support. Interactive Mode (REPL): abacusai. Non-Interactive Mode: abacusai -p "your question or command". First-Time Setup: /login [email]. Key Features: Multi-Model AI Access, Intelligent Code Assistance, Advanced Debugging and Error Resolution, MCP Server Integration. Interactive Commands: /stop, /exit, /clear, /new, /, /help, /sidebar, /login, /logout, /mcp.`,
    source: "https://abacus.ai/help/abacusai-desktop/introduction",
    section: "Abacus AI Desktop"
  },
  {
    id: "desktop-3",
    title: "Abacus AI VS Code Extension",
    content: `The Abacus AI Agent VS Code extension brings AI-powered coding assistance directly into Visual Studio Code. Requirements: VS Code 1.98.0+, Active Abacus AI Pro subscription. Installation: Search for "Abacus AI Agent" or "Abacus AI Dev" in VS Code Extensions Marketplace. Key Features: Multi-Model AI Integration (Claude Sonnet, Gemini Pro, and other leading models with automatic model selection), Intelligent Code Generation (transform natural language into production-ready code, generate complete functions/classes/modules with error handling and documentation), Context-Aware Assistance (understands entire project structure across multiple files, multi-file awareness and dependency tracking), Advanced Debugging (plain language explanation of errors, root cause identification, multiple fix approaches).`,
    source: "https://abacus.ai/help/abacusai-desktop/introduction",
    section: "Abacus AI Desktop"
  },
  {
    id: "desktop-4",
    title: "Abacus AI CoWork",
    content: `Abacus AI CoWork brings agentic, autonomous task execution to your desktop—extending Abacus AI Agent's power beyond coding into general knowledge work. CoWork can plan, break down, and execute complex, multi-step tasks directly on your local files without requiring terminal access or manual uploads. Key Capabilities: Direct Local File Access (read, write, organize, and transform files on your machine), Sub-Agent Coordination (complex tasks automatically decomposed into subtasks and executed in parallel), Professional Outputs (generate polished, fully editable deliverables—Excel, Word, PowerPoint, PDF), Long-Running & Scheduled Tasks (handle extended execution without timeouts, schedule recurring tasks), Browser Integration (combine local file operations with web-based workflows).`,
    source: "https://abacus.ai/help/abacusai-desktop/introduction",
    section: "Abacus AI Desktop"
  },

  // Abacus AI Listener
  {
    id: "listener-1",
    title: "What is Abacus AI Listener",
    content: `Abacus AI listener is your personal AI that can listen, see, and assist, all in real time. With its listening and screen-reading capabilities, the Listener helps you during meetings, calls, or any on-screen task. You can ask it questions directly, and it will respond based on live context from your desktop screen or the meeting/video. Whether you're coding, attending a meeting, or watching a tutorial, the Listener is always there to help. Available on macOS and Windows only.`,
    source: "https://abacus.ai/help/abacusai-desktop/abacusai_listener_how_to",
    section: "Abacus AI Listener"
  },
  {
    id: "listener-2",
    title: "Listener Setup",
    content: `Access Setup: Download/Open the Abacus AI Desktop App (macOS and Windows), launch it from either Chat Mode or Code Editor Mode, click on "Desktop Listener" to get started. Step 1: Allow Microphone Access (required for capturing audio for transcription during meetings or video playback). Step 2: Allow Screen Reading Access (uses screen reading to understand your desktop context). Once permissions are granted, your Listener is ready to assist you.`,
    source: "https://abacus.ai/help/abacusai-desktop/abacusai_listener_how_to",
    section: "Abacus AI Listener"
  },
  {
    id: "listener-3",
    title: "Listener Quick Start",
    content: `Quick Start: Click on "Listen." Play any video, join a meeting, or start speaking - you'll see real-time transcriptions appear on screen. In the chat window, ask it any question - and get instant answers from what's being said or shown. You can also access summarized insights from the live transcript in the Insights Tab. Example Prompts: With a video playing, ask it to summarize the key ideas and explain them simply. While viewing a coding problem, ask it to solve it in your preferred language and explain step by step. UI Controls: Hide or Show UI (click the eye icon), Pause or Close Session (use Pause or Close buttons anytime). Past sessions are saved in the "Your Sessions" tab for review and export.`,
    source: "https://abacus.ai/help/abacusai-desktop/abacusai_listener_how_to",
    section: "Abacus AI Listener"
  },

  // Purchase Domains
  {
    id: "domain-1",
    title: "Purchase Domain through Abacus.AI",
    content: `You can now purchase domains directly through Abacus.AI — making it a quick and hassle-free process to deploy your apps on custom URLs. Domain Purchasing lets you search, buy, and publish your Abacus.AI Apps on purchased domains directly within the platform. Features: Domain search and availability (check across popular extensions like .com, .ai, and more), One-click purchasing (buy domains directly through Abacus.AI using your credits), Automatic configuration (domains are auto-verified without manual DNS setup), WHOIS privacy protection (included by default), Custom DNS records (add A, TXT, and MX records), Automatic renewals (domains renew automatically).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/purchase-domains",
    section: "Purchase Domains"
  },
  {
    id: "domain-2",
    title: "How to Purchase a Domain",
    content: `Step 1: Click the Deploy button on your app's conversation. Step 2: Select the Custom Domains tab and choose Purchase Domain. Step 3: Search for a domain and pick one from the available results. Step 4: Complete the purchase — Abacus deducts credits from your balance. Step 5: The purchased domain is automatically configured and enters verification (may take some time). Step 6: Once verified, your domain becomes available for app deployment with no additional setup. You will be billed for the domain purchase through your Abacus credits balance.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/purchase-domains",
    section: "Purchase Domains"
  },
  {
    id: "domain-3",
    title: "Domain Renewals and Transfers",
    content: `Automatic Renewals: Domains renew automatically each year to keep your apps accessible. To disable automatic renewals, contact support@abacus.ai. Transfer Support: If you want to transfer domain ownership to someone else, write to support@abacus.ai with the details and we will facilitate the transfer.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/purchase-domains",
    section: "Purchase Domains"
  },
  {
    id: "domain-4",
    title: "Configuring Subdomains",
    content: `If you wish to use a subdomain of a domain purchased through Abacus.AI: Confirm the verification status of the domain (must be verified with Abacus). Once verified, click Add new domain and type the subdomain of your choice. Abacus will automatically create the required DNS records, and the subdomain will enter verification. After the subdomain is successfully verified, you can deploy your website on that specific subdomain.`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/purchase-domains",
    section: "Purchase Domains"
  },
  {
    id: "domain-5",
    title: "Custom DNS Records",
    content: `For domains purchased through Abacus, you can add custom DNS records: A records (point your domain/subdomain to an IP address), CNAME records (create an alias for your domain or subdomain, used for redirecting multiple domain names to a single canonical domain), TXT records (add text-based verification records for services like email authentication SPF, DKIM, DMARC), MX records (tell email servers where to deliver email for your domain, allows using custom domain email addresses like support@yourdomain.com).`,
    source: "https://abacus.ai/help/chatllm-ai-super-assistant/purchase-domains",
    section: "Purchase Domains"
  }
];

/**
 * Simple keyword-based retrieval function
 * Splits query into words and scores each chunk by how many query words appear in it
 */
export function retrieveRelevantChunks(query: string, topK: number = 5): KnowledgeChunk[] {
  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2)
    .map(w => w.replace(/[^a-z0-9]/g, ''));

  const scored = knowledgeBase.map(chunk => {
    const text = (chunk.title + " " + chunk.content).toLowerCase();
    let score = 0;
    for (const word of queryWords) {
      if (text.includes(word)) {
        score += 1;
        // Bonus for title match
        if (chunk.title.toLowerCase().includes(word)) {
          score += 2;
        }
      }
    }
    return { chunk, score };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored
    .filter(s => s.score > 0)
    .slice(0, topK)
    .map(s => s.chunk);
}
