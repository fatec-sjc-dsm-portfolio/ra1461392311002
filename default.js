export const contactsData = [
    { type: 'link', url: 'https://github.com/BrunoSerpa', label: 'GitHub', icon: '../assets/IconGithub.svg' },
    { type: 'link', url: 'https://www.linkedin.com/in/brunoserpa/', label: 'LinkedIn', icon: '../assets/IconLinkedin.svg' },
    { type: 'copy', text: '+55 (12) 98899-5893', icon: '../assets/IconPhone.svg' },
    { type: 'copy', text: 'brunospc2005@gmail.com', icon: '../assets/IconEmail.svg' }
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