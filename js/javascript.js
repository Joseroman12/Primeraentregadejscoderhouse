
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






async function calcularPrecioPorHora(horasId, resultadoId) {
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

let carrito = [];
let cuatriciclos = [];

async function mostrarCarrito() {
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

async function agregarAlCarrito() {
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

    await mostrarCarrito();
    limpiarInputs();
  }
}

function limpiarInputs() {
  modeloInput.value = '';
  horasInput.value = '';
}

async function cargarCarrito() {
  try {
    const response = await fetch('cuatriciclos.json');
    cuatriciclos = await response.json();
    mostrarCarrito();
  } catch (error) {
    console.error('Error al cargar los cuatriciclos:', error);
  }
}

cargarCarrito();










const cart = document.getElementById("cart");

let Cuatriciclos = [];

async function fetchCuatriciclos() {
    try {
        const response = await fetch("cuatriciclos.json");
        Cuatriciclos = await response.json();
        displayCart();
    } catch (error) {
        console.error("Error fetching cuatriciclos:", error);
    }
}

function displayCart() {
    cart.innerHTML = "";
    Cuatriciclos.forEach(cuatriciclo => {
        const item = document.createElement("div");
        item.innerHTML = `
            <p>Marca: ${cuatriciclo.marca}</p>
            <p>Precio por Hora: $2000</p>
            <label for="hours">Horas:</label>
            <select id="hours-${cuatriciclo.id}">
                <option value="1">1 Hora</option>
                <option value="2">2 Horas</option>
                <option value="3">3 Horas</option>
                <option value="4">4 Horas</option>
                <option value="5">5 Horas</option>
            </select>
            <button onclick="addToCart(${cuatriciclo.id})">Agregar al carrito</button>
        `;
        cart.appendChild(item);
    });
}

function addToCart(id) {
    const selectedCuatriciclo = Cuatriciclos.find(cuatriciclo => cuatriciclo.id === id);
    if (selectedCuatriciclo) {
        const hoursSelect = document.getElementById(`hours-${selectedCuatriciclo.id}`);
        const selectedHours = parseInt(hoursSelect.value);
        const totalPrice = selectedHours * 2000;
        selectedCuatriciclo.inCart = true;
        selectedCuatriciclo.hours = selectedHours;
        selectedCuatriciclo.totalPrice = totalPrice;
        displayCart();
    }
}

// Cargar los datos iniciales y mostrar el carrito
fetchCuatriciclos();

