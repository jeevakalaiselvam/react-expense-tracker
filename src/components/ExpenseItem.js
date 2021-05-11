import "./ExpenseItem.css";

function ExpenseItem({ name }) {
    return <div className="expense">{name}</div>;
}

export default ExpenseItem;
