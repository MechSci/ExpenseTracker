import "./Chart.css";

import Bar from "./Bar";

const Chart = (props) => {
  const expenseAmounts = props.dataPoints.map(dataPoint => dataPoint.value);
  const maxMonthAmount = Math.max(...expenseAmounts);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <Bar key={dataPoint.label} height={dataPoint.value} maxValue={maxMonthAmount} label={dataPoint.label} />
      ))}
    </div>
  );
};

export default Chart;
