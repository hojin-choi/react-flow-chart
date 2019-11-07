import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FlowChartWithState, IChart } from '../src'

const App: React.FC = () => {
  const [chart, setChart] = React.useState<IChart | null>(null);
  React.useEffect(() => {
    const loadApi = async () => {
      let url = "http://localhost:3000/iChart";

      let iChart = await fetch(url).then(resp => resp.json());
      setChart(iChart);
    }

    // tslint:disable-next-line: no-floating-promises
    loadApi()

  }, [])

  return chart ? <FlowChartWithState initialValue={chart}/> : <div>loading</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
