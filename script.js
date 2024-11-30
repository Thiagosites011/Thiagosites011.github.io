// Scroll suave ao clicar nos links do menu
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

// Validação do formulário de contato
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('📩 Sua mensagem foi enviada com sucesso!');
  this.reset();
});
