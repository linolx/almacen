import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import MaterialForm from "../components/inventario/MaterialForm";
import Modal from "../components/common/Modal";
import "../styles/inventario.css";

const NuevoMaterialPage = () => {
    const { materiales, agregarMaterial } = useOutletContext();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        familia: "",
        unidad: "",
        stock: "",
        precio: "",
    });

    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
    });

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

        if (
            formData.nombre.trim() === "" ||
            formData.familia.trim() === "" ||
            formData.unidad.trim() === "" ||
            formData.stock === "" ||
            formData.precio === ""
        ) {
            openModal("Error", "Todos los campos son obligatorios");
            return;
        }

        const nuevoMaterial = {
            id: materiales.length + 1,
            familia: formData.familia,
            nombre: formData.nombre,
            unidad: formData.unidad,
            stock: parseInt(formData.stock),
            precio: parseFloat(formData.precio),
        };

        agregarMaterial(nuevoMaterial);

        openModal("Éxito", "Material registrado correctamente");

        setTimeout(() => {
            closeModal();
            navigate("/inventario");
        }, 1500);
    };

    return (
        <div className="inventario">
            <h2 className="inventario__title">Registrar Nuevo Material</h2>

            <MaterialForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />

            <Modal
                isOpen={modal.isOpen}
                title={modal.title}
                onClose={closeModal}
            >
                <p>{modal.message}</p>
            </Modal>
        </div>
    );
};

export default NuevoMaterialPage;