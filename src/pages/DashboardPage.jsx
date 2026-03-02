import { useOutletContext } from "react-router-dom";
import useStockMetrics from "../hooks/useStockMetrics";
import usePedidos from "../hooks/usePedidos";
import usePedidosMetrics from "../hooks/usePedidosMetrics";
import DashboardCard from "../components/dashboard/DashboardCard";
import DashboardSection from "../components/dashboard/DashboardSection";
import "../styles/dashboard.css";

const DashboardPage = () => {
    const { materiales, movimientos } = useOutletContext();
    const { pedidos } = usePedidos();

    const stats = useStockMetrics(materiales, movimientos);
    const pedidosStats = usePedidosMetrics(pedidos);

    return (
        <div className="dashboard">
            <h2 className="dashboard__title">Dashboard</h2>

            <DashboardSection title="Resumen General">
                <DashboardCard label="Total Materiales" value={stats.totalMateriales} />
                <DashboardCard label="Total Movimientos" value={stats.totalMovimientos} />
                <DashboardCard label="Stock Total" value={stats.totalStock} />
                <DashboardCard label="Stock Valorizado" value={`S/ ${stats.stockValorizado.toFixed(2)}`} variant="dashboard__card--special" />
                <DashboardCard label="Bajo Stock" value={stats.bajoStock} variant="dashboard__card--warning" />
            </DashboardSection>

            <DashboardSection title="Movimientos" gridVariant="dashboard__grid--two-columns">
                <DashboardCard label="Entradas" value={stats.totalEntradas} variant="dashboard__card--entrada" />
                <DashboardCard label="Salidas" value={stats.totalSalidas} variant="dashboard__card--salida" />
            </DashboardSection>

            <DashboardSection title="Pedidos a Proveedores">
                <DashboardCard label="Total Pedidos" value={pedidosStats.totalPedidos} />
                <DashboardCard label="Pendientes" value={pedidosStats.pendientes} variant="dashboard__card--warning" />
                <DashboardCard label="Confirmados" value={pedidosStats.confirmados} variant="dashboard__card--entrada" />
                <DashboardCard label="Entregados" value={pedidosStats.entregados} variant="dashboard__card--salida" />
            </DashboardSection>
        </div>
    );
};

export default DashboardPage;