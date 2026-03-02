const Buscador = ({ busqueda, setBusqueda }) => {
    return (
        <div className="inventario__search">
            <input
                type="text"
                placeholder="Buscar material..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="inventario__input"
            />
        </div>
    );
};

export default Buscador;