const Select = ({
    label,
    name,
    value,
    onChange,
    options = [],
    placeholder = "Seleccione una opción",
    valueKey,
    labelKey,
}) => {
    return (
        <div className="form__field">
            {label && <label className="form__label">{label}</label>}

            <select
                className="form__select"
                name={name}
                value={value}
                onChange={onChange}
            >
                <option value="">{placeholder}</option>

                {options.map((option, index) => {
                    if (typeof option === "object" && valueKey && labelKey) {
                        return (
                            <option key={index} value={option[valueKey]}>
                                {option[labelKey]}
                            </option>
                        );
                    }
                    return (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default Select;