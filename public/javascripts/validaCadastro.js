let nome = document.getElementById('nome')
let validaNome = false

let email = document.getElementById('email')
let validaEmail = false

let senha = document.getElementById('senha')
let regex = /^(?=(?:.*?[A-Z]){3})(?=(?:.*?[0-9]){2})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
let validaSenha = false

let senhaConfg = document.getElementById('senhaConfg')
let validaSenhaConfg = false


nome.addEventListener('keyup' , () => {
    if(nome.value.length <= 2){
        nome.setAttribute('style' , 'color:red')
        

    }else{
        nome.setAttribute('style' , 'color:green')
    }
})


email.addEventListener('keyup' , () => {
    if(email.value.length <= 2 || email.value.indexOf('@')==-1 || email.value.indexOf(".")==-1){
        email.setAttribute('style' , 'color:red')


    
        return validaEmail = false
        

    }else{
        email.setAttribute('style' , 'color:green')

        
        return validaEmail = true
    }
})

senha.addEventListener('keyup' , () => {
    if(senha.value.length <= 2 ){
        senha.setAttribute('style' , 'color:red')
        



       return validaSenha = false

    }else{
      senha.setAttribute('style' , 'color:green')


      return validaSenha = true
    }
})

    function valida (){
        setTimeout(()=>{
            window.location.href = '/index'
        }, 1000) 
    }