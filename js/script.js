function mostrarApenasHome(){
    document.getElementById("login-body").style.display = 'none';
    document.getElementById("nova-conta").style.display = 'none';
    document.getElementById("divHome").style.display = 'block';
}

function mostrarApenasLogin(){
    document.getElementById("login-body").style.display = 'block';
    document.getElementById("nova-conta").style.display = 'none';
    document.getElementById("divHome").style.display = 'none';
}

function mostrarApenasConta(){
    document.getElementById("login-body").style.display = 'none';
    document.getElementById("nova-conta").style.display = 'block';
    document.getElementById("divHome").style.display = 'none';
}

function toggleButton(){
    const username = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    if ((username != null) && (password != null)) {
        document.querySelector('#botaoLogin').disabled = false;
        return
    }

    document.querySelector('#botaoLogin').disabled = true;

}

function limparLogin(){
    document.getElementById("login-email").value = null;
    document.getElementById("login-password").value = null;
}

function limparConta(){
    document.querySelector()

}