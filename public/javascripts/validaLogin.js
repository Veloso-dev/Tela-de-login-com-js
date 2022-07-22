function logar () {
    var nome = document.getElementById('nome').value
    var senha = document.getElementById('senha').value


    if (nome == 'admin' && senha == 'admin'){

        alert('Parabens, você esta logando')
        location.href= "../home.html"

    }else {
        alert('usuario ou senha incorretos')
    }




}