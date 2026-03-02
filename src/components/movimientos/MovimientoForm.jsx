import Select from "../common/Select";
import NumberInput from "../common/NumberInput";
import Button from "../common/Button";

const MovimientoForm = ({
    materiales,
    formData,
    handleChange,
    handleSubmit,
}) => {
    return (
        <form className="movimientos__form" onSubmit={handleSubmit}>
            <div className="movimientos__field">
                <Select
                    label="Material"
                    name="materialId"
                    value={formData.materialId}
                    onChange={handleChange}
                    options={materiales}
                    valueKey="id"
                    labelKey="nombre"
                />
            </div>

            <div className="movimientos__field">
                <NumberInput
                    label="Cantidad"
                    name="cantidad"
                    value={formData.cantidad}
                    onChange={handleChange}
                    min={1}
                    required
                />
            </div>

            <Button type="submit">Guardar</Button>
        </form>
    );
};

export default MovimientoForm;