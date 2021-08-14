/* Llamado a la lista de Personal Medico a traves de AJax */

$('#personalMedicoLista').click(function traerDatos(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET',"/Js/class/listaProfesionalesMedicos.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
        let datos = JSON.parse(this.responseText);
        let res= document.querySelector('#res');
            res.innerHTML='';

            for(let i of datos){
            res.innerHTML+=`
            <tr>
                <td>${i.nombre}</td>
                <td>${i.apellido}</td>
                <td>${i.profesion}</td>
                <td>${i.especialidad}</td>
            </tr>
            `

        }
        }
    }
});
/* Llamado a la lista de Personal Medico a traves de AJax */