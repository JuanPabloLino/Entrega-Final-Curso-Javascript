var modalWrap = null;

const showModal = (description )=>{
    if(modalWrap !== null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML =`

            <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <p>${description}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary mensajeModal" data-bs-dismiss="modal">Aceptar</button>
            </div>
            </div>
        </div>
        </div>
        `;
    document.body.append(modalWrap);

    var modal = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal.show()
}

const showModal2 = (description )=>{
    if(modalWrap !== null){
        modalWrap.remove();
    }
    modalWrap = document.createElement('div');
    modalWrap.innerHTML =`

            <div class="modal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-body">
                <p>${description}</p>
            </div>
                <div class="modal-footer">
                    <button id="botonConfirmarEliminar" type="submit" value="enter" class="btn btn-secondary mensajeModal" data-bs-dismiss="modal">Aceptar</button>
                    <button type="button"  class="btn btn-secondary mensajeModal" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
        </div>
        `;
    document.body.append(modalWrap);

    var modal2 = new bootstrap.Modal(modalWrap.querySelector('.modal'));
    modal2.show()
}