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