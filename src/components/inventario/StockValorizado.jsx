import { calcularStock } from "../../utils/calcularStock";

const StockValorizado = ({ materiales }) => {
    const stockValorizado = calcularStock(materiales);

    return (
        <div className="stock-valorizado">
            <div className="stock-valorizado__card">
                <h3 className="stock-valorizado__title">Stock Valorizado Total</h3>
                <p className="stock-valorizado__value">S/ {stockValorizado.toFixed(2)}</p>
                <p className="stock-valorizado__subtitle">{materiales.length} materiales en inventario</p>
            </div>
        </div>
    );
};

export default StockValorizado;
