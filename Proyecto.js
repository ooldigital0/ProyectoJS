function calcularValorFinal() {
    // Obtener el precio, impuesto y descuento mediante prompt()
    var precio = parseFloat(prompt("Ingrese el precio del producto"));
    var impuesto = parseFloat(prompt("Ingrese el impuesto en porcentaje"));
    var descuento = parseFloat(prompt("Ingrese el descuento en porcentaje"));

    // Función para calcular el precio final
    function calcularPrecioFinal(precio, impuesto, descuento) {
        var impuestoAplicado = precio * (impuesto / 100);
        var descuentoAplicado = precio * (descuento / 100);
        var precioFinal = precio + impuestoAplicado - descuentoAplicado;
        return precioFinal.toFixed(2);
    }

    // Validar el precio y calcular el precio final
    var mensaje = '';
    if (precio <= 0) {
        mensaje = 'El precio del producto debe ser mayor que cero.';
    } else {
        var precioFinal = calcularPrecioFinal(precio, impuesto, descuento);
        mensaje = 'El valor final del producto es: $' + precioFinal;
    }

    // Mostrar el resultado utilizando alert() y console.log()
    alert(mensaje);
    console.log(mensaje);
}
