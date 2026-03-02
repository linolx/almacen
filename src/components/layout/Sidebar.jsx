import { NavLink } from "react-router-dom";
import {
    FaChartLine,
    FaBox,
    FaPlus,
    FaArrowDown,
    FaArrowUp,
    FaFileContract,
} from "react-icons/fa";
import "../../styles/layout.css";

const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: FaChartLine },
    { path: "/inventario", label: "Inventario", icon: FaBox },
    { path: "/inventario/nuevo", label: "Nuevo Material", icon: FaPlus },
    { path: "/movimientos/entrada", label: "Nota de Entrada", icon: FaArrowDown },
    { path: "/movimientos/salida", label: "Nota de Salida", icon: FaArrowUp },
    { path: "/pedidos", label: "Pedidos", icon: FaFileContract },
];

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h3 className="sidebar__title">Módulo de Almacén</h3>

            <nav className="sidebar__nav">
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "sidebar__link sidebar__link--active"
                                    : "sidebar__link"
                            }
                        >
                            <IconComponent className="sidebar__icon" />
                            <span className="sidebar__text">{item.label}</span>
                        </NavLink>
                    );
                })}
            </nav>
        </aside>
    );
};

export default Sidebar;