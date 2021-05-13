import "./Expenses.css";
import ExpenseFilter from "../new-expenses/ExpenseFilter";
import { useState } from "react";
import Card from "../ui-elements/Card";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterYearSelectedHandler = (year) => {
        console.log("Filtered Year: ", year);
        setFilteredYear(year);
    };

    let filteredExpenses = {};

    if (filteredYear === "All") {
        filteredExpenses = props.items;
    } else {
        filteredExpenses = props.items.filter((expense) => {
            return expense.date.getFullYear().toString() === filteredYear;
        });
    }

    const dates = ["All", "2018", "2019", "2020", "2021", "2022"];

    return (
        <Card className="expenses-container">
            <ExpenseFilter
                onFitlerYearSelected={filterYearSelectedHandler}
                dates={[...new Set(dates)]}
            />
            <ExpensesList filteredExpenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
