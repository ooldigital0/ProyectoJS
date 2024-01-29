// Objeto para almacenar los precios finales
var preciosFinales = [];

// Representación del producto como objeto
var producto = {
    precio: 0,
    impuesto: 0,
    descuento: 0
};

// Función para calcular el precio final
function calcularPrecioFinal(producto) {
    var impuestoAplicado = producto.precio * (producto.impuesto / 100);
    var descuentoAplicado = producto.precio * (producto.descuento / 100);
    var precioFinal = producto.precio + impuestoAplicado - descuentoAplicado;
    return precioFinal.toFixed(2);
}

// Función para validar que un valor sea un número mayor o igual a cero
function esNumeroValido(valor) {
    return !isNaN(valor) && valor >= 0;
}

// Función para calcular y mostrar el valor final del producto
function calcularValorFinal() {
    // Recoger los valores de los campos de entrada
    producto.precio = parseFloat(document.getElementById('productoPrecioInput').value);
    producto.impuesto = parseFloat(document.getElementById('productoImpuestoInput').value);
    producto.descuento = parseFloat(document.getElementById('productoDescuentoInput').value);

    var mensaje = '';

    // Validamos que los datos sean válidos
    if (
        !esNumeroValido(producto.precio) ||
        !esNumeroValido(producto.impuesto) ||
        !esNumeroValido(producto.descuento)
    ) {
        mensaje = 'Ingrese datos válidos.';
    } else {
        // Calculamos el precio final
        var precioFinal = calcularPrecioFinal(producto);
        mensaje = 'El valor final del producto es: $' + precioFinal;

        // Agregamos el precio final al array de preciosFinales
        preciosFinales.push(parseFloat(precioFinal));

        // Mostramos los precios finales en el DOM
        mostrarPreciosEnDOM();

        // Almacenamos precios finales en el LocalStorage
        guardarPreciosEnLocalStorage();
    }

    // Mostramos el mensaje con SweetAlert2
    Swal.fire({
        title: 'Resultado',
        text: mensaje,
        icon: 'info',
        confirmButtonText: 'OK'
    });
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

// Llamo a la función para cargar precios al cargar la página
cargarPreciosDesdeLocalStorage();
