export const textHeaderPt = {
    Home: 'Início',
    About: 'Sobre mim',
    Experience: 'Experiência',
    Project: 'Projetos',
    Contact: 'Contato',
    Language: 'Português'
};

export const textHeaderEn = {
    Home: 'Home',
    About: 'About me',
    Experience: 'Experience',
    Project: 'Projects',
    Contact: 'Contact',
    Language: 'English'
};

export const contactsData = [
    { type: 'link', url: 'https://github.com/BrunoSerpa', label: 'GitHub', icon: '../assets/IconGithub.svg' },
    { type: 'link', url: 'https://www.linkedin.com/in/brunoserpa/', label: 'LinkedIn', icon: '../assets/IconLinkedin.svg' },
    { type: 'copy', text: '+55 (12) 98899-5893', icon: '../assets/IconPhone.svg' },
    { type: 'copy', text: 'brunospc2005@gmail.com', icon: '../assets/IconEmail.svg' }
];

export const headerLinksData = [
    { key: "Home", url: "/home" },
    { key: "About", url: "/about" },
    { key: "Experience", url: "/experience" },
    { key: "Project", url: "/project" }
];

export async function loadInlineSvg(src, { width, height } = {}) {
    const resp = await fetch(src);
    if (!resp.ok) throw new Error(`Erro ao carregar ${src}`);
    const text = await resp.text();
    const doc = new DOMParser().parseFromString(text, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);
    return svg;
}

export async function updateFlag(iconFlag, lang) {
    const src = lang === 'PT'
        ? '../assets/FlagBrazil.svg'
        : '../assets/FlagUSA.svg';

    iconFlag.innerHTML = '';
    iconFlag.appendChild(
        await loadInlineSvg(src, { width: 50, height: 50 })
    );
}

export async function renderPrincipalHeader(container, currentLang) {
    container.innerHTML = '';

    const btnMenu = document.createElement('a');
    btnMenu.id = 'btn-principal-menu';
    const iconMenu = document.createElement('figure');
    iconMenu.id = 'icon-menu';
    btnMenu.append(iconMenu);

    iconMenu.appendChild(
        await loadInlineSvg('../assets/IconMenu.svg', { width: 50, height: 50 })
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
        await loadInlineSvg('../assets/IconDropdown.svg', { width: 16, height: 16 })
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
        await loadInlineSvg('../assets/IconTheme.svg', { width: 40, height: 40 })
    );
    btnTheme.append(iconTheme);

    fnContainer.append(btnContact, btnFlag, btnTheme);

    container.append(btnMenu, nav, fnContainer);

    await updateFlag(iconFlag, currentLang);

    return { btnMenu, nav, btnContact, btnFlag, btnTheme, iconFlag };
}

export async function renderContacts(container) {
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
                await loadInlineSvg('../assets/IconCopy.svg', { width: 16, height: 16 })
            );
        }

        container.append(element);
    }
}