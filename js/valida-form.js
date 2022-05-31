window.onload = function() {

    //identifica campos
    var nombre = document.getElementById("nombre")
    var errNom = document.getElementById("errNom")
    var apellido = document.getElementById("apellido")
    var errApe = document.getElementById("errApe")
    var email = document.getElementById("email")
    var errMail = document.getElementById("errMail")
    var contra = document.getElementById("contra")
    var errContra = document.getElementById("errContra")
    var telefono = document.getElementById("telefono")
    var errTel = document.getElementById("errTel")
    var direccion = document.getElementById("direccion")
    var errDir = document.getElementById("errDir")
    var btn = document.getElementById("enviar")

    nombre.addEventListener("blur", valLongNom)
    nombre.addEventListener("focus", remErrNom)
    apellido.addEventListener("blur", valLongApe)
    apellido.addEventListener("focus", remErrApe)
    email.addEventListener("blur", valEmail)
    email.addEventListener("focus", remErrMail)
    contra.addEventListener("blur", valContra)
    contra.addEventListener("focus", remErrContra)
    telefono.addEventListener("blur", valTel)
    telefono.addEventListener("focus", remErrTel)
    direccion.addEventListener("blur", valDir)
    direccion.addEventListener("focus", remErrDir)
    btn.addEventListener("click",enviar)


    //manejo mensajes de error
    function showErrNom () {
        errNom.classList.remove("hidNom")
    }
    function remErrNom () {
        errNom.classList.add("hidNom")
    }
    function showErrApe () {
        errApe.classList.remove("hidApe")
    }
    function remErrApe () {
        errApe.classList.add("hidApe")
    }
    function showErrMail () {
        errMail.classList.remove("hidMail")
    }
    function remErrMail () {
        errMail.classList.add("hidMail")
    }
    function showErrContra () {
        errContra.classList.remove("hidContra")
    }
    function remErrContra () {
        errContra.classList.add("hidContra")
    }
    function showErrTel () {
        errTel.classList.remove("hidTel")
    }
    function remErrTel () {
        errTel.classList.add("hidTel")
    }
    function showErrDir () {
        errDir.classList.remove("hidDir")
    }
    function remErrDir () {
        errDir.classList.add("hidDir")
    }



    function valLongNom (e) {
        if (nombre.value.length < 3) {
            showErrNom()
        }
    }

    function valLongApe (e) {
        if (apellido.value.length < 3) {
            showErrApe()
        }
    }

    function valEmail (e) {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
        if (!emailRegex.test(email.value)) {
            showErrMail()
        }
    }

    function valContra (e) {
        nro = /[0-9]/
        letra = /[a-zA-Z]/
        if (contra.value.length < 8) {
            showErrContra()
        } else {
            if (!nro.test(contra.value)) {
                showErrContra()
                
            } else {
                if (!letra.test(contra.value)) {
                    showErrContra()
                } else {
                }
            }
        }
    }

    function valTel (e) {
        charInvTel = /[ -()a-zA-Z]/
        if (telefono.value.length < 7) {
            showErrTel()
        } else {
            if(charInvTel.test(telefono.value)) {
                showErrTel()
            }
        }
    }

    function valDir (e) {
        letraDir = /[a-zA-Z]/
        nroDir = /[0-9]/
        espDir = /[ ]/
        if (direccion.value.length < 5) {
            showErrDir()
        } else {
            if (!letraDir.test(direccion.value)) {
                showErrDir()
            } else {
                if (!nroDir.test(direccion.value)) {
                    showErrDir()
                } else {
                    if(!espDir.test(direccion.value)) {
                        showErrDir()
                    }
                } 
            }
        }
    }

    function enviar () {
        valLongNom()
        valLongApe()
        valEmail()
        valContra()
        valTel()
        valDir()
    }
}