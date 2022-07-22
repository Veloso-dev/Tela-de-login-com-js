let nome = document.getElementById('nome')
let validaNome = false

let email = document.getElementById('email')
let validaEmail = false

let senha = document.getElementById('senha')
let msgError = document.getElementById('msgError')
let validaSenha = false

let senhaConfg = document.getElementById('senhaConfg')
let validaSenhaConfg = false

let msgCad = document.getElementById('msg-cad')
let msgerro = document.getElementById('msg-erro')


nome.addEventListener('keyup' , () => {
    if(nome.value.length <= 2){
        nome.setAttribute('style' , 'color:red')

        validaNome = false
        

    }else{
        nome.setAttribute('style' , 'color:green')
        validaNome = true
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
    if(senha.value.length <= 4 ){
        senha.setAttribute('style' , 'color:red')
        msgError.setAttribute = ('style', 'display: none;')
        msgError.innerHTML = 'Insira no minimo 6 caracteres'
        



       return validaSenha = false

    }else{
      senha.setAttribute('style' , 'color:green')
      msgError.setAttribute = ('style', 'display: none;')
      msgError.innerHTML = ''
      
      return validaSenha = true
    }
})

senhaConfg.addEventListener('keyup' , () =>{
    if(senha.value != senhaConfg.value){
        senhaConfg.setAttribute('style' , 'color:red')
        msgError.setAttribute = ('style', 'display: none;')
        msgError.innerHTML = 'Senhas não conferem'

        validaSenhaConfg = false

    }else{

        senhaConfg.setAttribute('style' , 'color:green')
        msgError.setAttribute = ('style', 'display: none;')
        msgError.innerHTML = ''
        validaSenhaConfg = true

    }

})




    function valida (){
        if(validaNome && validaEmail && validaSenha && validaSenhaConfg) {

            msgCad.setAttribute('style' , 'display:block')
            msgCad.innerHTML = 'Cadastrando'

            
            msgerro.setAttribute('style' , 'display:none')
            
            setTimeout(()=>{
                window.location.href = '/'
            }, 1000) 
            
            return

        }else{
            
            msgerro.setAttribute('style' , 'display:block')
            msgerro.innerHTML = 'Existe campo em branco'

            setTimeout(()=>{
                window.location.href = '/index'
            }, 1000) 
            
            return


            
        }


        }







       