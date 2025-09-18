import {
  applyLanguage,
  applyTheme,
  updateFlag,
  renderPrincipalHeader,
  renderContacts
} from "../default.js";

const textPt = {
  Titles: {
    Work: "Trabalhos",
    Volunteering: "Voluntariados",
  },
  Works: [
    {
      title: 'Aprendiz',
      time: '01/12/2022 - Atual',
      paragraph: 'Atuo na SOS ECO BIKE, localizada na Avenida Presidente Juscelino Kubitschek, 4946 - Monte Castelo, São José dos Campos - SP. Minhas atividades são focadas principalmente no atendimento ao cliente e na manutenção mecânica de bicicletas. Entre minhas responsabilidades estão garantir a satisfação dos clientes por meio de um atendimento de qualidade e realizar reparos e ajustes técnicos, assegurando o pleno funcionamento e a segurança das bicicletas.'
    }
  ],
  Volunteering: [
    {
      title: 'Multimidia',
      time: '01/01/2021 - Atual',
      paragraph: 'Atuo na Igreja Evangélica Pentecostal Deus é Fiel, localizada na Rua Riachuelo, 190 - Jardim Paulista, São José dos Campos - SP. Minhas responsabilidades incluem o controle da mesa de som e do projetor, garantindo a qualidade do áudio e das apresentações visuais durante os eventos e cultos.'
    }
  ]
};

const textEn = {
  Titles: {
    Work: "Work",
    Volunteering: "Volunteering",
  },
  Works: [
    {
      title: 'Apprentice',
      time: '12/01/2022 - Present',
      paragraph: 'I work at SOS ECO BIKE, located at Avenida Presidente Juscelino Kubitschek, 4946 - Monte Castelo, São José dos Campos - SP. My activities are mainly focused on customer service and bicycle mechanical maintenance. Among my responsibilities are ensuring customer satisfaction through quality service and performing technical repairs and adjustments, ensuring the full functionality and safety of the bicycles.'
    }
  ],
  Volunteering: [
    {
      title: 'Multimedia',
      time: '01/01/2021 - Present',
      paragraph: 'I work at the Evangelical Pentecostal Church Deus é Fiel, located at Rua Riachuelo, 190 - Jardim Paulista, São José dos Campos - SP. My responsibilities include controlling the soundboard and projector, ensuring the quality of audio and visual presentations during events and services.'
    }
  ]
};

function createExperienceItem({ title, time, paragraph }) {
  const item = document.createElement('div');
  item.className = 'experience-item';

  const h1 = document.createElement('h1');
  h1.textContent = `${title} (${time})`;
  item.appendChild(h1);

  const p = document.createElement('p');
  p.className = 'paragraph';
  p.textContent = paragraph;
  item.appendChild(p);

  return item;
}

async function renderExperience(lang) {
  const text = lang === 'PT' ? textPt : textEn;

  document.getElementById('linkWork').textContent = text.Titles.Work;
  document.getElementById('linkVolunteering').textContent = text.Titles.Volunteering;

  const workSection = document.getElementById('Work');
  workSection.innerHTML = `<h1>${text.Titles.Work}</h1>`;
  text.Works.forEach(work => {
    workSection.appendChild(createExperienceItem(work));
  });

  const volunteeringSection = document.getElementById('Volunteering');
  volunteeringSection.innerHTML = `<h1>${text.Titles.Volunteering}</h1>`;
  text.Volunteering.forEach(vol => {
    volunteeringSection.appendChild(createExperienceItem(vol));
  });

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

  await renderExperience(currentLang);
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
    await renderExperience(currentLang);
  });

  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'default' ? 'dark-mode' : 'default';
    applyTheme(currentTheme);
  });
});
