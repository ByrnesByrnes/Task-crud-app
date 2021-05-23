import './App.scss';
import { Header, Task } from './components'
import { Layout, Row, Col } from 'antd'
import { StateContextConsumer} from './context/context'

function App() {

  return (
    <Layout style={{ backgroundColor: 'unset' }}>
      <Header />

      <Row style={{ marginTop: '1.5em' }}>
        <Col span={20} offset={2}>
        <StateContextConsumer>

          {([{tasks}]) => ( 
            tasks.map((task, i) => (
              <Task task={task} key={i}/>
            ))
          )}

        </StateContextConsumer>
        </Col>
      </Row>

    </Layout>
  );
}

export default App;
