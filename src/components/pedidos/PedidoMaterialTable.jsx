const PedidoMaterialTable = ({ materiales, getMaterialNombre, onEliminar }) => {
    if (materiales.length === 0) {
        return null;
    }

    return (
        <div className="pedido-form__materiales-tabla">
            <table className="pedido-form__table">
                <thead>
                    <tr>
                        <th>Material</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Subtotal</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {materiales.map((mat, index) => (
                        <tr key={index}>
                            <td>{getMaterialNombre(mat.materialId)}</td>
                            <td>{mat.cantidad}</td>
                            <td>S/ {mat.precioUnitario.toFixed(2)}</td>
                            <td>S/ {(mat.cantidad * mat.precioUnitario).toFixed(2)}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() => onEliminar(index)}
                                    className="pedido-form__btn-eliminar"
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PedidoMaterialTable;
