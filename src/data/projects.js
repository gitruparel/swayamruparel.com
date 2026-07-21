export const projects = [
  {
    id: "testready",
    name: "TestReady.in",
    category: "Flagship Product",
    status: "Live • In Production",
    statusType: "live", // 'live' | 'production' | 'progress' | 'maintained' | 'archived'
    isFlagship: true,
    oneLiner: "Intelligent quantitative strategy research platform for options traders.",
    problem: "Retail options traders in India suffer from fragmented tools. Validating multi-leg options strategies requires writing manual Python scripts or paying for expensive institutional software without real-time execution bridges.",
    solution: "Built a production-grade, end-to-end quantitative workspace combining strategy design, multi-year tick backtesting, risk analytics, and automated broker execution.",
    impact: "Currently deployed and actively used in production by traders to evaluate strategy risk metrics and automate live order executions.",
    architecture: "Built with a responsive React and TypeScript frontend utilizing ApexCharts for high-density rendering. Backend is a modular Flask engine handling strategy parsing, tick replay, and direct order routing via Py5Paisa API integration.",
    builtWith: ["React", "TypeScript", "Python", "Flask", "Py5Paisa API", "ApexCharts", "TailwindCSS"],
    majorFeatures: [
      "Strategy Workspace: Visual drag-and-drop interface for designing multi-leg options strategies.",
      "Historical Backtesting Engine: Replays multi-year historical tick data to validate strategy rules.",
      "Performance Analytics: Real-time calculation of profit curves, drawdown profiles, Sharpe ratio, and risk metrics.",
      "Strategy Intelligence: AI-assisted pattern isolation to pinpoint win/loss variance factors.",
      "Broker Integration: Seamless order execution and position tracking via Py5Paisa APIs."
    ],
    challenges: [
      "Designing a memory-efficient caching layer in Python for processing multi-gigabyte historical option tick files without memory spikes.",
      "Building a resilient API rate-limiting wrapper around broker REST endpoints to prevent thread locks during peak market volatility."
    ],
    futureRoadmap: "Multi-broker API support, real-time strategy anomaly alerts, and execution sub-50ms latency optimizations.",
    timeline: "2025 – Present",
    liveUrl: "https://testready.in",
    githubUrl: null,
    image: "/projects/dashboard.png",
    browserFrameTitle: "testready.in — Quantitative Options Workspace",
    // Extensible slots for future diagrams & research paper
    architectureDiagram: null,
    paperUrl: null,
    paperBadge: null
  },
  {
    id: "dept-internship",
    name: "Department Internship Project",
    category: "Institutional Engineering",
    status: "In Progress",
    statusType: "progress",
    isFlagship: true,
    organization: "Department Operations / FCRIT",
    oneLiner: "Engineering automation & operational tracking portal for academic department workflows.",
    problem: "Departmental tracking relied on manual data entry and unverified spreadsheets, causing data inconsistencies and operational bottlenecks across faculty and student workflows.",
    solution: "Developing a centralized, role-aware engineering management system with automated data ingestion, audit logging, and dashboard analytics.",
    impact: "Streamlining administrative processing and data accuracy across department operational pipelines under academic supervision.",
    architecture: "Modular full-stack architecture with role-based access control (RBAC), background job queues, and structured relational persistence.",
    builtWith: ["Python", "JavaScript", "SQL", "REST API", "TailwindCSS"],
    majorFeatures: [
      "Automated Data Ingestion: Streamlines operational data collection across department pipelines.",
      "Role-Based Access Control: Granular security boundaries for admin, faculty, and student roles.",
      "Audit Logging & Reporting: Real-time generation of compliance reports and activity metrics."
    ],
    challenges: [
      "// TODO: Benchmarking module performance under concurrent submission loads.",
      "Structuring a scalable database schema to handle multi-semester records cleanly."
    ],
    futureRoadmap: "// TODO: Document full integration phase details.",
    timeline: "2025 – Present",
    liveUrl: null,
    githubUrl: null,
    image: "/projects/dashboard.png",
    browserFrameTitle: "dept-portal.internal — Engineering Operations System",
    architectureDiagram: null,
    paperUrl: null,
    paperBadge: null
  },
  {
    id: "smart-bedroom-hub",
    name: "Smart Bedroom Hub",
    category: "IoT & Cloud Systems",
    status: "Maintained",
    statusType: "maintained",
    isFlagship: false,
    oneLiner: "Hardware-repurposed home automation gateway with Cloudflare, Telegram & Siri control.",
    problem: "Legacy home appliances lack Wi-Fi interfaces. Commercial smart plugs add latency, require proprietary cloud bridges, and dedicated hardware like Raspberry Pi is an unnecessary expense.",
    solution: "Repurposed an old Android phone (Redmi Note 5 Pro) into an always-on IR smart gateway supporting Siri Shortcuts, Telegram Bot commands, and WebRTC streaming.",
    impact: "Deployed in daily personal use for 6+ months with sub-second AC command execution and zero hardware cost.",
    architecture: "Cloudflare Worker edge API routes commands via Firebase Realtime Database to a background Android service, which invokes native IR daemon calls.",
    builtWith: ["IoT", "Android", "Cloudflare Workers", "Firebase", "WebRTC", "Telegram API", "Siri Shortcuts"],
    majorFeatures: [
      "Multi-Interface Control: Trigger AC modes via Siri Shortcuts, Telegram Bot commands, or Web Dashboards.",
      "Cloudflare Edge Worker API: Low-latency webhook endpoint handling authentication and command validation.",
      "Firebase Realtime Signaling: Sub-100ms message synchronization between cloud and Android hardware.",
      "WebRTC Camera Streaming: Remote live video feed from phone's camera for room security."
    ],
    challenges: [
      "Writing a persistent background daemon in Android that bypasses OS battery optimization to guarantee 99.9% uptime.",
      "Decoding raw hex timing patterns for proprietary IR AC remotes."
    ],
    timeline: "2024 – 2025",
    liveUrl: null,
    githubUrl: "https://github.com/gitruparel",
    image: "/projects/dashboard.png",
    browserFrameTitle: "smart-hub.local — IoT Gateway Console",
    gridSpan: "span-2-desktop", // CSS Grid sizing modifier
    architectureDiagram: null,
    paperUrl: null,
    paperBadge: null
  },
  {
    id: "medsync",
    name: "MedSync",
    category: "Mobile Healthcare",
    status: "Completed",
    statusType: "maintained",
    isFlagship: false,
    oneLiner: "Cross-platform healthcare management system with multi-role sync & IEEE paper.",
    problem: "Healthcare clinics struggle with fragmented patient records, paper-based prescriptions, and communication delays between patients and providers.",
    solution: "Built a cross-platform mobile ecosystem in a team of 4, centralizing appointment scheduling, prescription logs, and medical records with offline-first synchronization.",
    impact: "Published a co-authored IEEE research paper documenting system architecture and clinical use-cases at ICCUBEA 2025.",
    architecture: "React Native frontend with Firebase backend. Utilizes Firestore security rules and local disk persistence for seamless offline sync.",
    builtWith: ["React Native", "Firebase", "Firestore", "IEEE Publication"],
    majorFeatures: [
      "Multi-Role Workflows: Tailored interfaces for Patients, Doctors, and Admins.",
      "Real-Time Record Sync: Instant updates for prescriptions and lab results.",
      "Offline-First Engine: Disk caching ensures access to vital medical logs without network."
    ],
    challenges: [
      "Designing granular Firestore security rules to strictly isolate patient medical histories.",
      "Co-authoring an IEEE research paper detailing scheduling algorithms."
    ],
    timeline: "2024 – 2025",
    liveUrl: null,
    githubUrl: "https://github.com/gitruparel/MedSync",
    image: "/projects/medsync.png",
    browserFrameTitle: "medsync-app.preview — Healthcare Platform",
    gridSpan: "span-1-desktop",
    architectureDiagram: null,
    paperUrl: "#",
    paperBadge: "IEEE Published Paper (ICCUBEA 2025)"
  },
  {
    id: "f1-strategy-simulator",
    name: "F1 Strategy Simulator",
    category: "Physics Simulation Engine",
    status: "Completed",
    statusType: "maintained",
    isFlagship: false,
    oneLiner: "Physics-based Formula 1 race strategy engine with tyre degradation models.",
    problem: "Formula 1 race strategy decisions require balancing nonlinear tyre degradation, pit-stop time loss, and dynamic track evolution in real-time.",
    solution: "Engineered a physics-driven strategy engine that calculates optimal pit-stop sequences and compound allocations based on degradation curves.",
    impact: "Accurately models multi-stop strategies with telemetry inputs, demonstrating mathematical simulation capabilities.",
    architecture: "Vanilla JavaScript simulation core backed by a Node.js and Express API proxy fetching live Ergast F1 telemetry while bypassing CORS limits.",
    builtWith: ["JavaScript", "Node.js", "Express", "Physics Simulation"],
    majorFeatures: [
      "Tyre Degradation Engine: Mathematical decay curves modeling performance drop-offs.",
      "Stint Optimization: Calculates total race time across 1-stop, 2-stop, and dynamic strategies.",
      "Live Telemetry Proxy: Server proxy caching Ergast API telemetry responses."
    ],
    challenges: [
      "Formulating exponential degradation curves that accurately penalize over-extended stints.",
      "Creating a lightweight server proxy to handle strict CORS headers."
    ],
    timeline: "2025",
    liveUrl: null,
    githubUrl: "https://github.com/gitruparel/f1-strategy-simulator",
    image: "/projects/f1_sim.png",
    browserFrameTitle: "f1-sim.engine — Strategy Simulator",
    gridSpan: "span-1-desktop",
    architectureDiagram: null,
    paperUrl: null,
    paperBadge: null
  },
  {
    id: "shatterblocks",
    name: "ShatterBlocks",
    category: "Low-Level Systems / C",
    status: "Completed",
    statusType: "maintained",
    isFlagship: false,
    oneLiner: "Retro brick breaker game built from scratch in C using SDL2 graphics & audio buffers.",
    problem: "Commercial game engines abstract away fundamental computer science concepts like raw memory allocation, collision physics, and frame rendering.",
    solution: "Wrote a complete arcade game entirely in C, managing pixel buffers, sound streams, and collision vectors manually through SDL2.",
    impact: "Demonstrated deep low-level system understanding, memory management rigor, and zero-dependency C programming.",
    architecture: "Pure C codebase with SDL2 for graphics rendering, SDL_mixer for audio streams, and custom math routines for AABB collision physics.",
    builtWith: ["C", "SDL2", "SDL_mixer", "Memory Management"],
    majorFeatures: [
      "Custom Game Loop: Fixed 60 FPS timestep loop ensuring physics precision.",
      "AABB Collision System: Pixel-accurate collision detection and reflection math.",
      "Manual Memory Pipeline: Zero dynamic memory leaks or buffer overflows."
    ],
    challenges: [
      "Implementing precise collision reflection vectors so ball bounces feel natural at high velocities.",
      "Managing pointer memory lifecycle manually in C."
    ],
    timeline: "2024",
    liveUrl: null,
    githubUrl: "https://github.com/gitruparel/ShatterBlocks",
    image: "/projects/shatterblocks.png",
    browserFrameTitle: "shatterblocks.c — Low-Level C Game Engine",
    gridSpan: "span-1-desktop",
    architectureDiagram: null,
    paperUrl: null,
    paperBadge: null
  }
];
