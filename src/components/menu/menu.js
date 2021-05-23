import React, { createRef } from 'react'
import { Card, Col, Tabs } from 'antd';
import { FormatPainterOutlined, SettingOutlined } from '@ant-design/icons'
import { Setting, Design } from '../'


const Menu = React.forwardRef((props, ref) => {
  const { TabPane } = Tabs

  function callback(key) {
    console.log(key);
  }

  const svgStyles = {
    fontSize: '1.5rem',
    width: '100%',
  }

  return (
    <div ref={ref}>
      <Card
        className={`menu ${props.toggle ? 'active' : ''}`}
        bordered={false}
        style={{
          borderTopLeftRadius: '16px'
        }}
        bodyStyle={{
          padding: '0'
        }}

      >
        <Tabs
          centered
          defaultActiveKey="1"
          onChange={callback}
          tabBarStyle={{
            color: '#BDBDBD',
          }}
        >
          <TabPane tab={<SettingOutlined style={svgStyles} />} key="1">
            <Col span={22} offset={1}>
              <Setting task={props.task}/>
            </Col>
          </TabPane>


          <TabPane tab={<FormatPainterOutlined style={svgStyles} />} key="2">
            <Col offset={1}>
              <Design task={props.task}/>
            </Col>
          </TabPane>


        </Tabs>
      </Card>
    </div>
  )
});


export default Menu
// title={
  //   <Row style={{
  //     textAlign: 'center',
  //     height: '100%'
  //   }}>
  //     <Col span={12}>

  //       <SettingOutlined style={svgStyles} onClick={() => setTab(true)}/>

  //     </Col>
  //     <Col span={12}>
  //       <FormatPainterOutlined style={svgStyles} onClick={() => setTab(false)}/>
  //     </Col>
  //   </Row>
  // }
  // headStyle={{
  //   justifyContent: 'space-between',

  // }}