interface IParrentChart extends IChartProps{
  variant: 'bar' | 'doughnut'
}

interface IChartProps {
  data: any
  classes?: string
  height?: number
  width?: number
  fillWidth?: boolean
  labelPosition?: 'top' | 'bottom' | 'right' | 'left',
}