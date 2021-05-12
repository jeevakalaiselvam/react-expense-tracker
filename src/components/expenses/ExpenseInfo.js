import "./ExpenseInfo.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../ui-elements/Card";
import { useState } from "react";

function ExpenseInfo(props) {
    const [title, setTitle] = useState(props.title);

    const btnClicked = () => {
        setTitle("New Name");
    };

    return (
        <Card className="expense">
            <ExpenseDate date={props.date} />
            <ExpenseTitle name={title} />
            <ExpenseAmount amount={props.amount} />
            <button type="button" onClick={btnClicked} className="btn">
                Edit
            </button>
        </Card>
    );
}

export default ExpenseInfo;
