var mapa = L.map("contenedor").setView([6.2442, -75.5812], 11);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(mapa);

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latlng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        mapa.setView(latlng, 15); 
        L.marker(latlng).addTo(mapa); 
    }, function (error) {
        console.error("Error obteniendo la ubicación: ", error);
    });
} else {
    console.log("Geolocalización no está disponible en este navegador.");
}