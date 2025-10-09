import {
  applyLanguage,
  applyTheme,
  loadInlineSvg,
  renderPrincipalHeader,
  renderContacts,
  techsArray,
  updateFlag,
  year
} from "../default.js";


const textPt = {
  Titles: {
    General: "Informações Gerais",
    Hard: "Hard Skills",
    Soft: "Soft Skills"
  },
  General: `Sou Bruno Serpa Pereira Carvalho, tenho ${year} anos e sou Técnico em Desenvolvimento de Sistemas. Atualmente, estou no meu último ano do curso Tecnólogo em Desenvolvimento de Software Multiplataforma.`,
  Hard: "Tenho expandido continuamente meus conhecimentos e habilidades em tecnologias. Atualmente, sou proficiente nas seguintes tecnologias:",
  Soft: "Além dos estudos técnicos, também me dedico ao autoconhecimento, trabalhando continuamente no meu autocontrole emocional e psicológico. Dessa forma, tenho aprimorado as seguintes habilidades:",
  softSkill: [
    "Organização",
    "Pensamento criativo",
    "Resiliência",
    "Flexibilidade",
    "Empatia",
    "Colaboração",
    "Trabalhar sob pressão",
    "Capacidade de resolver problemas"
  ]
};

const textEn = {
  Titles: {
    General: "General Information",
    Hard: "Hard Skills",
    Soft: "Soft Skills"
  },
  General: `My name is Bruno Serpa Pereira Carvalho, I'm ${year} years old, and I'm a Systems Development Technician. I'm currently in my final year of the Technologist course in Multiplatform Software Development.`,
  Hard: "I have been continuously expanding my knowledge and skills in various technologies. At present, I am proficient in the following technologies:",
  Soft: "Besides my technical studies, I also focus on self-awareness, constantly working on my emotional and psychological self-control. This has helped me improve the following skills:",
  softSkill: [
    "Organization",
    "Creative thinking",
    "Resilience",
    "Flexibility",
    "Empathy",
    "Collaboration",
    "Working under pressure",
    "Problem-solving"
  ]
};

async function renderAbout(lang) {
  const text = lang === 'PT' ? textPt : textEn;

  document.getElementById('linkGeneral').textContent = text.Titles.General;
  document.getElementById('linkHard').textContent = text.Titles.Hard;
  document.getElementById('linkSoft').textContent = text.Titles.Soft;

  const generalSection = document.getElementById('General');
  generalSection.innerHTML = `
    <h1>${text.Titles.General}</h1>
    <p class="paragraph">${text.General}</p>
  `;

  const hardSection = document.getElementById('Hard');
  hardSection.innerHTML = `
    <h1>${text.Titles.Hard}</h1>
    <p class="paragraph">${text.Hard}</p>
  `;

  const techsWrapper = document.createElement('div');
  techsWrapper.className = 'techs';

  const techsList = document.createElement('div');
  techsList.className = 'techs-list';

  for (const tech of techsArray) {
    const techItem = document.createElement('div');
    techItem.className = 'tech-item';

    techItem.appendChild(await loadInlineSvg(tech.src, { width: 50, height: 50 }));

    const t = document.createElement('h1');
    t.textContent = tech.title;
    techItem.appendChild(t);

    techsList.appendChild(techItem);
  }

  techsWrapper.appendChild(techsList);
  hardSection.appendChild(techsWrapper);

  const softSection = document.getElementById('Soft');
  softSection.innerHTML = `
    <h1>${text.Titles.Soft}</h1>
    <p class="paragraph">${text.Soft}</p>
  `;

  const habilitys = document.createElement('div');
  habilitys.className = 'habilitys-list';

  text.softSkill.forEach(skill => {
    const hab = document.createElement('div');
    hab.className = 'hability-item';
    hab.textContent = skill;
    habilitys.appendChild(hab);
  });

  softSection.appendChild(habilitys);

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

  await renderAbout(currentLang);
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
    await renderAbout(currentLang);
  });

  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'default' ? 'dark-mode' : 'default';
    applyTheme(currentTheme);
  });
});
