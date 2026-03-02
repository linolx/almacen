const Input = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
}) => {
    return (
        <div className="form__field">
            {label && <label className="form__label">{label}</label>}
            <input
                className="form__input"
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;