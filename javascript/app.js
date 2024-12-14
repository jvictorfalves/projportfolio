document.querySelectorAll('a[href^="#"]').forEach(anchor => { // Seleciona todos os links (âncoras) que começam com "#" (indicando uma âncora interna na página)
    anchor.addEventListener('click', function(e) { // Adiciona um ouvinte de evento para o clique em cada link
        e.preventDefault(); // Impede o comportamento padrão de navegação (que seria pular diretamente para a seção)
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({ // Seleciona o elemento da página com o ID correspondente ao href do link
            behavior: 'smooth' // Faz a rolagem suave até o elemento
        });
    });
});

// Exibir uma mensagem de boas-vindas ao carregar a página
window.addEventListener('load', function() { // Adiciona um ouvinte de evento para quando a página for completamente carregada
    alert("Bem-vindo à página!"); // Exibe um alerta de boas-vindas
});
