
function check(){

    /*Declaramos en variables todos los elementos introducidos en el form*/
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var clave = document.getElementById('clave');
    var confirmacion = document.getElementById('confirmacion');

    /*Declaramos los elementos que indicarán el error en caso de que sea necesario*/
    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');
    var errorClave = document.getElementById('errorClave');
    var errorConfirmacion = document.getElementById('errorConfirmacion');

    /*Inicializamos los booleanos que indican si están bien las respuestas introducidas*/
    var okNombre = true;
    var okEmail = true;
    var okClave = true;
    var okConfirmacion = true;

    /*Aquí tenemos las variables que contienen los formatos que deberian tener las respuestas*/
    var nombreValido =  /^[A-Za-z\s]+$/;
    var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var claveValida = /.{8,}/ ;
   
   /*Con esta parte comprobamos si el nombre válido*/
    if(nombre.value == null || nombre.value.length == 0 ){
        nombre.classList.remove("estaBien");
        errorNombre.innerHTML = "Rellene este campo";
        nombre.classList.add("estaMal");
        okNombre = false; 
    }
    else{
        if(nombreValido.test(nombre.value)){
            nombre.classList.remove("estaMal");
            errorNombre.innerHTML = "";
            nombre.classList.add("estaBien");
            okNombre = true;
        }
        else{
            nombre.classList.remove("estaBien");
            errorNombre.innerHTML = "Nombre inválido";
            nombre.classList.add("estaMal");
            okNombre = false;
        }
    }

    /*Con esta parte comprobamos si el email válido*/
    if(email.value == null || email.value.length == 0 ){
        email.classList.remove("estaBien");
        errorEmail.innerHTML = "Rellene este campo";
        email.classList.add("estaMal");
        okEmail = false; 
    }
    else{
        if(emailValido.test(email.value)){
            email.classList.remove("estaMal");
            errorEmail.innerHTML = "";
            email.classList.add("estaBien");
            okEmail = true;
        }
        else{
            email.classList.remove("estaBien");
            errorEmail.innerHTML = "Email inválido";
            email.classList.add("estaMal");
            okEmail = false;
        }
    }

    /*Con esta parte comprobamos si clave es válida*/
    if(clave.value == null || clave.value.length == 0 ){
        clave.classList.remove("estaBien");
        errorClave.innerHTML = "Rellene este campo";
        clave.classList.add("estaMal");
        okClave = false; 
    }
    else{
        if(claveValida.test(clave.value)){
            clave.classList.remove("estaMal");
            errorClave.innerHTML = "";
            clave.classList.add("estaBien");
            okClave = true;
        }
        else{
            clave.classList.remove("estaBien");
            errorClave.innerHTML = "La clave debe tener más de 8 caracteres";
            clave.classList.add("estaMal");
            okClave = false;
        }
    }
    
    /*Con esta parte comprobamos si la clave de confirmación coincide con la introducida anteriormente*/
    if(confirmacion.value == null || confirmacion.value.length == 0 ){
        confirmacion.classList.remove("estaBien");
        errorConfirmacion.innerHTML = "Rellene este campo";
        confirmacion.classList.add("estaMal");
        okConfirmacion = false; 
    }
    else{
       
        if(clave.value === confirmacion.value){
            confirmacion.classList.remove("estaMal");
            errorConfirmacion.innerHTML = "";
            confirmacion.classList.add("estaBien");
            okConfirmacion = true;
        }
        else{
            confirmacion.classList.remove("estaBien");
            errorConfirmacion.innerHTML = "Las contraseñas no coinciden";
            confirmacion.classList.add("estaMal");
            okConfirmacion = false;
        }
    }

    /*Si todos los campos introducidos son correctos se manda el aviso de que es correcto y se devuelve true
    Si no todos son correctos no se envia el mensaje de alerta y se devuelve false*/

    if(okNombre && okEmail && okClave && okConfirmacion)
        alert("La inscripción se ha realizado correctamente.");
    
    return okNombre && okEmail && okClave && okConfirmacion;
}