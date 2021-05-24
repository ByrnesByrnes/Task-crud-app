import React, { useState } from 'react'
import { Card, Space, Typography } from 'antd';
import {EditTwoTone, DeleteTwoTone, CopyTwoTone} from '@ant-design/icons'
import { Menu } from '../'
import { UseClickOutside} from '../../hooks/useClickOutside'
import { StateContext} from '../../context/context'


export default function Task({task}) {
  const [toggle, setToggle] = useState(false)
  const [state, dispatch] = StateContext()


  const { Text } = Typography

  const domNode = UseClickOutside(() => {
    setToggle(false)
  })

  const handleCopy = () => {
    dispatch({
      type: 'COPY_TASK',
      payload: task
    })
  }
 
  const handleDelete = () => {
    dispatch({
      type: 'DELETE_TASK',
      payload: {
        id: task.id
      }
    })
  }

  const svgStyles= {
    fontSize: '1.5em', 
  }

  const titleStyles = {
    fontSize: `${task.titleSize}px`,
    color: task.titleColor.hex
  }

  const descriptionStyles = {
    fontFamily: `'Open Sans', sans-serif`,
    lineHeight: '22px',
    fontSize: `${task.descriptionSize}px`,
    color: task.descriptionColor.hex,

  }
  const cardStyles = {
    borderRadius: `${task.panelRadius}px`,
    backgroundColor: task.panelColor.hex,
    border: `1px solid ${toggle ? '#00A3FF' : task.panelColor.hex}`,
    boxShadow:  `0px 4px 24px ${toggle ? 'rgba(0, 163, 255, 0.14)' : 'rgba(0, 0, 0, 0.04)' }`,
    marginBottom: '1.5em'
  }

  return (
    <Card
      className="task" 
      title={<h1 style={titleStyles}>{task.title ? task.title : 'Custom Title'}</h1>} 
      bordered={false}
      headStyle={{
        padding: 0,
        margin: '0 1.5em',
      }}
      style={cardStyles}
      extra={
        <Space size={25}>
          <EditTwoTone style={svgStyles} onClick={()=> setToggle(!toggle)}/>
          <CopyTwoTone onClick={handleCopy} style={svgStyles}/>
          {state.tasks.length !== 1 ? 
            <DeleteTwoTone onClick={handleDelete} style={svgStyles} /> : 
            <DeleteTwoTone className="delete-disabled" twoToneColor="#E0E0E0" style={svgStyles} /> 
          }
        </Space>
        
      }
    >
      <Text style={descriptionStyles}>{task.description ? task.description : 'Custom body text'}</Text>
      <Menu toggle={toggle} ref={domNode} task={task} svgStyles={svgStyles}/>
    </Card>
  )
};
