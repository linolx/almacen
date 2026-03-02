import Button from "./Button";

const Modal = ({ isOpen, title, children, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal__overlay" onClick={onClose}></div>

            <div className="modal__content">
                <h3 className="modal__title">{title}</h3>

                <div className="modal__body">{children}</div>

                <div className="modal__footer">
                    <Button variant="secondary" onClick={onClose}>
                        Cancelar
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;