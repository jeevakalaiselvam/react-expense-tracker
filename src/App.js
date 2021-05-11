import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        { id: 1, name: "Expense 1", date: new Date() },
        { id: 2, name: "Expense 2", date: new Date() },
    ];

    return (
        <div className="App">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        name={expense.name}
                        key={expense.id}
                        date={expense.date}
                    ></ExpenseItem>
                );
            })}
        </div>
    );
}

export default App;
