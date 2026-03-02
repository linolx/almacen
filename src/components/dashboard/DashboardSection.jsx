const DashboardSection = ({ title, children, gridVariant = "" }) => {
    const gridClass = gridVariant ? `dashboard__grid ${gridVariant}` : "dashboard__grid";

    return (
        <div className="dashboard__section">
            <h3 className="dashboard__section-title">{title}</h3>
            <div className={gridClass}>
                {children}
            </div>
        </div>
    );
};

export default DashboardSection;
