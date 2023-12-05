function calcularValorFinal() {
    var precio = parseFloat(document.getElementById('precio').value);
    var impuesto = parseFloat(document.getElementById('impuesto').value);
    var descuento = parseFloat(document.getElementById('descuento').value);

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
    }

    var resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = mensaje;
}
