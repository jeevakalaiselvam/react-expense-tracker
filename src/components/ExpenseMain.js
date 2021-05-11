import "./ExpenseMain.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "./ui-elements/Card";

function ExpenseMain(props) {
    const name = props.name;
    const amount = props.amount;
    const date = props.date;

    return (
        <Card className="expense">
            <ExpenseDate date={date} />
            <ExpenseTitle name={name} />
            <ExpenseAmount amount={amount} />
        </Card>
    );
}

export default ExpenseMain;
