function changeRol() {
    const verify = confirm("¿Estas seguro de cambiar a ofertante? No podras cambiar nuevamente a solicitante");

    if(verify == true) {
        $("#makeMeOffer").css("display", "none");
        $("#informationOffer").css("display", "block");
    }
}