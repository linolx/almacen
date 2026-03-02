const PasswordInput = ({
    label,
    name,
    value,
    onChange,
    placeholder = "",
}) => {
    return (
        <div className="form__field">
            {label && <label className="form__label">{label}</label>}
            <input
                className="form__input"
                type="password"
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default PasswordInput;
