// Adicionar produtos ao carrinho com mensagem de sucesso
const buyButtons = document.querySelectorAll('.produto .btn-secondary');

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('✅ Produto adicionado ao carrinho com sucesso!');
  });
});

// Scroll suave para navegação no menu
const navLinks = document.querySelectorAll('header .nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão

    const targetId = link.getAttribute('href').substring(1); // Obtém o ID da seção (ex.: "produtos")
    const targetSection = document.getElementById(targetId);

    // Scroll suave até a seção
    window.scrollTo({
      top: targetSection.offsetTop - 70, // Ajusta para o header fixo
      behavior: 'smooth',
    });
  });
});

// Validação do formulário de contato
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os valores dos campos do formulário
  const nome = document.querySelector('#nome').value.trim();
  const email = document.querySelector('#email').value.trim();
  const mensagem = document.querySelector('#mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert('⚠️ Por favor, preencha todos os campos!');
  } else {
    alert('📩 Sua mensagem foi enviada com sucesso!');
    form.reset(); // Limpa os campos do formulário
  }
});

// Adicionar animação ao passar o mouse nos cards de produtos
const produtos = document.querySelectorAll('.produto');

produtos.forEach((produto) => {
  produto.addEventListener('mouseover', () => {
    produto.style.transform = 'translateY(-10px)';
    produto.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
  });

  produto.addEventListener('mouseout', () => {
    produto.style.transform = 'translateY(0)';
    produto.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  });
});
