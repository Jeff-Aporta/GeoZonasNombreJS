function actualizarPaises() {
  document.getElementById("paises").innerHTML = GeoZonasNombre.paises()
    .map((x, i) => `<option ${i == 0 ? "selected" : ""}">${x}</option>`)
    .join("");
}

function actualizarBandera() {
  document.getElementById("flag").src = GeoZonasNombre.bandera(
    document.getElementById("paises").value
  );
}

function actualizarEstados() {
  document.getElementById("estados").innerHTML = GeoZonasNombre.estados(
    document.getElementById("paises").value
  )
    .map((x) => `<option>${x}</option>`)
    .join("");
}

function actualizarCiudades() {
  document.getElementById("ciudades").innerHTML = GeoZonasNombre.ciudades(
    document.getElementById("paises").value,
    document.getElementById("estados").value
  )
    .map((x) => `<option>${x}</option>`)
    .join("");
}

actualizarPaises();
actualizarBandera();
actualizarEstados();
actualizarCiudades();