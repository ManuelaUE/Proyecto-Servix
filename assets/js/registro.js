function registro() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var cel = document.getElementById("cel").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    if(nombre) {
        if(apellido) {
            if(cel) {
                if(correo) {
                    if(contrasena) {
                        alert("El usuario ha sido registrado exitosamente");
                        window.location.href = "/home.html";
                    } else {
                        alert("La contraseña es requerida");
                    }
                } else {
                    alert("El correo es requerido");
                }
            } else {
                alert("El telefono celular es requerido");
            }
        } else {
            alert("El apellido es requerido");
        }
    } else {
        alert("El nombre es requerido");
    }
}