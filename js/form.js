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

  var erro = validaPaciente(paciente)

  if(erro.length > 0){
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erro;
    return;
  }
  //Adiciona paciente a tabela
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});
// Estamos capturando o evento de click com a função anonima, no exemplo abaixo tem a funçao nomeada(desaclopada)
//estamos escultando o evento de click no titulo através do addEventListener

// titulo.addEventListener("click", mostraMensagem);
//
// function mostraMensagem(){
//   console.log("Olá, eu fui clicado!");
// }

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
  if(validaPeso(paciente.peso)){
    return "";
  }else {
    return "O peso é inválido!";
  }
}
