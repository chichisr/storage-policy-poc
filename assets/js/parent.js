// Top-level domain script
console.log('[DEBUG parent.js]: cookies BEFORE write', document.cookie);
const iframe = zoid.create({
    tag: 'storage',
    url: 'http://localhost:8000',
    contexts: {
        iframe: false,
        popup: true,
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const $showChildButton = document.getElementById('showChild');
    $showChildButton.addEventListener('click', (e) => {
        iframe.render({}, '#root');
    });
});

document.cookie = 'parent=true';
console.log('[DEBUG parent.js]: cookies AFTER write', document.cookie);
