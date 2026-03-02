import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

const MaterialRow = ({ material }) => {
    const navigate = useNavigate();

    const formatearPrecio = (precio) => {
        if (precio === undefined || precio === null || isNaN(precio)) {
            return "S/D";
        }
        return new Intl.NumberFormat("es-PE", {
            style: "currency",
            currency: "PEN",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(precio);
    };

    const formatearStock = (stock) => {
        return stock.toLocaleString("es-PE", {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
    };

    const calcularSubtotal = () => {
        if (material.precio === undefined || material.precio === null || isNaN(material.precio)) {
            return "S/D";
        }
        const subtotal = material.stock * material.precio;
        return formatearPrecio(subtotal);
    };

    return (
        <tr className="inventario__row">
            <td>{material.id}</td>
            <td>{material.familia}</td>
            <td>{material.nombre}</td>
            <td>{material.unidad}</td>
            <td
                className={
                    material.stock < 10
                        ? "inventario__stock inventario__stock--low inventario__stock--align"
                        : "inventario__stock inventario__stock--align"
                }
            >
                {formatearStock(material.stock)}
            </td>
            <td className="inventario__precio">{formatearPrecio(material.precio)}</td>
            <td className="inventario__subtotal">{calcularSubtotal()}</td>
            <td>
                <Button
                    variant="secondary"
                    onClick={() => navigate(`/bincard/${material.id}`)}
                >
                    Ver Bincard
                </Button>
            </td>
        </tr>
    );
};

export default MaterialRow;