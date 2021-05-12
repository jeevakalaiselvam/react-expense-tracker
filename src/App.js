import "./App.css";
import ExpenseInfo from "./components/expenses/ExpenseInfo";
import Card from "./components/ui-elements/Card";
import NewExpense from "./components/new-expenses/NewExpense";

function App() {
    const expenses = [
        { id: 1, title: "Prepaid Recharge", date: new Date(), amount: 100 },
        { id: 2, title: "Grocery Shopping", date: new Date(), amount: 150 },
        { id: 3, title: "Buying Books", date: new Date(), amount: 30 },
    ];

    return (
        <Card className="App">
            <h1>Expense Tracker</h1>
            <NewExpense />
            {expenses.map((expense) => {
                return (
                    <ExpenseInfo
                        title={expense.title}
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
