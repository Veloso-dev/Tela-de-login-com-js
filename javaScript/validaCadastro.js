    let nome = document.getElementById('nome')  
    let labelNome = document.getElementById('labelNome')
    let valideNome = false

    let usuario = document.getElementById('usuario')
    let labelUsuario = document.getElementById('labelUsuario')
    let valideUsuario = false

    let senha = document.getElementById('senha')
    let labelSenha = document.getElementById('labelSenha')
    let valideSenha = false

    let senhaConfirme = document.getElementById('confirmeSenha')
    let labelConfirmeSenha = document.getElementById('labelConfirmeSenha')
    let valideSenhaConfirme = false


    let msgError = document.getElementById('msgError')
    let msgSuccess = document.getElementById('msgSuccess')

    nome.addEventListener('keyup',() => {
        if(nome.value.length <=2 ){
            labelNome.setAttribute('style' , 'color:red')
            labelNome.innerHTML = '<strong> Insira no minimo 3 caracteres </strong> '
            nome.setAttribute('style' , 'border-color:red')
            valideNome = false
        }else{
            labelNome.setAttribute('style' , 'color:green')
            labelNome.innerHTML = 'Nome '
            nome.setAttribute('style' , 'border-color:green')
            valideNome = true
        }
    })



    usuario.addEventListener('keyup',() => {
        if(usuario.value.length <=4 ){
            labelUsuario.setAttribute('style' , 'color:red')
            labelUsuario.innerHTML = '<strong> Insira no minimo 5 caracteres </strong> '
            usuario.setAttribute('style' , 'border-color:red')
            valideUsuario = false
        }else{
            labelUsuario.setAttribute('style' , 'color:green')
            labelUsuario.innerHTML = 'usuario '
            usuario.setAttribute('style' , 'border-color:green')
            valideUsuario = true
        }
    })



    senha.addEventListener('keyup',() => {
        if(senha.value.length <=5 ){
            labelSenha.setAttribute('style' , 'color:red')
            labelSenha.innerHTML = '<strong> Insira no minimo 6 caracteres </strong> '
            senha.setAttribute('style' , 'border-color:red')
            valideSenha = false
        }else{
            labelSenha.setAttribute('style' , 'color:green')
            labelSenha.innerHTML = 'senha '
            senha.setAttribute('style' , 'border-color:green')
            valideSenha = true
        }
    })



    senhaConfirme.addEventListener('keyup',() => {
        if(senha.value != senhaConfirme.value  ){
            labelConfirmeSenha.setAttribute('style' , 'color:red')
            labelConfirmeSenha.innerHTML = '<strong> *As senhas não conferem* </strong> '
            senhaConfirme.setAttribute('style' , 'border-color:red')
            valideSenhaConfirme = false
        }else{
            labelConfirmeSenha.setAttribute('style' , 'color:green')
            labelConfirmeSenha.innerHTML = 'Confirme a Senha '
            senhaConfirme.setAttribute('style' , 'border-color:green')
            valideSenhaConfirme = true
        }
    })





function cadastrar (){
    if(valideNome && valideSenha && valideUsuario && valideSenhaConfirme) {
        msgSuccess.setAttribute('style' , 'display:block')
        msgSuccess.innerHTML = "cadastrando"
        msgError.setAttribute('style' , 'display:none')
        msgError.innerHTML = ""
        setTimeout(()=>{
            window.location.href = '../home.html'
        }, 1000)        

    }else{
       
        msgError.setAttribute('style' , 'display:block')
        msgError.innerHTML = "existe campo em branco"

    }
    
    


      
}