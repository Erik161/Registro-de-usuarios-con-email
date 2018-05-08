
//funcion de registro nuevo con firebase
function registrar(){
     var email = document.getElementById('email').value;
     var contrasena = document.getElementById('contrasena').value;
     firebase.auth().createUserWithEmailAndPassword(email, contrasena)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });

    
//funcion para que accedan los usuarios registrados
    function ingreso(){
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }

    
    function observador(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('usuario activo');
                aparecer();
              // User is signed in.
              var displayName = user.displayName;
              var email = user.email;
              var emailVerified = user.emailVerified;
              var photoURL = user.photoURL;
              var isAnonymous = user.isAnonymous;
              var uid = user.uid;
              var providerData = user.providerData;
              // ...
            } else {
                console.log('usuario no activo');
              // User is signed out.
              // ...
            }
          });
          
    }

    observador();

    function aparecer(){
        var contenido = document.getElementById('contenido');
        contenido.innerHTML = "solo lo ve usuario activo"
    }
    
}
