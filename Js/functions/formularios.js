let pacienteArray = [];

/*Crear un div para alojar los datos de los pacientes que se crean*/
let divPaciente = document.createElement("div");
divPaciente.className += "estiloDivPaciente"
divPaciente.id = 'divPaciente' ;
document.body.appendChild(divPaciente);

let error = document.getElementById('formError');
let form = document.getElementById('form');
let botonLimpiar = document.getElementById('botonLimpiar');

$('#botonLimpiar').click(function(){
document.getElementById("btnAgregarPaciente").innerHTML="Guardar";
});
/*Crear un div para alojar los datos de los pacientes que se crean*/

/*Funcion para agregar pacientes a la plataforma */

function agregarPaciente(idPaciente,nombrePaciente,edadPaciente,obraSocialPaciente,patologiaPaciente){
/* LLamado a la funcion de validar antes de agreagar un pacietne nuevo */
if(validarForm() === true && identificarId() !== false){
pacienteArray = JSON.parse(localStorage.getItem('paciente')) || [];
var nuevoPaciente ={
idPaciente : idPaciente,
nombrePaciente : nombrePaciente,
edadPaciente: edadPaciente,
obraSocialPaciente : obraSocialPaciente,
patologiaPaciente : patologiaPaciente
};

/* Guardado de paciente nuevo en el array */
pacienteArray.push(nuevoPaciente);
formPaciente.reset();
localStorage.setItem('paciente', JSON.stringify(pacienteArray));
showModal("El paciente se guardó correctamente");
crearListaPaciente();
/* Guardado de paciente nuevo en el array */
};};
function getPacienteLista (){
return pacienteArray;
};

/*Crear la lista donde se muestra los pacientes guardados */
function crearListaPaciente(){
getPacienteArray();
var listaPaciente = getPacienteLista(),
tbody = document.querySelector("#listaPaciente tbody");
tbody.innerHTML = '';

    for(var i = 0 ; i < listaPaciente.length ; i++){
        var row = tbody.insertRow(i);
        idPacienteCell = row.insertCell(0),
        nombrePacienteCell = row.insertCell(1),
        edadPacienteCell = row.insertCell(2),
        obraSocialPacienteCell = row.insertCell(3),
        patologiaPacienteCell = row.insertCell(4),
        editarPacienteCell= row.insertCell(5),
        eliminarPacienteCell = row.insertCell(6),

        idPacienteCell.innerHTML = listaPaciente[i].idPaciente;
        nombrePacienteCell.innerHTML = listaPaciente[i].nombrePaciente;
        edadPacienteCell.innerHTML = listaPaciente[i].edadPaciente;
        obraSocialPacienteCell.innerHTML = listaPaciente[i].obraSocialPaciente;
        patologiaPacienteCell.innerHTML = listaPaciente[i].patologiaPaciente;

    /*Inicio Seccion Boton Editar */

        /*Crear el Boton Editar de manera dinamica para cada elemento de la lista */
        var editarButton = document.createElement("button");
        editarButton.textContent = "Editar";
        editarPacienteCell.appendChild(editarButton);
        /*Crear el Boton Editar de manera dinamica para cada elemento de la lista */

        /*Establecer la funcion del Boton editar para cada elemento de la lista y el LocalStorage */

        editarButton.onclick =function editarPaciente() {

            /*Obtener los datos del paciente que se quiere editar para facilitar la edicion del mismo */
        document.getElementById("btnAgregarPaciente").innerHTML="Editar";
        row = $(this).closest("tr");
        idPaciente = parseInt(row.find('td:eq(0)').text());
        nombrePaciente = row.find('td:eq(1)').text();
        edadPaciente =row.find('td:eq(2)').text();
        obraSocialPaciente =row.find('td:eq(3)').text();
        patologiaPaciente =row.find('td:eq(4)').text();
        obtenerDatos();
        function obtenerDatos(){
            $("#idPaciente").val(idPaciente);
            $("#nombrePaciente").val(nombrePaciente);
            $("#edadPaciente").val(edadPaciente);
            $("#obraSocialPaciente").val(obraSocialPaciente);
            $("#patologiaPaciente").val(patologiaPaciente);
        };
            /*Obtener los datos del paciente que se quiere editar para facilitar la edicion del mismo */

        let pacienteEditado = pacienteArray.filter(elemento => elemento.nombrePaciente !== nombrePaciente)
        localStorage.setItem('paciente', JSON.stringify(pacienteEditado));
};
        /*Establecer la funcion del Boton editar para cada elemento de la lista y el LocalStorage */
    /* Fin Seccion Boton Editar */

/*Inicio seccion Boton Eliminar */

    /*Crear el Boton Eliminar de manera dinamica para cada elemento de la lista */
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    eliminarPacienteCell.appendChild(deleteButton);
    getPacienteArray();
    /*Crear el Boton Eliminar de manera dinamica para cada elemento de la lista */

    /*Establecer la funcion del Boton eliminar para cada elemento de la lista y el LocalStorage */
    deleteButton.onclick = function (event){
        showModal2("¿Está seguro que desea eliminar este paciente?")
        let pacienteRow = event.target.parentNode.parentNode;
        var index = $("tbody").children().index(pacienteRow);

        if(document.getElementById('botonConfirmarEliminar').onclick = function(){
            pacienteArray.splice(index ,1);
            localStorage.setItem('paciente', JSON.stringify(pacienteArray));
            pacienteRow.remove();
    });};
    /*Establecer la funcion del Boton eliminar para cada elemento de la lista y el LocalStorage */

/* Fin seccion Boton Eliminar */
tbody.appendChild(row);};
    };

    /*Establecer la funcion que permite obtener los datos del ArrayPacientes */
function getPacienteArray() {
    var storedList = localStorage.getItem("paciente")
    if(storedList == null){
    pacienteArray = [];
    }else{
    pacienteArray = JSON.parse(storedList);
    }
    return pacienteArray;
};

/*Establecer la funcion que permite obtener los datos del ArrayPacientes */

function localStoragePacienteArray(listaPaciente){
    localStorage.setItem("paciente",JSON.stringify(listaPaciente));
};


/* Mostrar Lista de Pacientes en pantalla desde la primera sesion*/
function mostrarListaPacientePantalla() {
    if(true){
            $("#seccionListaPaciente").show();
            $('#seccionListaPaciente').slideUp(0)
    .slideDown(1000);
    DOM()
    function DOM(){
        let pacienteObjArray = JSON.parse(localStorage.getItem("paciente")) || "";
        pacienteObjArray.forEach(function(arrayElement){
        crearListaPaciente(arrayElement);
        })}}}
/* Mostrar Lista de Pacientes en pantalla desde la primera sesion*/

