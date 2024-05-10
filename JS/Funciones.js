let map;

async function initMap() {
  //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    });
}

initMap();

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




        $(document).ready(function () {

            function validarForm() {
                var isValid = true;
                var mensaje = "";
                var nombre = $("#nombre").val().trim().length; //una forma de obtención
                //var nombre =  document.getElementById("nombre").value; //Segunda forma de obtención
                var apellido = $("#apellido").val().trim().length;
                var email = $("#email").val().trim().length;

                if (nombre == 0) {
                    mensaje += "-Debe ingresar nombre\n";
                }
                if (apellido == 0) {
                    mensaje += "-Debe ingresar apellido\n";
                }
                if (email == 0) {
                    mensaje += "-Debe ingresar correo\n";
                }

                if (mensaje.trim().length > 0) {
                    alert(mensaje);
                    isValid = false;
                }
                return isValid;

            }

            $("#formulario").submit(function (event) {
                if (!validarForm()) {
                    event.preventDefault(); //no envía formulario
                } else {
                    agregarRegistro();
                    limpiar();
                    event.preventDefault();
                }
            });

            function limpiar() {
                $("#nombre").val("");
                $("#apellido").val("");
                $("#email").val("");
                $("#textarea").val("");

            }
        });