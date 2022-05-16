// @ts-nocheck
import { Bar } from 'react-chartjs-2';
import { COLOR_DARK } from '@constants'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = ({
  data,
  classes,
  height,
  width,
  fillWidth,
  labelPosition
}: IChartProps) => {
  const options = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        ticks: {
          display: false
        }
      }
    },
    
  };

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: data.datasetLabel,
        data: data.data,
        backgroundColor: [...data.backgroundColor],
        datalabels: {
          anchor: 'start',
          align: 'end',
          offset: 10,
          formatter: function(value: any, context: any) {
            return context.chart.data.labels[context.dataIndex];
          }
        }
      }
    ],
  };

  // const dataSets = data.map((datasetData) => ({
  //   label: datasetData.datasetLabel,
  //   data: datasetData.data,
  //   backgroundColor: [...datasetData.backgroundColor],
  //   datalabels: {
  //     color: COLOR_DARK,
  //     anchor: 'start',
  //     align: 'end',
  //     offset: 10,
  //     formatter: function(value: any, context: any) {
  //       return context.chart.data.labels[context.dataIndex];
  //     }
  //   }
  // }))
  
  return (
    <div className={classes}>
      <Bar
        data={chartData}
        options={options}
        height={height}
        width={width}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default BarChart