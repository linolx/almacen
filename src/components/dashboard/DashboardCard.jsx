const DashboardCard = ({ label, value, variant = "" }) => {
    const cardClass = variant ? `dashboard__card ${variant}` : "dashboard__card";

    return (
        <div className={cardClass}>
            <span className="dashboard__card-label">{label}</span>
            <p className="dashboard__card-value">{value}</p>
        </div>
    );
};

export default DashboardCard;
