let nome_usuario = "";
let elemento = document.querySelector("#nome");


while(nome_usuario==""){
    nome_usuario = prompt("Qual é o seu nome?");
}

if(nome_usuario==null){
    elemento.textContent="Bem vindo,"
}
else{
    elemento.textContent=nome_usuario;
}
