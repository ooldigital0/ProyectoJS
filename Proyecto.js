// Array para almacenar los precios finales
var preciosFinales = [];

function calcularValorFinal() {
    var precio = parseFloat(prompt("Ingrese el precio del producto"));
    var impuesto = parseFloat(prompt("Ingrese el impuesto en porcentaje"));
    var descuento = parseFloat(prompt("Ingrese el descuento en porcentaje"));

    function calcularPrecioFinal(precio, impuesto, descuento) {
        var impuestoAplicado = precio * (impuesto / 100);
        var descuentoAplicado = precio * (descuento / 100);
        var precioFinal = precio + impuestoAplicado - descuentoAplicado;
        return precioFinal.toFixed(2);
    }

    var mensaje = '';
    if (precio <= 0) {
        mensaje = 'El precio del producto debe ser mayor que cero.';
    } else {
        var precioFinal = calcularPrecioFinal(precio, impuesto, descuento);
        mensaje = 'El valor final del producto es: $' + precioFinal;

        // Agregar el precio final al array de preciosFinales
        preciosFinales.push(parseFloat(precioFinal));

        // Mostrar los precios finales en el DOM
        mostrarPreciosEnDOM();

        // Almacenar precios finales en el LocalStorage
        guardarPreciosEnLocalStorage();
    }

    alert(mensaje);
    console.log(mensaje);
}

// Función para mostrar los precios finales en el DOM
function mostrarPreciosEnDOM() {
    var preciosDiv = document.getElementById('preciosDiv');
    if (!preciosDiv) {
        preciosDiv = document.createElement('div');
        preciosDiv.id = 'preciosDiv';
        document.body.appendChild(preciosDiv);
    }

    preciosDiv.innerHTML = "<p>Precios Finales:</p><p>" + preciosFinales.join(', ') + "</p>";
}

// Función para guardar precios finales en el LocalStorage
function guardarPreciosEnLocalStorage() {
    localStorage.setItem('preciosFinales', JSON.stringify(preciosFinales));
}

// Función para cargar precios finales desde el LocalStorage al array
function cargarPreciosDesdeLocalStorage() {
    var preciosGuardados = localStorage.getItem('preciosFinales');
    if (preciosGuardados) {
        preciosFinales = JSON.parse(preciosGuardados);
        mostrarPreciosEnDOM();
    }
}

// Llamar a la función para cargar precios al cargar la página
cargarPreciosDesdeLocalStorage();
