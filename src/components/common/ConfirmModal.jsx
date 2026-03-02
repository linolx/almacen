import Button from "./Button";
import "../../styles/confirm-modal.css";

const ConfirmModal = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) return null;

    return (
        <div className="confirm-modal">
            <div className="confirm-modal__overlay" onClick={onCancel}></div>

            <div className="confirm-modal__content">
                <h3 className="confirm-modal__title">{title}</h3>
                <p className="confirm-modal__message">{message}</p>

                <div className="confirm-modal__footer">
                    <Button variant="secondary" onClick={onCancel}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onConfirm}>
                        Confirmar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;
