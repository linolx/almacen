import { useState, useEffect } from "react";
import usuariosMock from "../data/usuarios.mock";

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const auth = localStorage.getItem("isAuthenticated");
        console.log(
            "[useAuth/useState] Se leyo 'isAuthenticated' desde LocalStorage:",
            auth
        );
        return auth === "true";
    });

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
        console.log(
            "[useAuth/useEffect] Se guardo 'isAuthenticated' en LocalStorage:",
            isAuthenticated
        );
    }, [isAuthenticated]);

    const login = (usuario, password) => {
        const usuarioValido = usuariosMock.find(
            (u) => u.usuario === usuario && u.password === password
        );

        if (usuarioValido) {
            setIsAuthenticated(true);
            localStorage.setItem("usuarioActual", usuarioValido.usuario);
            console.log(
                "[useAuth/login] Se guardo 'usuarioActual' en LocalStorage:",
                usuarioValido.usuario
            );
            return true;
        }
        console.log("[useAuth/login] Credenciales invalidas.");
        return false;
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isAuthenticated");
        console.log("[useAuth/logout] Se elimino 'isAuthenticated' de LocalStorage.");
    };

    return {
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
    };
};

export default useAuth;
