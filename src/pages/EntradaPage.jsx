import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MovimientoForm from "../components/movimientos/MovimientoForm";
import MovimientoConfirmacion from "../components/movimientos/MovimientoConfirmacion";
import Modal from "../components/common/Modal";
import "../styles/movimientos.css";

const EntradaPage = () => {
    const { materiales, actualizarStock, movimientos, agregarMovimiento } =
        useOutletContext();

    const [formData, setFormData] = useState({
        materialId: "",
        cantidad: "",
    });
    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
    });
    const [confirmacionMovimiento, setConfirmacionMovimiento] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const openModal = (title, message) => {
        setModal({ isOpen: true, title, message });
    };

    const closeModal = () => {
        setModal({ ...modal, isOpen: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.materialId === "" || formData.cantidad === "") {
            openModal("Error", "Todos los campos son obligatorios");
            return;
        }

        const materialId = parseInt(formData.materialId);
        const cantidad = parseInt(formData.cantidad);
        const materialSeleccionado = materiales.find((mat) => mat.id === materialId);

        if (!materialSeleccionado) {
            openModal("Error", "Material no encontrado");
            return;
        }

        actualizarStock(materialId, cantidad, "ENTRADA");

        const nuevoMovimiento = {
            id: movimientos.length + 1,
            materialId,
            tipo: "ENTRADA",
            cantidad,
            fecha: new Date().toLocaleDateString(),
        };

        agregarMovimiento(nuevoMovimiento);
        setConfirmacionMovimiento(nuevoMovimiento);
    };

    const handleNuevoMovimiento = () => {
        setConfirmacionMovimiento(null);
        setFormData({ materialId: "", cantidad: "" });
    };

    return (
        <div className="movimientos">
            <h2 className="movimientos__title">Nota de Entrada</h2>

            <MovimientoForm
                materiales={materiales}
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <MovimientoConfirmacion
                movimiento={confirmacionMovimiento}
                material={materiales.find(
                    (mat) => mat.id === confirmacionMovimiento?.materialId
                )}
                onNuevoMovimiento={handleNuevoMovimiento}
            />

            <Modal isOpen={modal.isOpen} title={modal.title} onClose={closeModal}>
                <p>{modal.message}</p>
            </Modal>
        </div>
    );
};

export default EntradaPage;
