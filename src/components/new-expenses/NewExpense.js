import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (prop) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const titleChangedHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const amountChangedHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        prop.onNewExpenseData(expenseData);
    };

    return (
        <div className="form-container">
            <button onClick={startEditingHandler}>Add New Expense</button>
            <form className="form-main" onSubmit={formSubmitHandler}>
                <div className="form-item">
                    <label>Expense:</label>
                    <input
                        type="text"
                        onChange={titleChangedHandler}
                        value={enteredTitle}
                    />
                </div>
                <div className="form-item">
                    <label>Date:</label>
                    <input
                        type="date"
                        onChange={dateChangedHandler}
                        value={enteredDate}
                    />
                </div>
                <div className="form-item">
                    <label>Amount:</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangedHandler}
                        value={enteredAmount}
                    />
                </div>
                <div className="form-item">
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewExpense;
