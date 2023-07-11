
function obtenerInformacionAuto() {
  let autoSeleccionado = prompt("Escribe el numero del 1 al 4 y obtendras los diferentes modelos de autos  \n1)Ford \n2)Volkswagen \n3)Toyota' \n4)Jeep");

 

  switch (autoSeleccionado) {
    case "1":
      marca = "Ford"
      modelo = "Raptor";
      color = "Blanco";
      año = 2023;
      Km = "3.000";
      break;
    case "2":
      marca = "Volkswagen"
      modelo = "Amarok";
      color = "Azul";
      año = 2022;
      Km = "8.000";
      break;
    case "3":
      marca = "Toyota"
      modelo = "Hilux";
      color = "Rojo";
      año = 2023;
      km = "4.500";
      break;
      case "4":
          marca = "Jeep"
          modelo = "Renegade";
          color = "Negro";
          año = 2022;
          km = "4.800";
          break;
    default:
      alert("No entendimos lo ingresado o el automovil que buscas no esta disponible")
  }

  document.getElementById("informacion-auto").innerHTML = "<br>Marca: " +  marca + "<br>Modelo: " + modelo + "<br>Color: " + color + "<br>Año: " + año  + "<br>Km "+  Km;
} 

obtenerInformacionAuto()





function calcularPrecioPorHora(horasId, resultadoId) {
  var horas = parseInt(document.getElementById(horasId).value);
  var resultado = document.getElementById(resultadoId);
  var precioPorHora = 2000;
  var precioTotal = horas * precioPorHora;

  resultado.innerHTML = "El precio total es: $" + precioTotal;
}