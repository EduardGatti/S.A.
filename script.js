const campoLogin = document.getElementById("usarname")
const campoSenha = document.getElementById("senha")
const campoNovoLogin = document.getElementById("newUsername")
const campoNovaSenha = document.getElementById("newSenha")
const campoRepSenha = document.getElementById("confirmSenha")



function login(){
    let login = campoLogin.value
    let senha = campoSenha.value

    let mensagem = "Nenhum usuário cadastrado até o momento";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if (bancoDeDados == null){
        mensagem = "Usuário ou senha incorreta! "
    }
    else{
        for(let usuario of bancoDeDados){
            if(usuario.login == login && usuario.senha == senha){
                mensagem = "Parabéns, você logou!"
                localStorage.setItem("logado", JSON.stringify(usuario))
                window.location.href = "index.html"
                break

            }
        }
    }
    alert(mensagem)
}

function cadastro(){
    if (campoNovaSenha.value == campoRepSenha.value){
        const usuario = {

            login: campoNovoLogin.value,
            senha: campoNovaSenha.value,

        };

    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"))
    if(bancoDeDados == null){
        bancoDeDados = [];
    }
    if(existe(usuario, bancoDeDados)){
        alert("Esse login ja está cadastrado!")
        window.location.href = "home.html"  
    }
    else{
        bancoDeDados.push(usuario)
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados))
        alert("Usuário cadastrado com sucesso!")
        window.location.href = "index.html"
    }
    }else{
    alert("As senhas não são iguais!")
    }

}

function existe(usuario, bancoDeDados){
    for(let verificado of bancoDeDados){
        if(verificado.login == usuario.login)
        return true
    }
}

function entrar(){
    window.location.href = "home.html"
}
function cadastre(){
    window.location.href = "registrar.html"
}
