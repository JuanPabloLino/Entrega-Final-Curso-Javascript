/* Funcion para validar el formulario */
$("#btnAgregarPaciente").click();
    function validarForm(){
        var idPaciente = $("#idPaciente").val();
        var nombrePaciente = $("#nombrePaciente").val();
        var edadPaciente = $("#edadPaciente").val();
        var obraSocialPaciente = $("#obraSocialPaciente").val();
        var patologiaPaciente = $("#patologiaPaciente").val();
        if(nombrePaciente == ""){
            let text = "Falta el nombre del paciente";
            showModal(text);
            return false;
        }
        if(idPaciente === ""){
            let text = "Falta el id del paciente";
            showModal(text);
            return false;
        }
        if(edadPaciente.length < 2  ){
            let text ="Falta la Edad del paciente";
            showModal(text);
            return false;
        }
        if(obraSocialPaciente.length < 2 ){
            let text ="Falta la obra social del paciente";
            showModal(text);
            return false;
        }
        if(patologiaPaciente.length < 2  ){
            let text ="Falta la patologia del paciente";
            showModal(text);
            return false;
        }
        return true
        };
/* Funcion para validar el formulario */

/* Funcion para evitar la duplicación de Id */
function identificarId(){
            for(let i = 0; i < pacienteArray.length; i++){
                if(pacienteArray[i].idPaciente === parseInt($("#idPaciente").val())){
                    let text= "El Id ya existe."
                showModal(text);
                return false
            }}};

/* Funcion para evitar la duplicación de Id */



