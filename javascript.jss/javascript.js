
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



const marcaSelect = document.getElementById('marca');
const modeloInput = document.getElementById('modelo');
const horasInput = document.getElementById('horas');
const carritoLista = document.getElementById('carrito');
const totalDiv = document.getElementById('total');

//elija del 1 al 4 para obtener los modelos
const cuatriciclos = [
  { marca: 'Yamaha', modelo: '1', precioHora: 2000 },
  { marca: 'Honda', modelo: '2', precioHora: 3000 },
  { marca: 'Kawasaki', modelo: '3', precioHora: 2000 },
  { marca: 'Suzuki', modelo: '4', precioHora: 2000 }
];


let carrito = [];


function mostrarCarrito() {
  carritoLista.innerHTML = '';
  totalDiv.textContent = '';

  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `Cuatriciclo: ${item.marca} ${item.modelo}, Horas: ${item.horas}, Precio por Hora: $${item.precioHora}, Total: $${item.total}`;
    carritoLista.appendChild(li);
  });

 
  const total = carrito.reduce((acc, item) => acc + item.total, 0);
  totalDiv.textContent = `Total del Alquiler: $${total}`;
}


function agregarAlCarrito() {
  const marca = marcaSelect.value;
  const modelo = modeloInput.value;
  const horas = parseInt(horasInput.value);

 
  const cuatricicloSeleccionado = cuatriciclos.find(cuatriciclo => cuatriciclo.marca === marca && cuatriciclo.modelo === modelo);

  if (cuatricicloSeleccionado && horas > 0) {
  
    const total = cuatricicloSeleccionado.precioHora * horas;


    carrito.push({
      marca: cuatricicloSeleccionado.marca,
      modelo: cuatricicloSeleccionado.modelo,
      horas: horas,
      precioHora: cuatricicloSeleccionado.precioHora,
      total: total
    });

   
    mostrarCarrito();
    limpiarInputs();
  }
}


function limpiarInputs() {
  modeloInput.value = '';
  horasInput.value = '';
}


mostrarCarrito();
