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
    }

    alert(mensaje);
    console.log(mensaje);
}

// Función para mostrar los precios finales guardados en el array
function mostrarPreciosFinales() {
    console.log("Precios Finales:");
    console.log(preciosFinales);
}
