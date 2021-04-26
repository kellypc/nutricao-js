//Botões
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");
  //Extraindo informaçoes do paciente do form (o código foi movido para a funcao obtemPacienteDoFormulario(form))
  var paciente =  obtemPacienteDoFormulario(form);
  //Criando uma tabela:
  //A função responsável por criar elementos no Javascript é a createElement().
  //Com ela passamos o nome da tag que queremos criar e ela nos retorna um objeto
  var pacienteTr = montaTr(paciente);

  var erros = validaPaciente(paciente)

  if(erros.length > 0){
    exibeMensagensDeErro(erros);
    return;
  }
  //Adiciona paciente a tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});
// Estamos capturando o evento de click com a função anonima, no exemplo abaixo tem a funçao nomeada(desaclopada)
//estamos escultando o evento de click no titulo através do addEventListener

// titulo.addEventListener("click", mostraMensagem);
//
// function mostraMensagem(){
//   console.log("Olá, eu fui clicado!");
// }
function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
function obtemPacienteDoFormulario(form){
  //cria um objeto paciente com  as suas propriedades
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

  return paciente;
}

function montaTr(paciente){
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  //o appendChild coloca as td dentro das tr, logo abaixo usamos o appendChild para colocá-lo dentro da tabela pacientes
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}

function montaTd(dado,classe){
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente){

  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push("O nome do paciente não pode ser em branco");
  }

  if (paciente.gordura.length == 0) {
    erros.push("A gordura não pode ser em branco");
  }

  if (paciente.peso.length == 0) {
    erros.push("O peso não pode ser em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ser em branco");
  }

  if(!validaPeso(paciente.peso)){
    erros.push("Peso é inválido");
  }

  if(!validaAltura(paciente.altura)){
    erros.push("A ALtura é inválida!");
  }

  return erros;
}
