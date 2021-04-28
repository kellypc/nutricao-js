var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  }, 500);
});
//Conseguimos colocar em uma só linha esse código:
    // var alvoEvento = event.target; //tabela
    // var paiDoAlvo = alvoEvento.parentNode; //tr = paciente = remover
    // paiDoAlvo.remove();
//a funçao parentNote é chamada de Event bubbling onde ao inves de fazermos como o código com o
//forEach que está abaixo, nós escutamos o evento pelo pai(tabela) e removemos o filho(td)
// pacientes.forEach(function(paciente){
//   paciente.addEventListener("dblclick", function(){ //doubleclick por isso o dblclick
//     this.remove();
//   });
// });
