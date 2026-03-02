export const pedidosMock = [
    {
        id: 1,
        proveedorId: 1,
        fecha: "2026-02-15",
        estado: "PENDIENTE",
        materiales: [
            { materialId: 1, cantidad: 100, precioUnitario: 18.50 },
        ],
        observaciones: "Entrega urgente",
    },
    {
        id: 2,
        proveedorId: 4,
        fecha: "2026-02-20",
        estado: "CONFIRMADO",
        materiales: [
            { materialId: 15, cantidad: 2, precioUnitario: 1650.00 },
            { materialId: 16, cantidad: 500, precioUnitario: 1.50 },
        ],
        observaciones: "",
    },
];

export default pedidosMock;
