// --- PARTE 1: TEMA ESCURO ---
const botaoTema = document.getElementById('btn-tema');

// Olha no localStorage se o cara ja tinha deixado escuro antes
if (localStorage.getItem('temaPreferido') === 'escuro') {
    document.body.classList.add('dark');
}

// Ação de clique do botão
if (botaoTema) {
    botaoTema.addEventListener('click', function() {
        // Liga ou desliga a classe dark
        document.body.classList.toggle('dark');
        
        // Salva a escolha no navegador pra nao resetar quando mudar de aba html
        if (document.body.classList.contains('dark')) {
            localStorage.setItem('temaPreferido', 'escuro');
        } else {
            localStorage.setItem('temaPreferido', 'claro');
        }
    });
}


// --- PARTE 2: VALIDAÇÃO DO FORMULÁRIO ---
const form = document.getElementById('form-contato');

// Só roda isso se o form existir na página atual (evita aquele erro chato no console nas outras paginas)
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Nao deixa a pagina dar refresh
        
        // Pega o que foi digitado
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const msg = document.getElementById('mensagem').value;
        
        // Verifica se tá tudo preenchido
        if (nome == '' || email == '' || msg == '') {
            alert('Aviso: Preencha todos os campos antes de enviar.');
            return; // Mata a execuçao aqui
        }
        
        // Uma checagem simples de email (tem que ter o @)
        if (email.indexOf('@') == -1) {
            alert('Aviso: Digite um formato de e-mail válido.');
            return;
        }
        
        // Deu tudo certo, avisa o usuario e limpa o form
        alert('Show, ' + nome + '! Mensagem enviada com sucesso.');
        form.reset();
    });
}