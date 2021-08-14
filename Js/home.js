/* Inicio Seccion Opciones de Usuario  */

let MenuPrincipal = document.getElementById("divMenuPrincipal");

$("#buttonActividad").one( "click", function actividad(){
        $('#navegacion').prepend('<p>Puedes realizar las siguientes actividades.</p>')
        $('#navegacion').append('<button id="eventoPaciente" onclick="eventoPacientes()" >Ingresar Paciente</button><button id="eventoPersonalMedico" onclick="eventoPersonalMedico()">Personal Medico</button> <button onclick="eventoElementos()">Elementos Disponibles</button>');
        $('#navegacion button').addClass("btn btn-primary shadow-sm");
        $('#navegacion').slideUp(0).slideDown(1000);
        eventoPaciente.className += "eventoPaciente";
});

/*  Fin Seccion Opciones de Usuario  */
/*  Inicio Seccion Pacientes  */
$(".formPacientes").hide();

function eventoPacientes(){
if(true){
        $(".formPacientes").show();
        $('.formPacientes').slideUp(0)
.slideDown(1000);
};
};

function finalizarFormPaciente() {
$(".formPacientes").hide();
};




$("#seccionListaPaciente").hide();




function finalizarListaPacientes(){
$("#seccionListaPaciente").hide();
};
/*  Fin Seccion Pacientes  */
/*  Inicio Seccion Personal Medico  */

$("#personalMedico").hide()

function eventoPersonalMedico(){
if(true){
        $("#personalMedico").show();
        $("#personalMedico").slideUp(0)
.slideDown(1000);
}
}
function finalizarListaPersonalMedico(){
$("#personalMedico").hide();
};

/*  Fin Seccion Personal Medico  */

/*  Inicio Seccion Elementos  */
$("#elementos").hide()
function eventoElementos(){
if(true){
        $("#elementos").show();
        $("#elementos").slideUp(0)
.slideDown(1000);
}
};
function finalizarListaElementos(){
$("#elementos").hide();
};
/*  Fin Seccion Elementos  */










