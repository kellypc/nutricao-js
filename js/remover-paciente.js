var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target; //tabela
  var paiDoAlvo = alvoEvento.parentNode; //tr = paciente = remover
  paiDoAlvo.remove();
  });
});
//Conseguimos colocar em uma só linha esse código:
// event.target.parentNode.revome();
//a funçao parentNote é chamada de event bubbling onde ao inves de fazermos como o código com o
//forEach que está abaixo, nós escutamos o evento pelo pai(tabela) e removemos o filho(td)
// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){ //doubleclick por isso o dblclick
//     this.remove();
//   });
// });
