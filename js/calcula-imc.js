//Botões
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  //Criando uma tabela
  //A função responsável por criar elementos no Javascript é a createElement().
  //Com ela passamos o nome da tag que queremos criar e ela nos retorna um objeto
  // HTML que pode ser alterado com as propriedades do Javascript,
  //como a .textContent e a .classList.
  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td");
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  //o appendChild coloca as td dentro das tr, logo abaixo usamos o appendChild para colocá-lo dentro da tabela pacientes
  pacienteTr.appendChild(nomeTd);
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  // console.log(nome);
  // console.log(peso);
  // console.log(altura);
  // console.log(gordura);
});
// Estamos capturando o evento de click com a função anonima, no exemplo de baixo tem a funçao nomeada(desaclopada)
//estamos escultando o evento de click no titulo através do addEventListener

// titulo.addEventListener("click", mostraMensagem);
//
// function mostraMensagem(){
//   console.log("Olá, eu fui clicado!");
// }
