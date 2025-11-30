import {
  applyLanguage,
  applyTheme,
  techsArray,
  updateFlag,
  renderPrincipalHeader,
  renderContacts,
  loadInlineSvg
} from "../default.js";

const textProjectPt = {
  Titles: {
    TCCs: "Projetos Integradores",
    Academic: "Projetos Acadêmicos"
  },
  TCCs: [
    {
      title: "Clara",
      time: "2025-2",
      srcPreview: "https://www.youtube.com/watch?v=0mF5On5caEI",
      altPreview: "6º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_6",
      selectTechs: [
        "Python",
        "Flutter",
        "Git",
        "Figma",
        "Typescript",
        "Postgres"
      ],
      descProjectVision: "O objetivo do projeto é desenvolver um sistema de busca semântica, a partir da dataset fornecido pelo cliente Dom Rock, capaz de interpretar e responder perguntas dos usuários por meio de um agente de inteligência artificial integrado ao chat interativo. Além disso, deverá ter a funcionalidade de enviar um boletim, baseado no modelo fornecido pelo cliente, gerado pela ia com os dados de um dado período do dataset diretamente a um email.",
      descPersonalContributions: "Como Scrum Master, conduzi as cerimônias ágeis garantindo comunicação clara e eficiente entre os membros da equipe, removendo impedimentos que poderiam comprometer o andamento do projeto e mantendo a documentação sempre atualizada. Utilizando o Shortcut, organizei as descrições das tarefas e suas conexões de forma objetiva antes do início da sprint. Além disso, atuei no desenvolvimento tanto no backend quanto no frontend, contribuindo para a implementação das telas de listagem e cadastro de usuários, bem como para a criação de mecanismos de restrição do agente de IA em relação às perguntas sobre o dataset fornecido pelo cliente.",
      partners: [
        "Dom Rock",
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Bruno Serpa - Scrum Master",
        "Caique Silva - Product Owner",
        "Katiane Soares - Scrum Team",
        "Marcus Betti - Scrum Team",
        "Mariana Izumi - Scrum Team",
        "Maria Gabriela - Scrum Team",
        "Rafael Nunes - Scrum Team",
        "Silmara Bittencourt - Scrum Team"
      ]
    },
    {
      title: "OMNI",
      time: "2025-1",
      srcPreview: "../assets/api5.gif",
      altPreview: "5º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_5",
      selectTechs: [
        "Python",
        "React Native",
        "Git",
        "Arduino",
        "Figma",
        "TypeScript",
        "Express",
        "Postgres"
      ],
      descProjectVision: "O objetivo do projeto é desenvolver uma plataforma que possibilite a criação e gerenciamento de agentes de Inteligência Artificial focados em atendimento interno. Esses agentes serão personalizados para responder questionamentos específicos, enquanto um sistema de permissões garante que cada usuário só tenha acesso aos agentes autorizados. Além disso, o projeto envolve a integração com um banco de dados na nuvem para armazenar o histórico de interações e a criação de um aplicativo móvel que facilite a comunicação via chat, entregando respostas rápidas e precisas às dúvidas dos usuários.",
      descPersonalContributions: "Como Product Owner, atuei na definição de requisitos e priorização das entregas, alinhando o time com os objetivos do projeto. No desenvolvimento, contribuí na implementação da responsividade no front-end e na construção de serviços back-end, como deletar usuários, atualizar e excluir agentes de IA.",
      partners: [
        "Pro4Tech",
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Bruno Serpa - Product Owner",
        "Marcus Betti - Scrum Master",
        "Katiane Soares - Scrum Team",
        "Mariana Izumi - Scrum Team",
        "Maria Gabriela - Scrum Team",
        "Rafael Nunes - Scrum Team",
        "Silmara Bittencourt - Scrum Team"
      ]
    },
    {
      title: "Projeto Tecsus",
      time: "2024-2",
      srcPreview: "../assets/api4.gif",
      altPreview: "4º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_4",
      selectTechs: [
        "Typescript",
        "React",
        "Git",
        "Arduino",
        "Express",
        "Postgres",
        "Cassandra",
        "Figma"
      ],
      descProjectVision: "O projeto Tecsus tem como objetivo desenvolver um sistema de monitoramento ambiental para prever e mitigar desastres naturais por meio da geração de alertas em tempo real. A solução utiliza sensores estrategicamente posicionados para coleta de dados, que são processados por um sistema inteligente capaz de identificar condições de risco iminente.",
      descPersonalContributions: "Como integrante da equipe de desenvolvimento, atuei principalmente no back-end, desenvolvendo e otimizando funções em TypeScript e Express para manipulação de dados e integração com o banco de dados. Além disso, fui responsável pela modelagem do banco de dados relacional em PostgreSQL, estruturando tabelas e definindo relações que garantiram a integridade e escalabilidade das informações. Também desempenhei um papel ativo na integração de sistemas para processamento de dados em tempo real e supervisionei o controle de qualidade (QA) no DevOps, validando a estabilidade da aplicação e sugerindo melhorias antes do deploy.",
      partners: [
        "Tecsus",
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Mariana Izumi - Product Owner",
        "Rafael Nunes - Scrum Master",
        "Bruno Serpa - Scrum Team",
        "Katiane Soares - Scrum Team",
        "Marcus Betti - Scrum Team",
        "Maria Gabriela - Scrum Team",
        "Silmara Bittencourt - Scrum Team"
      ]
    },
    {
      title: "CRTL A",
      time: "2024-1",
      srcPreview: "../assets/api3.mp4",
      altPreview: "3º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_3",
      selectTechs: [
        "Figma",
        "Git",
        "Typescript",
        "Java",
        "Postgres",
        "React",
        "Spring"
      ],
      descProjectVision: "O projeto CRTL A foi desenvolvido com o objetivo de facilitar a gestão de ativos corporativos. A solução permite acompanhar a alocação de ativos, monitorar manutenções programadas e registrar históricos detalhados de uso e movimentação, proporcionando maior controle e eficiência na administração dos recursos da empresa.",
      descPersonalContributions: "Atuei como membro da equipe de desenvolvimento, com foco principal no front-end. Minhas responsabilidades incluíram a criação de interfaces de usuário eficientes, responsivas e alinhadas aos princípios de design centrado no usuário, utilizando React e TypeScript. Também colaborei na integração das interfaces com as APIs desenvolvidas pela equipe back-end, garantindo a funcionalidade e usabilidade do sistema.",
      partners: [
        "Youtan",
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Katiane Soares - Product Owner",
        "Caique Silva - Scrum Master",
        "Bruno Serpa - Scrum Team",
        "Marcus Betti - Scrum Team",
        "Maria Gabriela - Scrum Team",
        "Mariana Izumi - Scrum Team",
        "Rafael Nunes - Scrum Team",
        "Silmara Bittencourt - Scrum Team"
      ]
    },
    {
      title: "HERMEZ",
      time: "2023-2",
      srcPreview: "../assets/api2.gif",
      altPreview: "2º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_2",
      selectTechs: [
        "Figma",
        "Git",
        "Javascript",
        "Mysql",
        "React"
      ],
      descProjectVision: "O projeto HERMEZ foi idealizado para desenvolver um sistema robusto de Gerenciamento de Chamados de Serviços. A solução oferece funcionalidades para planejamento, acompanhamento e controle de chamados, além de possibilitar a geração de relatórios analíticos detalhados, auxiliando na tomada de decisões estratégicas e operacionais.",
      descPersonalContributions: "Como membro da equipe de desenvolvimento, fui responsável por implementar funcionalidades no front-end, utilizando React e JavaScript para criar interfaces de usuário interativas, eficientes e responsivas. Também colaborei na integração do front-end com o back-end, assegurando a comunicação eficiente entre as partes. Além disso, atuei no aprimoramento da experiência do usuário por meio de soluções criativas que garantiram uma navegação intuitiva e funcional.",
      partners: [
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Gabriel Lucena do Rosário - Product Owner",
        "Pedro Augusto N. Silva - Scrum Master",
        "Bruno Serpa - Scrum Team",
        "Caique Silva - Scrum Team",
        "Mariana Izumi - Scrum Team",
        "Rafael Nunes - Scrum Team"
      ]
    },
    {
      title: "CICLOVALE",
      time: "2023-1",
      srcPreview: "../assets/api1.gif",
      altPreview: "1º Semestre",
      linkProject: "https://github.com/BrunoSerpa/API_1",
      selectTechs: [
        "Figma",
        "Git",
        "Python",
        "Flask",
        "HTML",
        "CSS",
        "Mysql"
      ],
      descProjectVision: "O CICLOVALE (Central Informativa de COVID Longa do Vale do Paraíba) é uma plataforma desenvolvida para atender jornalistas que buscam informações detalhadas e comparativas sobre os efeitos de longo prazo da COVID-19. A solução oferece acesso facilitado e interativo a dados públicos do Sistema Único de Saúde (SUS), destacando o impacto da COVID longa na região do Vale do Paraíba. Diferentemente de outras iniciativas, o CICLOVALE prioriza a usabilidade e a interatividade na apresentação dos dados.",
      descPersonalContributions: "Como Scrum Master, facilitei as cerimônias ágeis, promovendo uma comunicação clara e ágil dentro da equipe, além de remover impedimentos que poderiam atrasar o progresso do projeto. Atuei como ponte entre os integrantes, auxiliando na colaboração técnica e organizacional, e mantive a documentação atualizada para garantir clareza e alinhamento de todos. Também desempenhei um papel essencial no desenvolvimento do front-end, criando interfaces modernas e responsivas com foco na experiência do usuário.",
      partners: [
        "Vanguarda",
        "Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal"
      ],
      team: [
        "Caique Silva - Product Owner",
        "Bruno Serpa - Scrum Master",
        "Diego José da Conceição - Scrum Team",
        "Gabriel Lucena do Rosário - Scrum Team",
        "João Gabriel Alves Silva - Scrum Team",
        "Nathalia Ellen Domingos - Scrum Team",
        "Pedro Augusto N. Silva - Scrum Team",
        "Rafael Nunes - Scrum Team"
      ]
    }
  ],
  Academic: []
};

const textProjectEn = {
  Titles: {
    TCCs: "Integrative Projects",
    Academic: "Academic Projects"
  },
  TCCs: [
    {
      ...textProjectPt.TCCs[0],
      altPreview: "6th Semester",
      descProjectVision: "The goal of the project is to develop a semantic search system, based on the dataset provided by the client Dom Rock, capable of interpreting and answering user questions through an artificial intelligence agent integrated into an interactive chat. In addition, it should include the functionality of sending a bulletin, based on the template provided by the client, generated by the AI with data from a given period of the dataset directly to an email.",
      descPersonalContributions: "As Scrum Master, I facilitated agile ceremonies ensuring clear and efficient communication among team members, removed impediments that could hinder project progress, and kept documentation consistently updated. Using Shortcut, I organized task descriptions and their connections in an objective manner before the start of the sprint. Furthermore, I contributed to development in both backend and frontend, implementing user listing and registration screens, as well as creating mechanisms to restrict the AI agent from answering questions related to the dataset provided by the client.",
      partners: [
        "Dom Rock",
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    },
    {
      ...textProjectPt.TCCs[1],
      altPreview: "5th Semester",
      descProjectVision: "The objective of the project is to develop a platform that enables the creation and management of Artificial Intelligence agents focused on internal support. These agents are customized to answer specific questions, while a permissions system ensures that each user only has access to authorized agents. In addition, the project involves integration with a cloud database to store interaction history and the development of a mobile application that facilitates communication via chat, delivering quick and accurate responses to users' inquiries.",
      descPersonalContributions: "As Product Owner, I worked on defining requirements and prioritizing deliveries, aligning the team with the project's objectives. In development, I contributed to implementing responsiveness on the front-end and building back-end services, such as deleting users, updating, and removing AI agents.",
      partners: [
        "Pro4tech",
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    },
    {
      ...textProjectPt.TCCs[2],
      title: "Tecsus Project",
      altPreview: "4th Semester",
      descProjectVision: "The Tecsus project aims to develop an environmental monitoring system to predict and mitigate natural disasters by generating real-time alerts. The solution uses strategically positioned sensors to collect data, which is processed by an intelligent system capable of identifying imminent risk conditions.",
      descPersonalContributions: "As a member of the development team, I primarily worked on the back-end, developing and optimizing functions in TypeScript and Express for data manipulation and database integration. Additionally, I was responsible for modeling the relational database in PostgreSQL, structuring tables, and defining relationships that ensured data integrity and scalability. I also played an active role in integrating systems for real-time data processing and supervised quality control (QA) in DevOps, validating application stability and suggesting improvements before deployment.",
      partners: [
        "Tecsus",
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    },
    {
      ...textProjectPt.TCCs[3],
      altPreview: "3rd Semester",
      descProjectVision: "The CRTL A project was developed to facilitate corporate asset management. The solution allows tracking asset allocation, monitoring scheduled maintenance, and recording detailed usage and movement histories, providing greater control and efficiency in resource management.",
      descPersonalContributions: "I worked as a member of the development team, primarily focusing on the front-end. My responsibilities included creating efficient, responsive user interfaces aligned with user-centered design principles using React and TypeScript. I also collaborated on integrating the interfaces with the back-end APIs developed by the team, ensuring system functionality and usability.",
      partners: [
        "Youtan",
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    },
    {
      ...textProjectPt.TCCs[4],
      altPreview: "2nd Semester",
      descProjectVision: "The HERMEZ project was designed to develop a robust Service Call Management system. The solution offers functionalities for planning, tracking, and controlling service calls, as well as generating detailed analytical reports to assist in strategic and operational decision-making.",
      descPersonalContributions: "As a member of the development team, I was responsible for implementing front-end functionalities using React and JavaScript to create interactive, efficient, and responsive user interfaces. I also collaborated on integrating the front-end with the back-end, ensuring efficient communication between the parts. Additionally, I worked on enhancing the user experience through creative solutions that ensured intuitive and functional navigation.",
      partners: [
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    },
    {
      ...textProjectPt.TCCs[5],
      altPreview: "1st Semester",
      descProjectVision: "CICLOVALE (Informative Center for Long COVID in the Paraíba Valley) is a platform developed to assist journalists seeking detailed and comparative information on the long-term effects of COVID-19. The solution offers easy and interactive access to public data from the Unified Health System (SUS), highlighting the impact of long COVID in the Paraíba Valley region. Unlike other initiatives, CICLOVALE prioritizes usability and interactivity in data presentation.",
      descPersonalContributions: "As Scrum Master, I facilitated agile ceremonies, promoting clear and agile communication within the team, and removing impediments that could delay project progress. I acted as a bridge between team members, assisting in technical and organizational collaboration, and kept documentation up to date to ensure clarity and alignment for all. I also played a key role in front-end development, creating modern and responsive interfaces focused on user experience.",
      partners: [
        "Vanguarda",
        "Faculty of Technology of São José dos Campos - Prof. Jessen Vidal"
      ]
    }
  ],
  Academic: []
};

const textProjectItemPt = {
  titleTechnologies: "Tecnologias",
  titleVision: "Visão do Projeto",
  titleContributions: "Contribuições Pessoais",
  titlePartners: "Parceria",
  titleTeam: "Equipe",
  titleButton: "Veja o projeto"
};

const textProjectItemEn = {
  titleTechnologies: "Technologies",
  titleVision: "Project's Vision Vision",
  titleContributions: "Personal Contributions",
  titlePartners: "Partnership",
  titleTeam: "Team",
  titleButton: "View project"
};

async function createProjectItem(projectData, idProject) {
  const project = document.createElement("div");
  project.className = "project-item";

  const preview = document.createElement("div");
  preview.className = "preview-project";

  const titlePrincipal = document.createElement("h1");
  titlePrincipal.textContent = `${projectData.title} (${projectData.time})`;
  preview.appendChild(titlePrincipal);

  if (/.(mp4|webm|ogg)(?:$)/i.test(projectData.srcPreview)) {
    const video = document.createElement("video");
    video.className = "video-preview";

    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = "auto";

    const ext = projectData.srcPreview.split('.').pop().toLowerCase();
    const type = {
      mp4: "video/mp4",
      webm: "video/webm",
      ogg: "video/ogg"
    }[ext] || "video/mp4";

    const src = document.createElement("source");
    src.src = projectData.srcPreview;
    src.type = type;
    video.appendChild(src);

    video.addEventListener("loadeddata", () => {
      video.play().catch(() => {
        video.controls = true;
      });
    });

    preview.appendChild(video);
  } else if (/youtube\.com|youtu\.be/.test(projectData.srcPreview)) {
    const iframe = document.createElement("iframe");
    iframe.className = "video-preview";
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = projectData.srcPreview.replace("watch?v=", "embed/");
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    preview.appendChild(iframe);
  } else {
    const img = document.createElement("img");
    img.className = "image-preview";

    img.src = projectData.srcPreview;
    img.alt = projectData.altPreview;
    preview.appendChild(img);
  }

  if (projectData.linkProject) {
    const linkProject = document.createElement("a");
    linkProject.className = "link-project";
    linkProject.href = projectData.linkProject;
    linkProject.textContent = projectData.titleButton;
    linkProject.target = "_blank";
    preview.appendChild(linkProject);
  }

  project.appendChild(preview);

  const conteudoProject = document.createElement("div");
  conteudoProject.className = "content-project";

  const menu = document.createElement("div");
  menu.className = "menu-project";

  if (projectData.selectTechs) {
    const link = document.createElement("a");
    link.id = "icon-tech";
    link.dataset.target = `tech${idProject}`;
    link.appendChild(
      await loadInlineSvg('../assets/IconTechs.svg', { width: 30, height: 30 })
    )

    const title = document.createElement("h1");
    title.textContent = projectData.titleTechnologies;
    link.appendChild(title);
    menu.appendChild(link);
  }
  if (projectData.descProjectVision) {
    const link = document.createElement("a");
    link.dataset.target = `vision${idProject}`;
    link.appendChild(
      await loadInlineSvg('../assets/IconLight.svg', { width: 30, height: 30 })
    )

    const title = document.createElement("h1");
    title.textContent = projectData.titleVision;
    link.appendChild(title);
    menu.appendChild(link);
  }
  if (projectData.descPersonalContributions) {
    const link = document.createElement("a");
    link.dataset.target = `contributions${idProject}`;
    link.appendChild(
      await loadInlineSvg('../assets/IconPerson.svg', { width: 30, height: 30 })
    )

    const title = document.createElement("h1");
    title.textContent = projectData.titleContributions;
    link.appendChild(title);
    menu.appendChild(link);
  }
  if (projectData.partners) {
    const link = document.createElement("a");
    link.dataset.target = `partners${idProject}`;
    link.appendChild(
      await loadInlineSvg('../assets/IconAssociation.svg', { width: 30, height: 30 })
    )

    const title = document.createElement("h1");
    title.textContent = projectData.titlePartners;
    link.appendChild(title);
    menu.appendChild(link);
  }
  if (projectData.team) {
    const link = document.createElement("a");
    link.dataset.target = `team${idProject}`;
    link.appendChild(
      await loadInlineSvg('../assets/IconTeam.svg', { width: 30, height: 30 })
    )

    const title = document.createElement("h1");
    title.textContent = projectData.titleTeam;
    link.appendChild(title);
    menu.appendChild(link);
  }
  conteudoProject.appendChild(menu);

  if (projectData.selectTechs) {
    const techs = document.createElement("div");
    techs.className = "item-data-project";
    techs.id = `tech${idProject}`;

    const title = document.createElement("h1");
    title.textContent = projectData.titleTechnologies;
    techs.appendChild(title);

    const techsList = document.createElement("div");
    techsList.className = "data-techs";

    for (const techAlt of projectData.selectTechs) {
      const tech = techsArray.find(t => t.title === techAlt);
      if (tech) {
        const techItem = document.createElement("div");
        techItem.className = "tech-item";
        techItem.appendChild(await loadInlineSvg(tech.src, { width: 30, height: 30 }));
        const t = document.createElement("h1");
        t.textContent = tech.title;
        techItem.appendChild(t);
        techsList.appendChild(techItem);
      }
    }
    techs.appendChild(techsList);

    conteudoProject.appendChild(techs);
  }
  if (projectData.descProjectVision) {
    const vision = document.createElement("div");
    vision.className = "item-data-project";
    vision.id = `vision${idProject}`;

    const title = document.createElement("h1");
    title.textContent = projectData.titleVision;
    vision.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = projectData.descProjectVision;
    vision.appendChild(desc);

    conteudoProject.appendChild(vision);
  }
  if (projectData.descPersonalContributions) {
    const personal = document.createElement("div");
    personal.className = "item-data-project";
    personal.id = `contributions${idProject}`;

    const title = document.createElement("h1");
    title.textContent = projectData.titleContributions;
    personal.appendChild(title);

    const desc = document.createElement("p");
    desc.textContent = projectData.descPersonalContributions;
    personal.appendChild(desc);

    conteudoProject.appendChild(personal);
  }
  if (projectData.partners) {
    const partner = document.createElement("div");
    partner.className = "item-data-project";
    partner.id = `partners${idProject}`;

    const title = document.createElement("h1");
    title.textContent = projectData.titlePartners;
    partner.appendChild(title);

    const list = document.createElement("ul");
    projectData.partners.forEach(partner => {
      const item = document.createElement("li");
      item.textContent = `- ${partner}`;
      list.appendChild(item);
    })

    partner.appendChild(list);

    conteudoProject.appendChild(partner);
  }
  if (projectData.team) {
    const team = document.createElement("div");
    team.className = "item-data-project";
    team.id = `team${idProject}`;

    const title = document.createElement("h1");
    title.textContent = projectData.titleTeam;
    team.appendChild(title);

    const list = document.createElement("li");
    projectData.team.forEach(partner => {
      const item = document.createElement("li");
      item.textContent = `- ${partner}`;
      list.appendChild(item);
    })

    team.appendChild(list);

    conteudoProject.appendChild(team);
  }

  project.appendChild(conteudoProject);

  const buttons = menu.querySelectorAll('a');
  const sections = conteudoProject.querySelectorAll('.item-data-project');

  function activateSection(targetId) {
    buttons.forEach(btn => btn.classList.remove('ativo'));
    sections.forEach(sec => sec.classList.remove('ativo'));

    const btn = Array.from(buttons).find(b => b.dataset.target === targetId);
    const sec = conteudoProject.querySelector(`#${targetId}`);
    if (btn && sec) {
      btn.classList.add('ativo');
      sec.classList.add('ativo');
    }
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      activateSection(btn.dataset.target);
    });
  });

  if (buttons.length > 0) {
    activateSection(buttons[0].dataset.target);
  }

  return project;
}

async function renderProjects(lang) {
  const textProj = lang === 'PT' ? textProjectPt : textProjectEn;
  const textProjItm = lang === 'PT' ? textProjectItemPt : textProjectItemEn;

  const navbar = document.getElementById("navbarSecundary");
  navbar.innerHTML = ``;

  const listTCCs = document.getElementById('list-TCCs');
  listTCCs.innerHTML = `<h1 class="title-projects" id="TCCs">${textProj.Titles.TCCs}</h1>`;

  const listAcademic = document.getElementById('list-academic');
  listAcademic.innerHTML = ``;

  let count = 1;
  for (const project of textProj.TCCs) {
    const item = await createProjectItem({ ...project, ...textProjItm }, count);
    item.id =project.title.replace(/\s+/g, '-');
    listTCCs.appendChild(item);
    count++;
    
    const link = document.createElement("a");
    link.href = `#${project.title.replace(/\s+/g, '-')}`;
    link.textContent = project.title;
    link.className = "link-academic";
    navbar.appendChild(link);
  }

  for (const project of textProj.Academic) {
    const item = await createProjectItem({ ...project, ...textProjItm }, count);
    listAcademic.appendChild(item);
    count++;
  }

  applyLanguage(lang);
}

document.addEventListener('DOMContentLoaded', async () => {
  let currentLang = localStorage.getItem('language') || 'PT';
  let currentTheme = localStorage.getItem('theme') || 'default';

  applyTheme(currentTheme);

  const headerElement = document.getElementById('header-principal');
  const contactsElement = document.getElementById('contacts');
  const {
    btnContact,
    btnFlag,
    btnTheme,
    btnMenu,
    nav,
    iconFlag
  } = await renderPrincipalHeader(headerElement, currentLang);
  await renderContacts(contactsElement);

  applyLanguage(currentLang);

  await renderProjects(currentLang);
  btnMenu.addEventListener('click', () => {
    btnMenu.classList.toggle('open');
    nav.classList.toggle('open');
  });

  btnContact.addEventListener('click', () => {
    const open = contactsElement.classList.toggle('open');
    btnContact.classList.toggle('open', open);
    btnContact.setAttribute('aria-expanded', open);
  });

  btnFlag.addEventListener('click', async () => {
    currentLang = currentLang === 'PT' ? 'EN' : 'PT';

    applyLanguage(currentLang);
    await updateFlag(iconFlag, currentLang);
    await renderProjects(currentLang);
  });

  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'default' ? 'dark-mode' : 'default';
    applyTheme(currentTheme);
  });
});
