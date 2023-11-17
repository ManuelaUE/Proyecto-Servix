
function mostrarimagen(input) {
    if (input.files && input.files[0]) {
        let leer = new FileReader();
        leer.onload = function(e) {
            document.getElementById("imagenPerfil").setAttribute("src", e.target.result);
        }
        leer.readAsDataURL(input.files[0]);
    }
}


function emailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  document.getElementById("myForm").addEventListener("submit", function (event) {
      // Valida el campo Nombre
      var name = document.getElementsByName("name")[0].value;
      if (name === "") {
          document.getElementById("name-error").textContent = "Campo obligatorio";
          event.preventDefault();
      } else {
          document.getElementById("name-error").textContent = "";
      }
  
      // Valida el campo Apellido
      var lastName = document.getElementsByName("lastName")[0].value;
      if (lastName === "") {
          document.getElementById("lastName-error").textContent = "Campo obligatorio";
          event.preventDefault();
      } else {
          document.getElementById("lastName-error").textContent = "";
      }
  
      // Valida el campo Correo electrónico
      var email = document.getElementsByName("email")[0].value;
      if (email === "") {
          document.getElementById("email-error").textContent = "Campo obligatorio";
          event.preventDefault();
      } else if (!emailValid(email)) {
          document.getElementById("email-error").textContent = "Correo electrónico no válido";
          event.preventDefault();
      } else {
          document.getElementById("email-error").textContent = "";
      }
  
    // Valida el campo Teléfono
    var phone = document.getElementsByName("phone")[0].value;
    if (phone === "") {
        document.getElementById("phone-error").textContent = "Campo obligatorio";
        event.preventDefault();
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById("phone-error").textContent = "Debe tener 10 dígitos numéricos";
        event.preventDefault();
    } else {
        document.getElementById("phone-error").textContent = "";
    }
});
// Función para validar el formulario
function validarFormulario() {
    // Restablecer los mensajes de error
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = "";
    }

    // Validar los campos
    var documentType = document.getElementById("documentType");
    if (documentType.value === "") {
        document.getElementById("documentType-error").textContent = "Selecciona un tipo de documento";
    }
    
    

    var documentNumber = document.getElementById("documentNumber");
    if (documentNumber.value === "") {
        document.getElementById("documentNumber-error").textContent = "Campo obligatorio";
    }

    var dateBorn = document.getElementById("dateBorn");
    if (dateBorn.value === "") {
        document.getElementById("dateBorn-error").textContent = "Campo obligatorio";
    }

    var country = document.getElementById("country");
    if (country.value === "0") {
        document.getElementById("country-error").textContent = "Selecciona un país";
    }

    var state = document.getElementById("state");
    if (state.value === "0") {
        document.getElementById("state-error").textContent = "Selecciona un estado";
    }

    var city = document.getElementById("city");
    if (city.value === "0") {
        document.getElementById("city-error").textContent = "Selecciona una ciudad";
    }

    var address = document.getElementById("address");
    if (address.value === "") {
        document.getElementById("address-error").textContent = "Campo obligatorio";
    }

    var documentA = document.getElementById("documentA");
    if (documentA.value === "") {
        document.getElementById("documentA-error").textContent = "Sube una foto del documento lado A";
    }

    var documentB = document.getElementById("documentB");
    if (documentB.value === "") {
        document.getElementById("documentB-error").textContent = "Sube una foto del documento lado B";
    }

    var photoUser = document.getElementById("photoUser");
    if (photoUser.value === "") {
        document.getElementById("photoUser-error").textContent = "Sube una selfie";
    }

    // Verificar si hay mensajes de error
    var hasErrors = document.querySelectorAll(".error-message:not(:empty)").length > 0;

    // Si no hay errores, puedes enviar el formulario
    if (!hasErrors) {
        // Aquí puedes enviar el formulario al servidor
        // Puedes agregar la lógica de envío de datos aquí
        alert("Formulario 'Hacerme ofertante' enviado con éxito");
    }
}

function changeRol() {
    const verify = confirm("¿Estás seguro de cambiar a ofertante? No podrás cambiar nuevamente a solicitante");

    if (verify) {
        $("#makeMeOffer").css("display", "none");
        $("#informationOffer").css("display", "block");
    }
}
