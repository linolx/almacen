const Button = ({
    children,
    type = "button",
    onClick,
    variant = "primary",
    disabled = false,
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn btn--${variant}`}
        >
            {children}
        </button>
    );
};

export default Button;