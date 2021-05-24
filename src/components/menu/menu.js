import React, { forwardRef } from 'react'
import { Card, Col, Tabs } from 'antd';
import { FormatPainterOutlined, SettingOutlined } from '@ant-design/icons'
import { Setting, Design } from '../'


const Menu = forwardRef((props, ref) => {
  const { TabPane } = Tabs

  return (
    // grabs ref to allow click outside to function
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
          tabBarStyle={{
            color: '#BDBDBD',
          }}
        >
          <TabPane tab={<SettingOutlined style={props.svgStyles} />} key="1">
            <Col span={22} offset={1} >
              <Setting task={props.task} />
            </Col>
          </TabPane>

          <TabPane tab={<FormatPainterOutlined style={props.svgStyles} />} key="2">
            {/* In Mock up design is offset by 3 pixels */}
            <Col span={21} offset={1}>
              <Design task={props.task} />
            </Col>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
});

export default Menu