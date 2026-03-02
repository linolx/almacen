import Input from "../common/Input";
import Button from "../common/Button";
import Select from "../common/Select";
import familiasDisponibles from "../../data/familias.mock";

const MaterialForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form className="inventario__form" onSubmit={handleSubmit}>
            <div className="inventario__field">
                <Select
                    label="Familia"
                    name="familia"
                    value={formData.familia}
                    onChange={handleChange}
                    options={familiasDisponibles}
                />
            </div>

            <div className="inventario__field">
                <Input
                    label="Nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>

            <div className="inventario__field">
                <Input
                    label="Unidad"
                    name="unidad"
                    value={formData.unidad}
                    onChange={handleChange}
                />
            </div>

            <div className="inventario__field">
                <Input
                    label="Stock Inicial"
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                />
            </div>

            <div className="inventario__field">
                <Input
                    label="Precio Unitario"
                    type="number"
                    name="precio"
                    value={formData.precio}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                />
            </div>

            <Button type="submit">Guardar</Button>
        </form>
    );
};

export default MaterialForm;