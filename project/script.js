import {
  renderContacts
} from "../default.js";

function applyTheme(name) {
  document.documentElement.setAttribute('data-theme', name);
  localStorage.setItem('theme', name);
}

document.addEventListener('DOMContentLoaded', async () => {
  let currentTheme = localStorage.getItem('theme') || 'default';

  applyTheme(currentTheme);

  const contactsElement = document.getElementById('contacts');

  await renderContacts(contactsElement);

  contactsElement.classList.add('open');
});
