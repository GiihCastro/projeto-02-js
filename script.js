// Código da página inicial de login

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('cookiePopup').classList.add('show');
    }, 1000); // Mostra o pop-up 1 segundo após o carregamento da página
});

function acceptCookies() {
    document.getElementById('cookiePopup').classList.remove('show');
}

function showPreferences() {
    document.getElementById('preferencesLink').style.display = 'none';
    document.getElementById('cookiePopup').classList.add('fullscreen');
    document.getElementById('preferences').classList.add('show');
}

function confirmPreferences() {
    document.getElementById('preferencesLink').style.display = 'block';
    document.getElementById('cookiePopup').classList.remove('fullscreen');
    document.getElementById('preferences').classList.remove('show');
    // Reexibe o conteúdo inicial
    setTimeout(function() {
        document.getElementById('cookiePopup').classList.add('show');
    }, 500); // Espera a animação de recolhimento antes de reexibir
}

// Evento Login
function Login(event) {
    event.preventDefault();

    let user = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!user || !password) {
        document.getElementById('resultado').innerText = "Por favor, insira seu email/telefone e senha.";
        return;
    } else if (user === 'infinityschool@gmail.com' && password === '123456') {
        document.getElementById('resultado').innerText = "Login efetuado, boas vindas Infinity School!";
        return;
    } else {
        document.getElementById('resultado').innerText = "Usuário ou senha incorretos!";
        return;
    }
}



// Código da página Membership

// Código da página de esqueci a senha

// Código da página resetar senha