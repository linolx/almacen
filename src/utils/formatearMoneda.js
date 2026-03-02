export const formatearMoneda = (valor) => {
    if (valor === undefined || valor === null || isNaN(valor)) {
        return "S/D";
    }
    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(valor);
};

export const formatearNumero = (valor) => {
    if (valor === undefined || valor === null || isNaN(valor)) {
        return "0";
    }
    return valor.toLocaleString("es-PE", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });
};
