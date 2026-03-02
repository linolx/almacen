import useLocalStorage from "./useLocalStorage";
import movimientosMock from "../data/movimientos.mock";

const useMovimientos = () => {
    const [movimientos, setMovimientos] = useLocalStorage(
        "movimientos",
        movimientosMock
    );

    const agregarMovimiento = (nuevoMovimiento) => {
        console.log(
            "[useMovimientos] Se actualizo el estado de movimientos con un nuevo registro:",
            nuevoMovimiento
        );
        setMovimientos([...movimientos, nuevoMovimiento]);
    };

    return {
        movimientos,
        agregarMovimiento,
    };
};

export default useMovimientos;
