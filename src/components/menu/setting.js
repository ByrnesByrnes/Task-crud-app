import React, { useState, useEffect } from 'react'
import { Input, Col } from 'antd'
import { StateContext } from '../../context/context'

export default function Setting({ task }) {
  const [state, dispatch] = StateContext()
  const [editTask, setEditTask] = useState({
    title: '',
    description: ''
  })

  const { id } = task

  const { TextArea } = Input

  const inputStyles = {
    borderRadius: '4px'
  }


  const handleInput = e => {
    setEditTask({ ...editTask, [e.target.name]: e.target.value })
  }

  // Rerender if value changes in task
  useEffect(() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task,
        title: editTask.title.length > 0 ? editTask.title : task.title,
        description: editTask.description.length > 0 ? editTask.description : task.description,
        id
      }
    })
  }, [editTask, dispatch])

  // Initial Render on page load
  useEffect(() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task
      }
    })
  }, [])

  const { title, description } = editTask
  console.log(state.tasks[task.id], "tasks")
  console.log(task.id, 'task id')
  console.log(editTask)
  return (
    <Col span={24}>
      <div className="input-box">
        <label className="input-box__label">Title Text</label>
        <Input
          placeholder="Enter custom title"
          style={inputStyles}
          name="title"
          value={title}
          onChange={handleInput}
        />
      </div>
      <div className="input-box">
        <label className="input-box__label">Body Text</label>
        {/* adjust the bottom right adjuster it's different */}
        <TextArea
          placeholder="Enter custom text"
          size="large"
          style={inputStyles}
          name="description"
          value={description}
          onChange={handleInput}
        />
      </div>
    </Col>
  )
};
