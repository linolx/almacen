import { Link } from "react-router-dom";
import "../styles/notfound.css";

const NotFoundPage = () => {
    return (
        <div className="notfound">
            <div className="notfound__container">
                <div className="notfound__number">404</div>
                <h1 className="notfound__title">Página No Encontrada</h1>
                <p className="notfound__message">
                    Lo sentimos, la página que buscas no existe o ha sido movida.
                </p>
                <div className="notfound__actions">
                    <Link to="/dashboard" className="notfound__button notfound__button--primary">
                        Ir al Dashboard
                    </Link>
                    <Link to="/inventario" className="notfound__button notfound__button--secondary">
                        Ver Inventario
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;