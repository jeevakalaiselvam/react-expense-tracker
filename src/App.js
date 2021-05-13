import "./App.css";
import Card from "./components/ui-elements/Card";
import NewExpense from "./components/new-expenses/NewExpense";
import { nanoid } from "nanoid";
import { useState } from "react";
import Expenses from "./components/expenses/Expenses";

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
        date: new Date(2021, 4, 11),
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
            return [newExpense, ...prevExpenses];
        });

        console.log("New Expense: ", newExpense);
    };

    return (
        <Card className="App">
            <h1>Expense Tracker</h1>
            <NewExpense onNewExpenseData={newExpenseDataHandler} />
            <Expenses items={expenses} />
        </Card>
    );
}

export default App;
