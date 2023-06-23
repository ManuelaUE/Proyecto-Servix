function login() {
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    if(correo) {
        if(contrasena) {
            window.location.href = "/home.html"
        } else {
            alert("La contraseña es requerida");
        }
    } else {
        alert("El correo electronico es requerido");
    }
}