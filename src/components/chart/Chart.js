import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPoints = props.dataPoints;
    let totalAmountSpentInYear = 0;

    const monthData = [
        { month: "Jan", value: 0 },
        { month: "Feb", value: 0 },
        { month: "Mar", value: 0 },
        { month: "Apr", value: 0 },
        { month: "May", value: 0 },
        { month: "Jun", value: 0 },
        { month: "Jul", value: 0 },
        { month: "Aug", value: 0 },
        { month: "Sep", value: 0 },
        { month: "Oct", value: 0 },
        { month: "Nov", value: 0 },
        { month: "Dec", value: 0 },
    ];

    for (const data of dataPoints) {
        const monthIndex = data.date.getMonth();
        monthData[monthIndex].value += data.amount;
        totalAmountSpentInYear += data.amount;
    }

    console.log("MonthData", monthData);

    return (
        <div className="expense-chart-container">
            {monthData.map((monthData) => {
                return (
                    <ChartBar
                        key={monthData.month}
                        monthData={monthData}
                        totalAmountSpentInYear={totalAmountSpentInYear}
                    />
                );
            })}
        </div>
    );
};

export default Chart;
