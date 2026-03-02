const MovimientoTable = ({ movimientos }) => {
    if (movimientos.length === 0) {
        return <p>No existen movimientos registrados.</p>;
    }

    return (
        <table className="movimientos__table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                {movimientos.map((mov) => (
                    <tr key={mov.id}>
                        <td>{mov.id}</td>
                        <td
                            className={
                                mov.tipo === "ENTRADA"
                                    ? "movimientos__tipo movimientos__tipo--entrada"
                                    : "movimientos__tipo movimientos__tipo--salida"
                            }
                        >
                            {mov.tipo}
                        </td>
                        <td>{mov.cantidad}</td>
                        <td>{mov.fecha}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MovimientoTable;