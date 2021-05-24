import React, { useState, useEffect } from 'react'
import { Input, Col, Typography } from 'antd'
import { StateContext } from '../../context/context'

export default function Setting({ task }) {
  const [state, dispatch] = StateContext()
  const [editTask, setEditTask] = useState({
    title: '',
    description: ''
  })

  const { Text } = Typography
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
        title: editTask.title.length >= 0 ? editTask.title : '',
        description: editTask.description.length >= 0 ? editTask.description : '',
        ...editTask,
      }
    })
  }, [editTask, dispatch])

  return (
    <Col span={24}>
      <Input.Group className="input-box" style={inputBoxStyles}>
        <Text className="input-box__label">Title Text</Text>
        <Input
          placeholder="Enter custom title"
          size="large"
          style={inputStyles}
          name="title"
          value={task.title}
          onChange={handleInput}
        />
      </Input.Group>
      <Input.Group className="input-box" style={inputBoxStyles}>
        <Text className="input-box__label">Body Text</Text>

        {/* Wrapper for  resize tool in textarea */}
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
      </Input.Group>
    </Col>
  )
};
