import BarChart from './Bar'
import DoughnutChart from './Doughnut'

const Chart = ({
  variant,
  height = 190,
  width = 300,
  fillWidth = false,
  ...rest
}: IParrentChart) => {
  const contentType = {
    bar: <BarChart width={width} height={height} fillWidth={fillWidth} {...rest} />,
    doughnut: <DoughnutChart width={width} height={height} fillWidth={fillWidth} {...rest} />
  }

  return contentType[variant]
}

export default Chart