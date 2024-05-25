window.addEventListener('wheel', (event) => {
    if (event.deltaY < 0) {
        window.location.href = 'skills.html'; // Rola para cima para a página de habilidades
    }
});