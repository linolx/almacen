import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Layout from "../components/layout/Layout";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import InventarioPage from "../pages/InventarioPage";
import NuevoMaterialPage from "../pages/NuevoMaterialPage";
import EntradaPage from "../pages/EntradaPage";
import SalidaPage from "../pages/SalidaPage";
import BincardPage from "../pages/BincardPage";
import PedidosPage from "../pages/PedidosPage";
import NotFoundPage from "../pages/NotFoundPage";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<LoginPage />} />

                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={
                            <PrivateRoute>
                                <Navigate to="/dashboard" replace />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="dashboard"
                        element={
                            <PrivateRoute>
                                <DashboardPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="inventario"
                        element={
                            <PrivateRoute>
                                <InventarioPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="inventario/nuevo"
                        element={
                            <PrivateRoute>
                                <NuevoMaterialPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="movimientos/entrada"
                        element={
                            <PrivateRoute>
                                <EntradaPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="movimientos/salida"
                        element={
                            <PrivateRoute>
                                <SalidaPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="pedidos"
                        element={
                            <PrivateRoute>
                                <PedidosPage />
                            </PrivateRoute>
                        }
                    />

                    <Route
                        path="bincard/:id"
                        element={
                            <PrivateRoute>
                                <BincardPage />
                            </PrivateRoute>
                        }
                    />
                </Route>

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;