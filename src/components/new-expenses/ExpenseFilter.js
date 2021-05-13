import "./ExpenseFilter.css";
import { nanoid } from "nanoid";
import { useState } from "react";

const ExpenseFilter = (props) => {
    const dates = props.dates;

    const [selectedYear, setSelectedYear] = useState("All");

    const filterYearSelectHandler = (event) => {
        setSelectedYear(event.target.value);
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
                value={props.defaultYear}
                onChange={filterYearSelectHandler}
                className="filter-data-list"
            >
                {dates.map((year) => {
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
