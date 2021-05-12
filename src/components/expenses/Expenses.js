import "./Expenses.css";
import ExpenseInfo from "./ExpenseInfo";
import ExpenseFilter from "../new-expenses/ExpenseFilter";
import { useState } from "react";
import Card from "../ui-elements/Card";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020");

    const filterYearSelectedHandler = (year) => {
        console.log("Filtered Year: ", year);
        setFilteredYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const dates = ["2018", "2019", "2020", "2021", "2022"];

    return (
        <Card className="expenses-list">
            <ExpenseFilter
                onFitlerYearSelected={filterYearSelectedHandler}
                dates={[...new Set(dates)]}
            />
            {filteredExpenses.map((expense) => {
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
};

export default Expenses;
