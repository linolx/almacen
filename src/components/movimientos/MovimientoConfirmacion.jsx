import Button from "../common/Button";

const MovimientoConfirmacion = ({ movimiento, material, onNuevoMovimiento }) => {
    if (!movimiento) {
        return null;
    }

    const getTipoClase = (tipo) => {
        switch (tipo) {
            case "ENTRADA":
                return "movimiento-confirmacion__tipo--entrada";
            case "SALIDA":
                return "movimiento-confirmacion__tipo--salida";
            default:
                return "";
        }
    };

    const getTipoLabel = (tipo) => {
        return tipo === "ENTRADA" ? "Entrada registrada" : "Salida registrada";
    };

    return (
        <div className="movimiento-confirmacion">
            <div
                className="movimiento-confirmacion__overlay"
                onClick={onNuevoMovimiento}
            ></div>
            <div className="movimiento-confirmacion__card">
                <div className="movimiento-confirmacion__header">
                    <div className="movimiento-confirmacion__info">
                        <h3 className="movimiento-confirmacion__titulo">
                            OK: {getTipoLabel(movimiento.tipo)}
                        </h3>
                        <p className="movimiento-confirmacion__material">
                            {material?.nombre || "Material no encontrado"}
                        </p>
                    </div>
                    <span
                        className={`movimiento-confirmacion__tipo ${getTipoClase(
                            movimiento.tipo
                        )}`}
                    >
                        {movimiento.tipo}
                    </span>
                </div>

                <div className="movimiento-confirmacion__body">
                    <div className="movimiento-confirmacion__row">
                        <span className="movimiento-confirmacion__label">Cantidad:</span>
                        <span className="movimiento-confirmacion__value">
                            {movimiento.cantidad} {material?.unidad || "UND"}
                        </span>
                    </div>

                    <div className="movimiento-confirmacion__row">
                        <span className="movimiento-confirmacion__label">Fecha:</span>
                        <span className="movimiento-confirmacion__value">
                            {movimiento.fecha}
                        </span>
                    </div>

                    <div className="movimiento-confirmacion__row">
                        <span className="movimiento-confirmacion__label">
                            ID Movimiento:
                        </span>
                        <span className="movimiento-confirmacion__value">
                            #{movimiento.id}
                        </span>
                    </div>
                </div>

                <div className="movimiento-confirmacion__footer">
                    <Button onClick={onNuevoMovimiento} type="button">
                        Registrar nuevo movimiento
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MovimientoConfirmacion;
