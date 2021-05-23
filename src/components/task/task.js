import React, { useState } from 'react'
import { Card, Space } from 'antd';
import {EditTwoTone, DeleteTwoTone, CopyTwoTone} from '@ant-design/icons'
import { Menu } from '../'
import { UseClickOutside} from '../../hooks/useClickOutside'
import { StateContext} from '../../context/context'


export default function Task({task}) {
  const [toggle, setToggle] = useState(false)
  const [state, dispatch] = StateContext()

  const domNode = UseClickOutside(() => {
    setToggle(false)
  })

  const handleCopy = e => {
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
    fontSize: `${task.descriptionSize}px`,
    color: task.descriptionColor.hex
  }
  const cardStyles = {
    borderRadius: `${task.panelRadius}px`,
    backgroundColor: task.panelColor.hex
  }

  return (
    <Card
      
      className="task" 
      title={<h1 style={titleStyles}>{task.title}</h1>} 
      bordered={false}
      headStyle={{
        padding: 0,
        margin: '1em 24px',
      }}
      style={cardStyles}
      extra={
        
        <Space size={25}>
          <EditTwoTone style={svgStyles} onClick={()=> setToggle(!toggle)}/>
          <CopyTwoTone onClick={handleCopy} style={svgStyles}/>
          {state.tasks.length !== 1 ? 
            <DeleteTwoTone onClick={handleDelete} style={svgStyles} /> : 
            <DeleteTwoTone twoToneColor="#E0E0E0" style={svgStyles} /> 
          }
        </Space>
        
      }
    >
      <p style={descriptionStyles} className="task__content">{task.description}</p>
      <Menu toggle={toggle} ref={domNode} task={task}/>
    </Card>
  )
};
