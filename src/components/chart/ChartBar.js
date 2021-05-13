import "./ChartBar.css";

const ChartBar = (props) => {
    const monthData = props.monthData;
    let totalAmountSpentInYear = props.totalAmountSpentInYear;

    const heightPercentage =
        100 - (monthData.value / totalAmountSpentInYear) * 100 + "%";
    console.log(
        monthData.month,
        monthData.value,
        "/",
        totalAmountSpentInYear,
        "=",
        heightPercentage
    );

    return (
        <div className="expense-chart-bar">
            <div className="month-fill-container">
                <div
                    className="month-fill"
                    style={{ height: heightPercentage }}
                ></div>
            </div>
            <div className="month-name">{monthData.month}</div>
        </div>
    );
};

export default ChartBar;
