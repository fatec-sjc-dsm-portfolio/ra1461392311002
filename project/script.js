import {
  textHeaderPt,
  textHeaderEn,
  updateFlag,
  renderPrincipalHeader,
  renderContacts
} from "../default.js";

function applyTheme(name) {
  document.documentElement.setAttribute('data-theme', name);
  localStorage.setItem('theme', name);
}

function applyLanguage(lang) {
  const dict = lang === 'EN' ? textHeaderEn : textHeaderPt;
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    el.textContent = dict[key] || '';
  });
  localStorage.setItem('language', lang);
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
  });

  btnTheme.addEventListener('click', () => {
    currentTheme = currentTheme === 'default' ? 'dark-mode' : 'default';
    applyTheme(currentTheme);
  });
});
