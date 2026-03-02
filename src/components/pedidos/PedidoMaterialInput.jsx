import Select from "../common/Select";
import Button from "../common/Button";

const PedidoMaterialInput = ({
    materiales,
    materialActual,
    onChangeFormulario,
    onAgregar,
}) => {
    return (
        <div className="pedido-form__material-inputs">
            <div className="pedido-form__field">
                <Select
                    label="Material"
                    name="materialId"
                    value={materialActual.materialId}
                    onChange={onChangeFormulario}
                    options={materiales}
                    valueKey="id"
                    labelKey="nombre"
                />
            </div>

            <div className="pedido-form__field">
                <label className="form__label">Cantidad</label>
                <input
                    type="number"
                    name="cantidad"
                    value={materialActual.cantidad}
                    onChange={onChangeFormulario}
                    placeholder="Cantidad"
                    min="1"
                    className="form__input"
                />
            </div>

            <div className="pedido-form__field">
                <label className="form__label">Precio Unitario</label>
                <input
                    type="number"
                    name="precioUnitario"
                    value={materialActual.precioUnitario}
                    onChange={onChangeFormulario}
                    placeholder="Precio"
                    min="0"
                    step="0.01"
                    className="form__input"
                />
            </div>

            <Button
                type="button"
                onClick={onAgregar}
                className="pedido-form__btn-agregar"
            >
                Agregar
            </Button>
        </div>
    );
};

export default PedidoMaterialInput;
