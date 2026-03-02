import { useEffect, useState } from "react";

const usePedidosMetrics = (pedidos) => {
    const [stats, setStats] = useState({
        totalPedidos: 0,
        pendientes: 0,
        confirmados: 0,
        entregados: 0,
        montoTotal: 0,
    });

    useEffect(() => {
        const totalPedidos = pedidos.length;

        const pendientes = pedidos.filter(
            (ped) => ped.estado === "PENDIENTE"
        ).length;

        const confirmados = pedidos.filter(
            (ped) => ped.estado === "CONFIRMADO"
        ).length;

        const entregados = pedidos.filter(
            (ped) => ped.estado === "ENTREGADO"
        ).length;

        const montoTotal = pedidos.reduce((acc, pedido) => {
            const subTotal = pedido.materiales.reduce((sum, mat) => {
                return sum + (mat.cantidad * mat.precioUnitario);
            }, 0);
            return acc + subTotal;
        }, 0);

        setStats({
            totalPedidos,
            pendientes,
            confirmados,
            entregados,
            montoTotal,
        });
    }, [pedidos]);

    return stats;
};

export default usePedidosMetrics;
