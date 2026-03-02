import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import usePedidos from "../hooks/usePedidos";
import PedidoForm from "../components/pedidos/PedidoForm";
import PedidosList from "../components/pedidos/PedidosList";
import Modal from "../components/common/Modal";
import ConfirmModal from "../components/common/ConfirmModal";
import proveedoresMock from "../data/proveedores.mock";
import "../styles/pedidos.css";

const PedidosPage = () => {
    const { materiales } = useOutletContext();
    const { pedidos, agregarPedido, cambiarEstado, eliminarPedido, calcularTotal } = usePedidos();

    const [showForm, setShowForm] = useState(false);
    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
    });
    const [confirmDelete, setConfirmDelete] = useState({
        isOpen: false,
        pedidoId: null,
    });

    const openModal = (title, message) => {
        setModal({ isOpen: true, title, message });
    };

    const closeModal = () => {
        setModal({ ...modal, isOpen: false });
    };

    const handleCrearPedido = (formData) => {
        if (!formData.proveedorId || formData.materiales.length === 0) {
            openModal("Error", "Seleccione un proveedor y agregue al menos un material");
            return;
        }

        agregarPedido(formData);
        openModal("Éxito", "Pedido creado correctamente");

        setTimeout(() => {
            closeModal();
            setShowForm(false);
        }, 1500);
    };

    const handleCambiarEstado = (id, nuevoEstado) => {
        cambiarEstado(id, nuevoEstado);
    };

    const handleEliminarPedido = (id) => {
        setConfirmDelete({
            isOpen: true,
            pedidoId: id,
        });
    };

    const handleConfirmarEliminar = () => {
        if (confirmDelete.pedidoId) {
            eliminarPedido(confirmDelete.pedidoId);
            setConfirmDelete({ isOpen: false, pedidoId: null });
            openModal("Éxito", "Pedido eliminado correctamente");
            setTimeout(() => closeModal(), 1500);
        }
    };

    const handleCancelarEliminar = () => {
        setConfirmDelete({ isOpen: false, pedidoId: null });
    };

    return (
        <div className="pedidos">
            <div className="pedidos__header">
                <h2 className="pedidos__title">Gestión de Pedidos a Proveedores</h2>
                <button
                    className="pedidos__btn-nuevo"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancelar" : "Nuevo Pedido"}
                </button>
            </div>

            {showForm && (
                <PedidoForm
                    materiales={materiales}
                    proveedores={proveedoresMock}
                    onSubmit={handleCrearPedido}
                />
            )}

            <PedidosList
                pedidos={pedidos}
                proveedores={proveedoresMock}
                materiales={materiales}
                calcularTotal={calcularTotal}
                onCambiarEstado={handleCambiarEstado}
                onEliminar={handleEliminarPedido}
            />

            <Modal
                isOpen={modal.isOpen}
                title={modal.title}
                onClose={closeModal}
            >
                <p>{modal.message}</p>
            </Modal>

            <ConfirmModal
                isOpen={confirmDelete.isOpen}
                title="Confirmar eliminación"
                message="¿Está seguro de que desea eliminar este pedido?"
                onConfirm={handleConfirmarEliminar}
                onCancel={handleCancelarEliminar}
            />
        </div>
    );
};

export default PedidosPage;
