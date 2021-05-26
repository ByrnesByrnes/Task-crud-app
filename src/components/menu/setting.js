import React, { useState, useEffect } from 'react'
import { Col } from 'antd'
import { StateContext } from '../../context/context'
import { InputBox } from '../'

export default function Setting({ task }) {
  const [state, dispatch] = StateContext()
  const [editTask, setEditTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = e => {
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
    <Col span={24} style={{marginTop: '1.35em'}}>
      <InputBox
        subtitle="title text"
        keyValue="title"
        placeholder="Enter custom title"
        handleChange={handleChange}
      />
      <InputBox
        subtitle="body text"
        keyValue="description"
        placeholder="Enter custom title"
        handleChange={handleChange}
        textBox={true}
      />
    </Col>
  )
};


















/* <Input.Group className="input-box" style={inputBoxStyles}>
  <Text className="input-box__label">Title Text</Text>
  <Input
    placeholder="Enter custom title"
    size="large"
    style={inputStyles}
    name="title"
    value={task.title}
    onChange={handleChange}
  />
</Input.Group> */
/* <Input.Group className="input-box" style={inputBoxStyles}>
  <Text className="input-box__label">Body Text</Text>

  Wrapper for  resize tool in textarea
  <div className="input-box__text-area-wrapper">
    <TextArea
      placeholder="Enter custom text"
      size="large"
      style={inputStyles}
      name="description"
      value={task.description}
      onChange={handleChange}
    />
  </div>
</Input.Group> */