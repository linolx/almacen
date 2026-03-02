const PedidoFormSection = ({ title, children }) => {
    return (
        <div className="pedido-form__section">
            <h4 className="pedido-form__section-title">{title}</h4>
            {children}
        </div>
    );
};

export default PedidoFormSection;
