import Chart from "../chart/Chart";
import "./ExpensesChart.css";

const ExpensesChart = (props) => {
    const dataPoints = props.dataPoints;

    return <Chart dataPoints={dataPoints} />;
};

export default ExpensesChart;
