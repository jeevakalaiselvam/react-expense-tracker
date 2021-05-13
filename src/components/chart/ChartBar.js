import "./ChartBar.css";

const ChartBar = (props) => {
    const monthData = props.monthData;
    let totalAmountSpentInYear = props.totalAmountSpentInYear;

    const height = 100 - (monthData.value / totalAmountSpentInYear) * 100;
    const heightPercentage = height + "%";

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
            <div
                className="month-name"
                // style={{ color: height == 100 ? "white" : "green" }}
            >
                {monthData.month}
            </div>
        </div>
    );
};

export default ChartBar;
