const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
    if (totalPages <= 1) return null;

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={
                    i === currentPage
                        ? "pagination__button pagination__button--active"
                        : "pagination__button"
                }
            >
                {i}
            </button>
        );
    }

    return (
        <div className="pagination">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="pagination__button"
            >
                Anterior
            </button>

            {pages}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="pagination__button"
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;