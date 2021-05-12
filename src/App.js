import "./App.css";
import ExpenseInfo from "./components/expenses/ExpenseInfo";
import Card from "./components/ui-elements/Card";

function App() {
    const expenses = [
        { id: 1, name: "Prepaid Recharge", date: new Date(), amount: 100 },
        { id: 2, name: "Grocery Shopping", date: new Date(), amount: 150 },
        { id: 3, name: "Buying Books", date: new Date(), amount: 30 },
    ];

    return (
        <Card className="App" color="">
            <h1>Expense Tracker</h1>
            {expenses.map((expense) => {
                return (
                    <ExpenseInfo
                        name={expense.name}
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                    ></ExpenseInfo>
                );
            })}
        </Card>
    );
}

export default App;
