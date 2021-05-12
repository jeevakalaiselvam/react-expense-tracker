import "./App.css";
import ExpenseInfo from "./components/expenses/ExpenseInfo";
import Card from "./components/ui-elements/Card";
import NewExpense from "./components/new-expenses/NewExpense";
import ExpenseFilter from "./components/new-expenses/ExpenseFilter";
import { nanoid } from "nanoid";
import { useState } from "react";

const initialExpenses = [
    {
        title: "Book",
        id: nanoid(),
        date: new Date(2021, 5, 12),
        amount: 12.99,
    },
    {
        title: "Table",
        id: nanoid(),
        date: new Date(2020, 4, 11),
        amount: 123.12,
    },
    {
        title: "Xbox",
        id: nanoid(),
        date: new Date(2020, 3, 12),
        amount: 499,
    },
    {
        title: "Samsung TV",
        id: nanoid(),
        date: new Date(2019, 4, 2),
        amount: 399,
    },
    {
        title: "Macbook",
        id: nanoid(),
        date: new Date(2021, 4, 5),
        amount: 1200,
    },
];

function App() {
    const [expenses, setExpenses] = useState(initialExpenses);
    console.log(expenses);

    const newExpenseDataHandler = (expenseData) => {
        const newExpense = {
            ...expenseData,
            id: nanoid(),
        };

        setExpenses((prevExpenses) => {
            return [expenseData, ...prevExpenses];
        });

        console.log("New Expense: ", newExpense);
    };

    const filterYearSelectedHandler = (year) => {
        console.log("Filtered Year: ", year);
    };

    const dates = ["2018", "2019", "2020", "2021", "2022"];

    return (
        <Card className="App">
            <h1>Expense Tracker</h1>
            <NewExpense onNewExpenseData={newExpenseDataHandler} />
            <ExpenseFilter
                onFitlerYearSelected={filterYearSelectedHandler}
                dates={[...new Set(dates)]}
            />
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
