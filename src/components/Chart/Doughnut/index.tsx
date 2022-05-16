import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({
  data,
  labelPosition,
  classes,
  height,
  width,
  fillWidth
}: IChartProps) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: labelPosition ? labelPosition : 'right'
      },
    }
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasetLabel,
        data: data.data,
        backgroundColor: [...data.backgroundColor],
      }
    ],
  };

  return (
    <div className={classes}>
      <Doughnut
        data={chartData}
        options={options}
        height={height}
        width={width}
      />
    </div>
  )
}

export default DoughnutChart

