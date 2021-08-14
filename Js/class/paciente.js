
if(btnAgregarPaciente.textContent === "Guardar" ){
    $('#btnAgregarPaciente').click(function(){
    crearListaPaciente();
    let sId = parseInt(document.querySelector("#idPaciente").value),
        sNombre = document.querySelector("#nombrePaciente").value,
        sEdad = document.querySelector("#edadPaciente").value,
        sObraSocial = document.querySelector("#obraSocialPaciente").value,
        sPatologia = document.querySelector("#patologiaPaciente").value;
        document.getElementById("btnAgregarPaciente").innerHTML="Guardar";
    agregarPaciente(sId,sNombre,sEdad,sObraSocial,sPatologia);
    crearListaPaciente();
    })};



