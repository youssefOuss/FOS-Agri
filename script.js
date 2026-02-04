const services = [
  {
    id: 1,
    title: "API Development",
    icon: "Code2",
    span: "row-span-2",
    link: "api-development.html",
    background: "#dcd4eb"
  },
  {
    id: 2,
    title: "Database Design",
    description: "Design and optimize databases for performance and reliability",
    icon: "Database",
    span: "row-span-4 col-start-1 row-start-3",
    link: "database-design.html",
    background: "#f5f7fa"
  },
  {
    id: 3,
    title: "Security & Auth",
    description: "Implement industry-standard authentication and security protocols",
    icon: "Lock",
    span: "row-span-3 col-start-2 row-start-1",
    link: "security-auth.html",
    background: "#eef6f3"
  },
  {
    id: 4,
    title: "Real-Time Features",
    description: "Build real-time applications with WebSocket integration",
    icon: "Zap",
    span: "row-span-3 col-start-2 row-start-4",
    link: "real-time-features.html",
    background: "#fff4ec"
  },
  {
    id: 5,
    title: "Analytics & Insights",
    description: "Create comprehensive analytics dashboards and reporting tools",
    icon: "BarChart3",
    span: "row-span-3 col-start-3 row-start-1",
    link: "analytics-insights.html",
    background: "#f0f4ff"
  },
  {
    id: 6,
    title: "Workflow Automation",
    description: "Automate complex business processes and workflows",
    icon: "Workflow",
    span: "row-span-3 col-start-3 row-start-4",
    link: "workflow-automation.html",
    background: "#f3faf7"
  },
  {
    id: 7,
    title: "Cloud Infrastructure",
    description: "Deploy and manage cloud-based applications",
    icon: "Cloud",
    span: "row-span-2 col-start-4 row-start-1",
    link: "cloud-infrastructure.html",
    background: "#eef2f7"
  },
  {
    id: 8,
    title: "DevOps Solutions",
    description: "Streamline deployment, monitoring, and maintenance",
    icon: "Settings",
    span: "row-span-4 col-start-4 row-start-3",
    link: "devops-solutions.html",
    background: "#f8f8f8"
  }
];

const servicesGrid = document.getElementById("servicesGrid");

services.forEach(service => {
  const wrapper = document.createElement("div");
  wrapper.className = service.span;

  const card = document.createElement("div");

  card.style.backgroundColor = service.background;

  card.className = `
    relative overflow-hidden rounded-2xl
    border border-gray-200
    transition-all duration-300
    flex flex-col justify-between
    group cursor-pointer
    p-8 h-full
  `;

  if (service.id === 1) {
    card.className += " overflow-visible items-center pt-20 text-center";
    card.innerHTML = `
      <div class="absolute -top-12 left-1/2 -translate-x-1/2 z-20
                  w-24 h-24 bg-white border rounded-full
                  flex items-center justify-center">
        <i data-lucide="${service.icon}" class="w-12 h-12 text-gray-700"></i>
      </div>
      <h3 class="text-xl font-semibold">${service.title}</h3>
    `;
  } else {
    card.innerHTML = `
      <div class="flex justify-end mb-4">
        <a href="${service.link}"
           class="p-3 border rounded-full hover:bg-gray-100 transition"
           aria-label="${service.title}">
          <i data-lucide="plus" class="w-5 h-5"></i>
        </a>
      </div>

      <div>
        <div class="mb-6 inline-flex p-3 rounded-lg ">
          <i data-lucide="${service.icon}" class="w-6 h-6 text-gray-700"></i>
        </div>
        <h3 class="text-xl font-semibold mb-2">${service.title}</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          ${service.description}
        </p>
      </div>
    `;
  }

  wrapper.appendChild(card);
  servicesGrid.appendChild(wrapper);
});

// Initialize lucide icons
lucide.createIcons();