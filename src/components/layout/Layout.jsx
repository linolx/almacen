import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import useInventario from "../../hooks/useInventario";
import useMovimientos from "../../hooks/useMovimientos";
import "../../styles/layout.css";

const Layout = () => {
    const inventario = useInventario();
    const movimientos = useMovimientos();

    return (
        <div className="layout">
            <Sidebar />
            <div className="layout__content">
                <Navbar />
                <main className="layout__main">
                    <Outlet context={{ ...inventario, ...movimientos }} />
                </main>
            </div>
        </div>
    );
};

export default Layout;