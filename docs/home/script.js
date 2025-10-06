import {
  applyLanguage,
  applyTheme,
  updateFlag,
  renderPrincipalHeader,
  renderContacts
} from "../default.js";

const year = new Date().getFullYear() - 2005;

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

async function renderHome(lang) {
  const text = lang === 'PT' ? textPt : textEn;

  const whoSection = document.getElementById('Who');
  whoSection.innerHTML = `
    <div class="content-home">
      <div>
        <img alt="Me" class="img-profile" src="../assets/Me.png" />
        <h1>${text.Titles.Curriculum}</h1>
        <a class="link-download" download="Curriculum.pdf" href="../assets/Curriculum.pdf">Download</a>
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
