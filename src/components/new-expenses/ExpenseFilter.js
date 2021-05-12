import "./ExpenseFilter.css";
import { nanoid } from "nanoid";

const ExpenseFilter = (props) => {
    const years = [2020, 2019, 2018];
    const [selectedYear, setSelectedYear] = useState("2020");

    const filterYearSelectHandler = (event) => {
        props.onFitlerYearSelected(event.target.value);
    };

    return (
        <div className="filter-container">
            <label htmlFor="years" className="filter-label">
                Choose a year:
            </label>
            <select
                id="years"
                name="years"
                onChange={filterYearSelectHandler}
                className="filter-data-list"
            >
                {years.map((year) => {
                    return (
                        <option
                            value={year}
                            className="filter-data-item"
                            key={nanoid()}
                        >
                            {year}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default ExpenseFilter;
