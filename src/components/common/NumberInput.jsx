const NumberInput = ({
    label,
    name,
    value,
    onChange,
    min,
    max,
    step = 1,
    placeholder = "",
    required = false,
}) => {
    return (
        <div className="form__field">
            {label && <label className="form__label">{label}</label>}

            <input
                type="number"
                className="form__input"
                name={name}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
};

export default NumberInput;