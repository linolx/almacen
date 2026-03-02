import useLocalStorage from "./useLocalStorage";
import materialesMock from "../data/materiales.mock";

const useInventario = () => {
    const asegurarPrecio = (materiales) => {
        return materiales.map((material) => {
            if (material.precio === undefined || material.precio === null) {
                const materialEnMock = materialesMock.find((m) => m.id === material.id);
                return {
                    ...material,
                    precio: materialEnMock ? materialEnMock.precio : 0,
                };
            }
            return material;
        });
    };

    const [materiales, setMateriales] = useLocalStorage(
        "materiales",
        materialesMock
    );

    const materialesConPrecio = asegurarPrecio(materiales);

    const agregarMaterial = (nuevoMaterial) => {
        setMateriales([...materialesConPrecio, nuevoMaterial]);
    };

    const actualizarMaterial = (id, materialActualizado) => {
        setMateriales(
            materialesConPrecio.map((mat) => (mat.id === id ? materialActualizado : mat))
        );
    };

    const actualizarStock = (materialId, cantidad, tipo) => {
        setMateriales(
            materialesConPrecio.map((mat) => {
                if (mat.id === materialId) {
                    const nuevoStock = tipo === "ENTRADA"
                        ? mat.stock + cantidad
                        : mat.stock - cantidad;
                    return { ...mat, stock: Math.max(0, nuevoStock) };
                }
                return mat;
            })
        );
    };

    const eliminarMaterial = (id) => {
        setMateriales(materialesConPrecio.filter((mat) => mat.id !== id));
    };

    return {
        materiales: materialesConPrecio,
        agregarMaterial,
        actualizarMaterial,
        actualizarStock,
        eliminarMaterial,
    };
};

export default useInventario;