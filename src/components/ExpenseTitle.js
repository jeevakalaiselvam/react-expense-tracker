import "./ExpenseTitle.css";

function ExpenseTitle(props) {
    const name = props.name;

    return <h2 className="title">{name}</h2>;
}

export default ExpenseTitle;
