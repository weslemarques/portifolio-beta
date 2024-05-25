window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        window.location.href = 'projects.html'; // Rola para baixo para a página de projetos
    } else {
        window.location.href = 'index.html'; // Rola para cima para a página inicial
    }
});