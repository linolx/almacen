import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/Input";
import PasswordInput from "../components/common/PasswordInput";
import Button from "../components/common/Button";
import useAuth from "../hooks/useAuth";
import usuariosMock from "../data/usuarios.mock";
import "../styles/login.css";

const LoginPage = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        usuario: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.usuario.trim() === "" || formData.password.trim() === "") {
            return;
        }

        const isValid = login(formData.usuario, formData.password);

        if (isValid) {
            navigate("/dashboard");
        } else {
            setFormData({
                usuario: formData.usuario,
                password: "",
            });
        }
    };

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__title">Sistema de Almacén</h2>
                <p className="login__subtitle">Ingrese sus credenciales para continuar</p>
                <form className="login__form" onSubmit={handleSubmit}>
                    <Input
                        label="Usuario"
                        name="usuario"
                        value={formData.usuario}
                        onChange={handleChange}
                        placeholder="ej: admin"
                    />
                    <PasswordInput
                        label="Contraseña"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Ingrese su contraseña"
                    />
                    <Button type="submit">Ingresar</Button>
                </form>
                <p className="login__hint">Credenciales de prueba: {usuariosMock[0].usuario} / {usuariosMock[0].password}</p>
            </div>
        </div>
    );
};

export default LoginPage;