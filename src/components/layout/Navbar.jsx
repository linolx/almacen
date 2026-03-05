import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../../styles/layout.css";

const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="navbar__content">
                <h2 className="navbar__title">Sistema de Gestión de Almacén</h2>

                <div className="navbar__user">
                    <span className="navbar__username">
                        👤 <strong>Bienvenido: Lino Alfonso Alvarez Huamani</strong>
                    </span>
                    <button
                        className="navbar__logout"
                        onClick={handleLogout}
                        title="Cerrar sesión"
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
