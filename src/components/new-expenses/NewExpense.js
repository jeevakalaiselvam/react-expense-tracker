import "./NewExpense.css";
import { useState } from "react";

const NewExpense = () => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");

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
        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate,
        };

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        console.log(expenseDate);
    };

    return (
        <div className="form-container">
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