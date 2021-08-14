var usuarioActual;

  const cargarUsuario = (event) => {
  var txtUserName = document.getElementById("txtUserName");
  let nombreDeUsuario = event.target.value;
  usuarioActual = new Usuario(nombreDeUsuario, []);

mostrarNombreUsuario(usuarioActual);


};
