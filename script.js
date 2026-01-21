const servicesData = [
  {
    title: "Social Media",
    icon: "message-square",
    description: "Gestão completa de redes sociais com estratégia focada em resultados",
    details: [
      "Planejamento estratégico mensal",
      "Criação de conteúdo roteirizado",
      "Gerenciamento de postagens diárias",
      "Interação com audiência",
      "Estruturação visual do feed"
    ]
  },
  {
    title: "Produção de Conteúdo",
    icon: "video",
    description: "Criação e edição profissional de vídeos e materiais visuais",
    details: [
      "Gravação de vídeos dinâmicos",
      "Edição com alta retenção",
      "Roteiros criativos",
      "Áudios virais",
      "Conteúdo otimizado"
    ]
  },
  {
    title: "Análise de Métricas",
    icon: "bar-chart-3",
    description: "Monitoramento inteligente para decisões baseadas em dados",
    details: [
      "Coleta e análise de dados",
      "Identificação de conteúdos de alto impacto",
      "Relatórios mensais",
      "Ajustes estratégicos",
      "Acompanhamento de KPIs"
    ]
  },
  {
    title: "Tráfego Pago",
    icon: "target",
    description: "Campanhas otimizadas para captação e conversão",
    details: [
      "Meta Ads",
      "Impulsionamento estratégico",
      "Captação de leads",
      "Direcionamento para WhatsApp",
      "Otimização de ROI"
    ]
  },
  {
    title: "Gestão de Site & E-commerce",
    icon: "globe",
    description: "Reestruturação e gerenciamento completo da presença digital",
    details: [
      "Redesign de interface",
      "Otimização UX",
      "Gestão de e-commerce",
      "Integração com redes sociais",
      "Manutenção contínua"
    ]
  }
];


const servicesContainer = document.getElementById("services");

servicesData.forEach((service, index) => {
  const card = document.createElement("div");
  card.className =
    "bg-slate-800 border border-slate-700 rounded-xl p-6 min-h-[260px] flex flex-col justify-between";

  card.innerHTML = `
    <div>
      <div class="flex items-start gap-4 mb-4">
        <div class="text-blue-400">
          <i data-lucide="${service.icon}" class="w-8 h-8"></i>
        </div>
        <div>
          <h4 class="text-lg md:text-xl font-semibold">${service.title}</h4>
          <p class="text-slate-400 text-sm mt-1">${service.description}</p>
        </div>
      </div>

      <ul class="details hidden mt-4 space-y-2 border-t border-slate-700 pt-4">
        ${service.details
          .map(detail => `<li class="text-slate-300 text-sm">• ${detail}</li>`)
          .join("")}
      </ul>
    </div>

    <button
      class="toggle-btn mt-6 w-full bg-slate-700 hover:bg-slate-600
             text-white text-sm font-semibold py-2 rounded-lg
             flex items-center justify-center gap-2 transition"
    >
      Ver detalhes
    </button>
  `;

  servicesContainer.appendChild(card);
});

const portfolio = [
  { name: "Prime Printers", url: "primeprinters.com.br" },
  { name: "Portal das Malas", url: "portaldasmalas.com.br" },
  { name: "Napoli Descartáveis", url: "lojanapolidescartaveis.com.br" }
];

const portfolioContainer = document.getElementById("portfolio");

portfolio.forEach(project => {
  const card = document.createElement("div");

  card.className = `
    bg-slate-800/50 backdrop-blur
    border border-slate-700 rounded-xl p-6
    hover:border-cyan-500 hover:scale-105
    transition-all duration-300
  `;

  card.innerHTML = `
    <div class="text-cyan-400 mb-4">
      <i data-lucide="globe" class="w-10 h-10"></i>
    </div>

    <h4 class="text-lg font-semibold mb-2">${project.name}</h4>

    <a
      href="https://${project.url}"
      target="_blank"
      class="text-cyan-400 hover:text-cyan-300 text-sm"
    >
      ${project.url} →
    </a>
  `;

  portfolioContainer.appendChild(card);
});

lucide.createIcons();

/* Toggle detalhes */
document.querySelectorAll(".toggle-btn").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.closest("div").querySelector(".details");

    details.classList.toggle("hidden");
    button.innerText = details.classList.contains("hidden")
      ? "Ver detalhes"
      : "Ver menos";
  });
});

