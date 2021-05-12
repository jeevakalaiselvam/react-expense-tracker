import "./ExpenseAmount.css";

function ExpenseAmount(props) {
    const amount = props.amount;

    return <h2 className="amount">${amount}</h2>;
}

export default ExpenseAmount;
