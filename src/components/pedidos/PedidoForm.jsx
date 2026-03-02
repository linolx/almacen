import { useState } from "react";
import Select from "../common/Select";
import Button from "../common/Button";
import PedidoFormSection from "./PedidoFormSection";
import PedidoMaterialInput from "./PedidoMaterialInput";
import PedidoMaterialTable from "./PedidoMaterialTable";

const PedidoForm = ({ materiales, proveedores, onSubmit, onError }) => {
    const [formData, setFormData] = useState({
        proveedorId: "",
        materiales: [],
        observaciones: "",
    });

    const [materialActual, setMaterialActual] = useState({
        materialId: "",
        cantidad: "",
        precioUnitario: "",
    });

    const handleChangeProveedor = (e) => {
        setFormData({
            ...formData,
            proveedorId: e.target.value,
        });
    };

    const handleChangeFormularioMaterial = (e) => {
        const { name, value } = e.target;
        setMaterialActual({
            ...materialActual,
            [name]: value,
        });
    };

    const agregarMaterial = () => {
        if (
            !materialActual.materialId ||
            !materialActual.cantidad ||
            !materialActual.precioUnitario
        ) {
            if (onError) {
                onError("Error", "Complete todos los campos del material");
            }
            return;
        }

        const nuevoMaterial = {
            materialId: parseInt(materialActual.materialId),
            cantidad: parseInt(materialActual.cantidad),
            precioUnitario: parseFloat(materialActual.precioUnitario),
        };

        setFormData({
            ...formData,
            materiales: [...formData.materiales, nuevoMaterial],
        });

        setMaterialActual({
            materialId: "",
            cantidad: "",
            precioUnitario: "",
        });
    };

    const eliminarMaterial = (index) => {
        setFormData({
            ...formData,
            materiales: formData.materiales.filter((_, i) => i !== index),
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            proveedorId: "",
            materiales: [],
            observaciones: "",
        });
    };

    const getMaterialNombre = (id) => {
        const material = materiales.find((m) => m.id === id);
        return material ? material.nombre : "";
    };

    return (
        <div className="pedido-form">
            <h3 className="pedido-form__title">Crear Nuevo Pedido</h3>

            <form onSubmit={handleSubmit} className="pedido-form__container">
                <PedidoFormSection title="Proveedor">
                    <div className="pedido-form__field">
                        <Select
                            label="Seleccionar Proveedor"
                            name="proveedorId"
                            value={formData.proveedorId}
                            onChange={handleChangeProveedor}
                            options={proveedores}
                            valueKey="id"
                            labelKey="nombre"
                        />
                    </div>
                </PedidoFormSection>

                <PedidoFormSection title="Materiales">
                    <PedidoMaterialInput
                        materiales={materiales}
                        materialActual={materialActual}
                        onChangeFormulario={handleChangeFormularioMaterial}
                        onAgregar={agregarMaterial}
                    />
                    <PedidoMaterialTable
                        materiales={formData.materiales}
                        getMaterialNombre={getMaterialNombre}
                        onEliminar={eliminarMaterial}
                    />
                </PedidoFormSection>

                <PedidoFormSection title="Observaciones">
                    <div className="pedido-form__field">
                        <textarea
                            name="observaciones"
                            value={formData.observaciones}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    observaciones: e.target.value,
                                })
                            }
                            placeholder="Observaciones adicionales para el pedido"
                            className="pedido-form__textarea"
                            rows="3"
                        />
                    </div>
                </PedidoFormSection>

                <div className="pedido-form__actions">
                    <Button type="submit">Crear Pedido</Button>
                </div>
            </form>
        </div>
    );
};

export default PedidoForm;
