export const calcularStock = (materiales) => {
    return materiales.reduce((total, material) => {
        const precio = parseFloat(material.precio) || 0;
        const stock = parseFloat(material.stock) || 0;
        return total + (stock * precio);
    }, 0);
};

export const calcularStockMaterial = (material) => {
    const precio = parseFloat(material.precio) || 0;
    const stock = parseFloat(material.stock) || 0;
    return stock * precio;
};

export default calcularStock;
