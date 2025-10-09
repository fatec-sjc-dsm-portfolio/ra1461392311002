import {
  applyLanguage,
  applyTheme,
  loadInlineSvg,
  year
} from "./default.js";

const textPt = {
  Titles: {
    Who: "Quem sou",
    Curriculum: "Currículo",
    Portfolio: "Portfólio"
  },
  Who: [
    `Meu nome é Bruno Serpa Pereira Carvalho, tenho ${year} anos e sou Técnico em Desenvolvimento de Sistemas pela Escola Técnica Estadual Professora Ilza Nascimento Pintus. Atualmente, estou cursando o Tecnólogo em Desenvolvimento de Software Multiplataforma. Minha formação acadêmica e experiência prática construíram uma base sólida em tecnologias e metodologias modernas, com foco na criação de projetos funcionais e de alto desempenho.`,
    "Tenho experiência em uma ampla variedade de ferramentas e linguagens de programação, como Git, GitHub, Python, TypeScript, JavaScript, e frameworks como React, React Native e Express. Além disso, possuo conhecimento em bancos de dados relacionais e não relacionais, como PostgreSQL, MySQL, SQL Server, Cassandra, MongoDB e Redis, permitindo-me desenvolver sistemas robustos e adaptáveis a diferentes demandas.",
    "Minha meta profissional é aprimorar constantemente minhas habilidades técnicas e contribuir para o desenvolvimento de projetos inovadores que agreguem valor, otimizem processos e ofereçam soluções práticas e eficazes aos usuários."
  ],
  Portfolio: "Este projeto foi desenvolvido utilizando apenas HTML, CSS e Javascript, com o código hospedado no GitHub (Pages). Durante o processo, o projeto foi inicialmente prototipado no Figma, garantindo um planejamento visual eficiente e alinhado com os objetivos."
};

const textEn = {
  Titles: {
    Who: "Who I am",
    Curriculum: "Curriculum",
    Portfolio: "Portfolio"
  },
  Who: [
    `My name is Bruno Serpa Pereira Carvalho, I am ${year} years old and I am a Systems Development Technician from the State Technical School Professor Ilza Nascimento Pintus. I am currently studying for a degree in Multiplatform Software Development. My academic background and practical experience have built a solid foundation in modern technologies and methodologies, focusing on creating functional and high-performance projects.`,
    "I have experience with a wide variety of tools and programming languages, such as Git, GitHub, Python, TypeScript, JavaScript, and frameworks like React, React Native, and Express. Additionally, I have knowledge in relational and non-relational databases, such as PostgreSQL, MySQL, SQL Server, Cassandra, MongoDB, and Redis, allowing me to develop robust systems adaptable to different demands.",
    "My professional goal is to constantly improve my technical skills and contribute to the development of innovative projects that add value, optimize processes, and provide practical and effective solutions to users."
  ],
  Portfolio: "This project was developed using only HTML, CSS, and JavaScript, with the code hosted on GitHub (Pages). During the process, the project was initially prototyped in Figma, ensuring efficient visual planning aligned with the objectives."
};

const contactsData = [
    { type: 'link', url: 'https://github.com/BrunoSerpa', label: 'GitHub', icon: 'assets/IconGithub.svg' },
    { type: 'link', url: 'https://www.linkedin.com/in/brunoserpa/', label: 'LinkedIn', icon: 'assets/IconLinkedin.svg' },
    { type: 'copy', text: '+55 (12) 98899-5893', icon: 'assets/IconPhone.svg' },
    { type: 'copy', text: 'brunospc2005@gmail.com', icon: 'assets/IconEmail.svg' }
];

const headerLinksData = [
    { key: "Home", url: "home" },
    { key: "About", url: "about" },
    { key: "Experience", url: "experience" },
    { key: "Project", url: "project" }
];

async function renderContacts(container) {
    container.innerHTML = '';
    for (const item of contactsData) {
        const element = item.type === 'link'
            ? document.createElement('a')
            : document.createElement('button');

        if (item.type === 'link') {
            element.href = item.url;
            element.target = '_blank';
            element.textContent = item.label;
        } else {
            element.type = 'button';
            element.textContent = item.text;
            element.addEventListener('click', () => {
                navigator.clipboard.writeText(item.text);
            });
        }

        element.className = 'item-contact';
        element.prepend(
            await loadInlineSvg(item.icon, { width: 20, height: 20 })
        );

        if (item.type === 'copy') {
            element.append(
                await loadInlineSvg('assets/IconCopy.svg', { width: 16, height: 16 })
            );
        }

        container.append(element);
    }
}

async function renderPrincipalHeader(container, currentLang) {
    container.innerHTML = '';

    const btnMenu = document.createElement('a');
    btnMenu.id = 'btn-principal-menu';
    const iconMenu = document.createElement('figure');
    iconMenu.id = 'icon-menu';
    btnMenu.append(iconMenu);

    iconMenu.appendChild(
        await loadInlineSvg('assets/IconMenu.svg', { width: 50, height: 50 })
    );

    const nav = document.createElement('nav');
    nav.id = 'links-principal-menu';
    headerLinksData.forEach(item => {
        const a = document.createElement('a');
        a.setAttribute('data-key', item.key);
        a.href = item.url;
        nav.append(a);
    });

    const fnContainer = document.createElement('div');
    fnContainer.className = 'header-functions';

    const btnContact = document.createElement('a');
    btnContact.id = 'btn-contact';
    const pContact = document.createElement('p');
    pContact.setAttribute('data-key', 'Contact');
    const iconDrop = document.createElement('figure');
    iconDrop.id = 'icon-dropdown';
    iconDrop.appendChild(
        await loadInlineSvg('assets/IconDropdown.svg', { width: 16, height: 16 })
    );
    btnContact.append(pContact, iconDrop);

    const btnFlag = document.createElement('a');
    btnFlag.id = 'btn-flag';
    const iconFlag = document.createElement('figure');
    iconFlag.id = 'icon-flag';
    const pLang = document.createElement('p');
    pLang.setAttribute('data-key', 'Language');
    btnFlag.append(iconFlag, pLang);

    const btnTheme = document.createElement('a');
    btnTheme.id = 'btn-theme';
    const iconTheme = document.createElement('figure');
    iconTheme.id = 'icon-theme';
    iconTheme.appendChild(
        await loadInlineSvg('assets/IconTheme.svg', { width: 40, height: 40 })
    );
    btnTheme.append(iconTheme);

    fnContainer.append(btnContact, btnFlag, btnTheme);

    container.append(btnMenu, nav, fnContainer);

    await updateFlag(iconFlag, currentLang);

    return { btnMenu, nav, btnContact, btnFlag, btnTheme, iconFlag };
}

async function renderHome(lang) {
  const text = lang === 'PT' ? textPt : textEn;

  const whoSection = document.getElementById('Who');
  whoSection.innerHTML = `
    <div class="content-home">
      <div>
      <img alt="Me" class="img-profile" src="assets/Me.png" />
        <h1>${text.Titles.Curriculum}</h1>
        <a class="link-download" download="Curriculum.pdf" href="assets/Curriculum.pdf">Download</a>
      </div>
      <div>
        <h1>${text.Titles.Who}</h1>
        ${text.Who.map(p => `<p class="paragraph">${p}</p>`).join('')}
      </div>
    </div>
  `;

  const portfolioSection = document.getElementById('Portfolio');
  portfolioSection.innerHTML = `
    <h1>${text.Titles.Portfolio}</h1>
    <p class="paragraph">${text.Portfolio}</p>
  `;

  applyLanguage(lang);
}

async function updateFlag(iconFlag, lang) {
  const src = lang === 'PT'
    ? 'assets/FlagBrazil.svg'
    : 'assets/FlagUSA.svg';

  iconFlag.innerHTML = '';
  iconFlag.appendChild(
    await loadInlineSvg(src, { width: 50, height: 50 })
  );
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

  await renderHome(currentLang);
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
    await renderHome(currentLang);
  });

  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'default' ? 'dark-mode' : 'default';
    applyTheme(currentTheme);
  });
});
