import BarChart from './Bar'
import PieChart from './Pie'

const Charts = ({ variant, data, classes }: ChartProps) => {
  const contentType = {
    bar: <BarChart data={data} classes={classes} />,
    pie: <PieChart />
  }

  return contentType[variant]
}

export default Charts

interface ChartProps {
  variant: 'bar' | 'pie',
  data: any
  classes?: string
}