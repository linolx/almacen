import { useEffect, useState } from "react";
import { calcularStock } from "../utils/calcularStock";

const useStockMetrics = (materiales, movimientos) => {
    const [stats, setStats] = useState({
        totalMateriales: 0,
        totalMovimientos: 0,
        totalStock: 0,
        bajoStock: 0,
        totalEntradas: 0,
        totalSalidas: 0,
        stockValorizado: 0,
    });

    useEffect(() => {
        const totalMateriales = materiales.length;
        const totalMovimientos = movimientos.length;

        const totalStock = materiales.reduce(
            (acc, mat) => acc + mat.stock,
            0
        );

        const bajoStock = materiales.filter(
            (mat) => mat.stock < 50
        ).length;

        const totalEntradas = movimientos.filter(
            (mov) => mov.tipo === "ENTRADA"
        ).length;

        const totalSalidas = movimientos.filter(
            (mov) => mov.tipo === "SALIDA"
        ).length;

        const stockValorizado = calcularStock(materiales);

        setStats({
            totalMateriales,
            totalMovimientos,
            totalStock,
            bajoStock,
            totalEntradas,
            totalSalidas,
            stockValorizado,
        });
    }, [materiales, movimientos]);

    return stats;
};

export default useStockMetrics;