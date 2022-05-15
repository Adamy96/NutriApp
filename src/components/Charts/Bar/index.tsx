// @ts-nocheck
import { Bar } from 'react-chartjs-2';
import { COLOR_DARK } from '@constants'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = ({ data, classes }: BarChartProps) => {
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
          color: COLOR_DARK,
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
        height={190}
        width={300}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default BarChart

interface BarChartProps {
  data: any
  classes?: string
}