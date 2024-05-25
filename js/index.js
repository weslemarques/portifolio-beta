
document.getElementById('hamburguer').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.classList.toggle('active');
    this.classList.toggle('active');
  });

  window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        document.body.classList.add('move-up'); 
            window.location.href = 'skills.html'; 
    }
});

