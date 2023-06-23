function cargarcategoria() {
    var categoria = window.location.href.split("?").pop();
    categoria = categoria.split("=").pop();

    switch (categoria) {
        case "obrasyreformasdehogar":
            document.getElementById("obrasyreformasdehogar").style.display = "block";
            break;

        case "redelectrica":
            document.getElementById("redelectrica").style.display = "block";
            break;

        case "serviciostecnicos":
            document.getElementById("serviciostecnicos").style.display = "block";
            break;
    
        default:
            break;
    }
}

function mostrarVendedores() {
    window.location.href = "/vendors.html";
}

cargarcategoria();