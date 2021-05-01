var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("fui clicado");

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener("load", function(){
    var resposta = xhr.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach( function(paciente){
      addicionaPacienteNaTabela(paciente);
    });
  });
  xhr.send();
});
