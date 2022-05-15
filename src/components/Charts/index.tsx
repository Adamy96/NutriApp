import BarChart from './Bar'

const Charts = ({ variant, data, classes }: ChartProps) => {
  const contentType = {
    bar: <BarChart data={data} classes={classes} />,
    pie: null
  }

  return contentType[variant]
}

export default Charts

interface ChartProps {
  variant: 'bar' | 'pie',
  data: any
  classes?: string
}