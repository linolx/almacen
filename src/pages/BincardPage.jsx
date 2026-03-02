import { useParams, useOutletContext } from "react-router-dom";
import MovimientoTable from "../components/movimientos/MovimientoTable";
import "../styles/movimientos.css";

const BincardPage = () => {
  const { id } = useParams();
  const { materiales, movimientos } = useOutletContext();

  const materialId = parseInt(id);

  const material = materiales.find((mat) => mat.id === materialId);

  if (!material) {
    return <h3>Material no encontrado</h3>;
  }

  const movimientosMaterial = movimientos.filter(
    (mov) => mov.materialId === materialId
  );

  return (
    <div className="movimientos">
      <h2 className="movimientos__title">
        Bincard - {material.nombre}
      </h2>

      <p>
        <strong>Stock actual:</strong> {material.stock}
      </p>

      <MovimientoTable movimientos={movimientosMaterial} />
    </div>
  );
};

export default BincardPage;