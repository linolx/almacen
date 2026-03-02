import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import usePagination from "../hooks/usePagination";
import MaterialTable from "../components/inventario/MaterialTable";
import Buscador from "../components/inventario/Buscador";
import Pagination from "../components/common/Pagination";
import StockValorizado from "../components/inventario/StockValorizado";

const InventarioPage = () => {
    const { materiales } = useOutletContext();
    const [busqueda, setBusqueda] = useState("");

    const materialesFiltrados = materiales.filter(
        (material) =>
            material.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
            material.familia.toLowerCase().includes(busqueda.toLowerCase())
    );

    const {
        currentPage,
        setCurrentPage,
        totalPages,
        paginatedData,
    } = usePagination(materialesFiltrados, 10);

    return (
        <div className="inventario">
            <div className="inventario__header">
                <h2 className="inventario__title">Inventario</h2>
                <StockValorizado materiales={materiales} />
            </div>

            <Buscador busqueda={busqueda} setBusqueda={setBusqueda} />

            <MaterialTable materiales={paginatedData} />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
};

export default InventarioPage;