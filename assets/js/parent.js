// Top-level domain script
const iframe = zoid.create({
    tag: 'storage',
    url: 'http://localhost:8000',
});

iframe.render({}, '#root');

document.cookie = 'parent=true';
