import "./App.css";
import ExpenseInfo from "./components/expenses/ExpenseInfo";
import Card from "./components/ui-elements/Card";
import NewExpense from "./components/new-expenses/NewExpense";
import ExpenseFilter from "./components/new-expenses/ExpenseFilter";
import { nanoid } from "nanoid";

function App() {
    const expenses = [];

    const newExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: nanoid(),
        };

        console.log(newExpense);
    };

    const filterYearSelectedHandler = (year) => {
        console.log(year);
    };

    return (
        <Card className="App">
            <h1>Expense Tracker</h1>
            <NewExpense onNewExpenseData={newExpenseDataHandler} />
            <ExpenseFilter onFitlerYearSelected={filterYearSelectedHandler} />
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
