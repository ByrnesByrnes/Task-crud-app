import React, { useState, useEffect } from 'react'
import { BlockPicker } from 'react-color';
import { UseClickOutside } from '../../hooks/useClickOutside'
import { Row, Col, Space, Input, Typography } from 'antd'
import { StateContext } from '../../context/context'



const titleStyles = {
  textTransform: 'capitalize',
  color: '#00A3FF',
  fontWeight: '400',
  fontSize: '1.125rem',
}



export default function DesignSub({
  task, textSize, textColor, handleChange, handleColor, name, subtitle = "size", keyValue
}) {
  const [state, dispatch] = StateContext()
  const [toggle, setToggle] = useState(false)

  const { Title } = Typography
  const { id } = task

  const inputStyles = {
    borderRadius: '4px',
  }

  const domNode = UseClickOutside(() => {
    setToggle(false)
  })

  // Rerender if value changes in task
  useEffect(() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task,
        [textSize]: textSize > 0 ? textSize : task[textSize],
        [textColor]: textColor,
        id
      }
    })
  }, [textSize, textColor])

  useEffect(() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task
      }
    })
  }, [])

  return (
    // In Mock up design is offset by 3 pixels
    <Col 
      span={22} 
      className="design"
      style={{
        marginBottom: '1.5em',
        paddingBottom: '1.5em'
      }}
    >
      <Title level={3}  style={titleStyles}>{name}</Title>
      <Row>
        <Col span={13}>
          <div className="input-box" style={{marginRight: '1.5em'}}>
            <label className="input-box__label">{subtitle}</label>
            <Input
              type="number"
              placeholder=" "
              name={keyValue}
              value={textSize}
              style={inputStyles}
              onChange={handleChange}
            />
          </div>

        </Col>
        <Col span={6}>
          <div className="input-box">
            <label className="input-box__label">Color</label>

            <div onClick={() => setToggle(true)} style={{ backgroundColor: textColor.hex }} className="pallet">

              <div ref={domNode} className={`pallet__picker ${toggle ? 'display' : ''}`}>
                <BlockPicker
                  color={textColor.hex}
                  onChange={handleColor}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  )
};
