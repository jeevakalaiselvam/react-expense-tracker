import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        { id: 1, name: "Expense 1", date: new Date(), amount: 200 },
        { id: 2, name: "Expense 2", date: new Date(), amount: 150 },
    ];

    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        name={expense.name}
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                    ></ExpenseItem>
                );
            })}
        </div>
    );
}

export default App;
