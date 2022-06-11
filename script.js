const fields = document.querySelectorAll("[required]")

function ValidateField(field){
    // lógica para verificar se existem erros
function verifyErrors() {
    let foundError = false;

    for(const error in field.validity) {
        // se não for customError
        // então verifica se tem erro
        if(/*error != "customError" &&*/ field.validity[error] && !field.validity.valid) {
            foundError = error
        }
    }

    return foundError;
}

return verifyErrors()

}

function customValidation(event) {

    // eliminar o bubble
    event.preventDefault() 

    const field = event.target 

    // lógica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;


        for(const error in field.validity) {
            // se não for customError
            // então verifica se tem erro
            if(/*error != "customError" &&*/ field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        }

        return foundError;
    }

    const error = verifyErrors()
    console.log("Error Exists", error)

    const spanError = field.parentNode.querySelector("span.error")

    if(error) {
        
        spanError.classList.add("active")
        spanError.innerHTML = "Required field"

    }else{
        spanError.classList.remove("active")
        spanError.innerHTML = ""
    }
    
    /* if(error) {
    // change required message
    field.setCustomValidity("Required field")
    } else{
        field.setCustomValidity("")
    } */
}

// console log fields
for ( field of fields ) {
    field.addEventListener("invalid", customValidation)
    field.addEventListener("blur", customValidation)
}