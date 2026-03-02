const PedidoCard = ({
    pedido,
    getProveedorNombre,
    getMaterialNombre,
    calcularTotal,
    onCambiarEstado,
    onEliminar,
}) => {
    const getEstadoClase = (estado) => {
        switch (estado) {
            case "PENDIENTE":
                return "pedidos__estado--pendiente";
            case "CONFIRMADO":
                return "pedidos__estado--confirmado";
            case "ENTREGADO":
                return "pedidos__estado--entregado";
            default:
                return "";
        }
    };

    return (
        <div className="pedido__card">
            <div className="pedido__header">
                <div className="pedido__info">
                    <h4 className="pedido__titulo">Pedido #{pedido.id}</h4>
                    <p className="pedido__proveedor">
                        {getProveedorNombre(pedido.proveedorId)}
                    </p>
                </div>
                <span className={`pedidos__estado ${getEstadoClase(pedido.estado)}`}>
                    {pedido.estado}
                </span>
            </div>

            <div className="pedido__body">
                <p className="pedido__fecha">
                    <strong>Fecha:</strong> {pedido.fecha}
                </p>

                <div className="pedido__materiales">
                    <strong>Materiales ({pedido.materiales.length}):</strong>
                    <ul className="pedido__materiales-list">
                        {pedido.materiales.map((mat, idx) => (
                            <li key={idx}>
                                {getMaterialNombre(mat.materialId)} - {mat.cantidad} x S/{" "}
                                {mat.precioUnitario.toFixed(2)}
                            </li>
                        ))}
                    </ul>
                </div>

                {pedido.observaciones && (
                    <p className="pedido__observaciones">
                        <strong>Obs:</strong> {pedido.observaciones}
                    </p>
                )}

                <div className="pedido__total">
                    <strong>Total:</strong> S/ {calcularTotal(pedido).toFixed(2)}
                </div>
            </div>

            <div className="pedido__footer">
                <select
                    value={pedido.estado}
                    onChange={(e) => onCambiarEstado(pedido.id, e.target.value)}
                    className="pedido__select-estado"
                >
                    <option value="PENDIENTE">PENDIENTE</option>
                    <option value="CONFIRMADO">CONFIRMADO</option>
                    <option value="ENTREGADO">ENTREGADO</option>
                </select>

                <button
                    onClick={() => onEliminar(pedido.id)}
                    className="pedido__btn-eliminar"
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default PedidoCard;
