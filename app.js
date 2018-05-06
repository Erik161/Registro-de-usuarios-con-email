
//funcion de registro nuevo con firebase
function registrar(){
     var email = document.getElementById('email').value;
     var contrasena = document.getElementById('contrasena').value;
     firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ...
      });
    
}