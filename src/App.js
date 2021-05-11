import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        { id: 1, name: "Prepaid Recharge", date: new Date(), amount: 100 },
        { id: 2, name: "Grocery Shopping", date: new Date(), amount: 150 },
        { id: 3, name: "Buying Books", date: new Date(), amount: 30 },
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
