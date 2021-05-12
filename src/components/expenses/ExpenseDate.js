import "./ExpenseDate.css";

function ExpenseDate(props) {
    const month = new Date(props.date).toLocaleString("en-US", {
        month: "long",
    });
    const day = new Date(props.date).toLocaleString("en-US", {
        day: "2-digit",
    });
    const year = new Date(props.date).getFullYear();

    return (
        <div className="date">
            <div className="date-month">{month}</div>
            <div className="date-year">{year}</div>
            <div className="date-date">{day}</div>
        </div>
    );
}

export default ExpenseDate;
