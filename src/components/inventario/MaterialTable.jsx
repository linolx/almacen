import MaterialRow from "./MaterialRow";

const MaterialTable = ({ materiales }) => {
    return (
        <table className="inventario__table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Familia</th>
                    <th>Nombre</th>
                    <th>Unidad</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {materiales.map((material) => (
                    <MaterialRow key={material.id} material={material} />
                ))}
            </tbody>
        </table>
    );
};

export default MaterialTable;