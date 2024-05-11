
/*
// Mostrar el modal de detalles
function mostrarDetalles(getElementById) {
  document.getElementById('detallesModal').style.display = 'block';
}

// Cerrar el modal de detalles
function cerrarDetalles() {
  document.getElementById('detallesModal').style.display = 'none';
}*/

function mostrarDetalles(id) {
  var modal = document.getElementById(id);
  modal.style.display = "block";
}

function cerrarDetalles(id) {
  var modal = document.getElementById(id);
  modal.style.display = "none";
}
//validador de rut
var Fn = {
	// Valida el rut con su cadena completa "XXXXXXXX-X"
	validaRut : function (rutCompleto) {
		if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
			return false;
		var tmp 	= rutCompleto.split('-');
		var digv	= tmp[1]; 
		var rut 	= tmp[0];
		if ( digv == 'K' ) digv = 'k' ;
		return (Fn.dv(rut) == digv );
	},
	dv : function(T){
		var M=0,S=1;
		for(;T;T=Math.floor(T/10))
			S=(S+T%10*(9-M++%6))%11;
		return S?S-1:'k';
	}
}

            function validarForm() {
                var isValid = true;
                var mensaje = "";
                var rutCompleto = $("#rut").val().trim();
                var rut = $("#rut").val().trim().length;
                var nombre = $("#nombre").val().trim().length;
                var apellido = $("#apellido").val().trim().length;
                var email = $("#correo").val().trim().length;
                var fono = $("#fono").val().trim().length;

                if (rut == 0) {
                  mensaje += "-Debe ingresar Rut\n";
                }
                else if (Fn.validaRut(rutCompleto)) {
                  mensaje += "-Debe ingresar Rut valido\n";
                }
                if (nombre == 0) {
                    mensaje += "-Debe ingresar nombre\n";
                }
                if (apellido == 0) {
                    mensaje += "-Debe ingresar apellido\n";
                }
                if (email == 0) {
                    mensaje += "-Debe ingresar correo\n";
                }
                if (fono == 0) {
                  mensaje += "-Debe ingresar Fono\n";
                }
                if (mensaje.trim().length > 0) {
                    alert(mensaje);
                    isValid = false;
                }
                return isValid;

            }
            function limpiar() {
                $("#nombre").val("");
                $("#apellido").val("");
                $("#email").val("");
                $("#textarea").val("");
            }