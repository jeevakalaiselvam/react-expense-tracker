import "./ExpenseFilter.css";
import { nanoid } from "nanoid";
import { useState } from "react";

const ExpenseFilter = (props) => {
    const years = ["2019", "2020", "2021"];
    const [selectedYear, setSelectedYear] = useState("2020");

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
                value={selectedYear}
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
