import PedidoCard from "./PedidoCard";
import PedidosEmptyState from "./PedidosEmptyState";

const PedidosList = ({
    pedidos,
    proveedores,
    materiales,
    calcularTotal,
    onCambiarEstado,
    onEliminar,
}) => {
    const getProveedorNombre = (proveedorId) => {
        const proveedor = proveedores.find((p) => p.id === proveedorId);
        return proveedor ? proveedor.nombre : "No encontrado";
    };

    const getMaterialNombre = (materialId) => {
        const material = materiales.find((m) => m.id === materialId);
        return material ? material.nombre : "No encontrado";
    };

    if (pedidos.length === 0) {
        return <PedidosEmptyState />;
    }

    return (
        <div className="pedidos__lista">
            <h3 className="pedidos__lista-title">Pedidos Activos</h3>
            <div className="pedidos__grid">
                {pedidos.map((pedido) => (
                    <PedidoCard
                        key={pedido.id}
                        pedido={pedido}
                        getProveedorNombre={getProveedorNombre}
                        getMaterialNombre={getMaterialNombre}
                        calcularTotal={calcularTotal}
                        onCambiarEstado={onCambiarEstado}
                        onEliminar={onEliminar}
                    />
                ))}
            </div>
        </div>
    );
};

export default PedidosList;
