import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { FlowChartWithState, IChart } from '../src'

const App: React.FC = () => {
  const [chart, setChart] = React.useState<IChart | null>(null);
  React.useEffect(() => {
    const loadApi = async () => {
      setChart({
        offset: {
          x: 0,
          y: 0,
        },
        nodes: {
          node1: {
            id: 'node1',
            type: 'output-only',
            position: {
              x: 300,
              y: 100,
            },
            ports: {
              port1: {
                id: 'port1',
                type: 'output',
                properties: {
                  value: 'yes',
                },
              },
              port2: {
                id: 'port2',
                type: 'output',
                properties: {
                  value: 'no',
                },
              },
            },
          },
          node2: {
            id: 'node2',
            type: 'input-output',
            position: {
              x: 300,
              y: 300,
            },
            ports: {
              port1: {
                id: 'port1',
                type: 'input',
              },
              port2: {
                id: 'port2',
                type: 'output',
              },
            },
          },
          node3: {
            id: 'node3',
            type: 'input-output',
            position: {
              x: 100,
              y: 600,
            },
            ports: {
              port1: {
                id: 'port1',
                type: 'input',
              },
              port2: {
                id: 'port2',
                type: 'output',
              },
            },
          },
          node4: {
            id: 'node4',
            type: 'input-output',
            position: {
              x: 500,
              y: 600,
            },
            ports: {
              port1: {
                id: 'port1',
                type: 'input',
              },
              port2: {
                id: 'port2',
                type: 'output',
              },
            },
          },
        },
        links: {
          link1: {
            id: 'link1',
            from: {
              nodeId: 'node1',
              portId: 'port2',
            },
            to: {
              nodeId: 'node2',
              portId: 'port1',
            },
            properties: {
              label: 'example link label',
            },
          },
          link2: {
            id: 'link2',
            from: {
              nodeId: 'node2',
              portId: 'port2',
            },
            to: {
              nodeId: 'node3',
              portId: 'port1',
            },
            properties: {
              label: 'another example link label',
            },
          },
          link3: {
            id: 'link3',
            from: {
              nodeId: 'node2',
              portId: 'port2',
            },
            to: {
              nodeId: 'node4',
              portId: 'port1',
            },
          },
        },
        selected: {},
        hovered: {},
      })
    }

    // tslint:disable-next-line: no-floating-promises
    loadApi()

  }, [])

  return chart ? <FlowChartWithState initialValue={chart}/> : <div>loading</div>
}

ReactDOM.render(<App />, document.getElementById('app'))
