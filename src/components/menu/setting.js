import React, { useState, useEffect } from 'react'
import { Input, Col } from 'antd'
import { StateContext } from '../../context/context'

export default function Setting({ task }) {
  const [state, dispatch] = StateContext()
  const [editTask, setEditTask] = useState({
    title: '',
    description: ''
  })

  const { TextArea } = Input

  const inputStyles = {
    borderRadius: '4px'
  }

  const inputBoxStyles = {
    marginTop: '1.5em'
  }

  const handleInput = e => {
    setEditTask({ ...editTask, ...task, [e.target.name]: e.target.value })
  }

  // Rerender if value changes in task
  useEffect(() => {
  
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        // hasss to do with this
        
        title: editTask.title.length >= 0 ? editTask.title : '',
        description: editTask.description.length >= 0 ? editTask.description : '',
        ...editTask,
      }
    })
  }, [editTask, dispatch])

  // Initial Render on page load
  // useEffect(() => {
  //   dispatch({
  //     type: 'EDIT_TASK',
  //     payload: {
  //       ...task,
  //       title: '',
  //       description: ''
  //     }
  //   })
  // }, [])

  const { title, description } = editTask

  console.log(task,'TASK SETTINGSSSSSSSSS')
  console.log(title, 'editTask SETTING title')
  console.log(description, 'editTask SETTINH DEScription')
  return (
    <Col span={24}>
      <div className="input-box" style={inputBoxStyles}>
        <label className="input-box__label">Title Text</label>
        <Input
          placeholder="Enter custom title"
          style={inputStyles}
          name="title"
          value={task.title}
          onChange={handleInput}
        />
      </div>
      <div className="input-box" style={inputBoxStyles}>
        <label className="input-box__label">Body Text</label>
        {/* adjust the bottom right adjuster it's different */}
        <div className="input-box__text-area-wrapper">
          <TextArea
            placeholder="Enter custom text"
            size="large"
            style={inputStyles}
            name="description"
            value={task.description}
            onChange={handleInput}
          />
        </div>
      </div>
    </Col>
  )
};
