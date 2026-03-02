import { useState, useEffect } from "react";
import pedidosMock from "../data/pedidos.mock";

const usePedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        try {
            const pedidosGuardados = localStorage.getItem("pedidos");
            if (pedidosGuardados) {
                const parsed = JSON.parse(pedidosGuardados);
                if (Array.isArray(parsed)) {
                    setPedidos(parsed);
                } else {
                    setPedidos(pedidosMock);
                    localStorage.setItem("pedidos", JSON.stringify(pedidosMock));
                }
            } else {
                setPedidos(pedidosMock);
                localStorage.setItem("pedidos", JSON.stringify(pedidosMock));
            }
        } catch (error) {
            console.error("Error al cargar pedidos:", error);
            setPedidos(pedidosMock);
            localStorage.setItem("pedidos", JSON.stringify(pedidosMock));
        }
    }, []);

    useEffect(() => {
        if (pedidos.length > 0) {
            try {
                localStorage.setItem("pedidos", JSON.stringify(pedidos));
            } catch (error) {
                console.error("Error al guardar pedidos:", error);
            }
        }
    }, [pedidos]);

    const agregarPedido = (nuevoPedido) => {
        const pedidoConId = {
            ...nuevoPedido,
            id: pedidos.length > 0 ? Math.max(...pedidos.map((p) => p.id)) + 1 : 1,
            fecha: new Date().toLocaleDateString("es-PE"),
            estado: "PENDIENTE",
        };
        setPedidos([...pedidos, pedidoConId]);
        return pedidoConId;
    };

    const actualizarPedido = (id, pedidoActualizado) => {
        setPedidos(
            pedidos.map((p) => (p.id === id ? { ...p, ...pedidoActualizado } : p))
        );
    };

    const eliminarPedido = (id) => {
        setPedidos(pedidos.filter((p) => p.id !== id));
    };

    const cambiarEstado = (id, nuevoEstado) => {
        actualizarPedido(id, { estado: nuevoEstado });
    };

    const calcularTotal = (pedido) => {
        return pedido.materiales.reduce(
            (total, item) => total + item.cantidad * item.precioUnitario,
            0
        );
    };

    return {
        pedidos,
        agregarPedido,
        actualizarPedido,
        eliminarPedido,
        cambiarEstado,
        calcularTotal,
    };
};

export default usePedidos;
