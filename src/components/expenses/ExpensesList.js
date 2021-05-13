import "./ExpensesList.css";
import Card from "../ui-elements/Card";
import ExpenseInfo from "./ExpenseInfo";

const ExpensesList = (props) => {
    const filteredExpenses = props.filteredExpenses;

    let expenses = (
        <Card className="no-data">
            <p>No Expenses found !</p>{" "}
        </Card>
    );

    if (filteredExpenses.length > 0) {
        expenses =
            filteredExpenses.length > 0 &&
            filteredExpenses.map((expense) => {
                return (
                    <ExpenseInfo
                        title={expense.title}
                        key={expense.id}
                        date={expense.date}
                        amount={expense.amount}
                    ></ExpenseInfo>
                );
            });
    }

    return <Card className="expenses-list">{expenses}</Card>;
};

export default ExpensesList;
