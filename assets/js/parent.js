const iframe = zoid.create({
    tag: 'storage',
    url: 'http://127.0.0.1:8000',
});

iframe.render({}, '#root');
