import "./ExpenseItem.css";

function ExpenseItem(props) {
    const name = props.name;
    const amount = props.amount;
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date.getFullYear();

    return (
        <div className="expense">
            <div className="date">
                <div className="date-data">{month}</div>
                <div className="date-data">{day}</div>
                <div className="date-data">{year}</div>
            </div>
            <h2 className="title">{name}</h2>
            <h2 className="amount">${amount}</h2>
        </div>
    );
}

export default ExpenseItem;
