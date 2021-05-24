import React, { useState, useEffect } from 'react'
import { BlockPicker } from 'react-color';
import { UseClickOutside } from '../../hooks/useClickOutside'
import { Row, Col, Input, Typography } from 'antd'
import { StateContext } from '../../context/context'



const titleStyles = {
  textTransform: 'capitalize',
  color: '#00A3FF',
  fontWeight: '400',
  fontSize: '1.125rem',
  marginTop: '1.5em'
}

export default function DesignSub({
  task, textSize, textColor, handleChange, handleColor, name, subtitle = "size", keyValue, setInputs
}) {
  const [state, dispatch] = StateContext()
  const [toggle, setToggle] = useState(false)

  const { Title, Text } = Typography
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
        [textSize]: textSize > 0 ? textSize : task[textSize],
        [textColor]: textColor,
        ...task,
        id
      }
    })
  }, [textSize, textColor])

  return (

    <Col
      span={24}
      className="design"
      style={{
        paddingBottom: '1.5em'
      }}
    >
      <Title level={3} style={titleStyles}>{name}</Title>
      <Row>
        <Col span={14}>
          <Input.Group className="input-box" style={{ paddingRight: '1.5em' }}>
            <Text className="input-box__label">{subtitle}</Text>
            <Input
              className="design__input"
              size="large"
              type="number"
              placeholder=""
              name={keyValue}
              value={textSize}
              style={inputStyles}
              onChange={handleChange}
            />
            <span className="input-box__pixel" style={{ left: `calc(1em + ${Number(textSize.toString().length) * .525}em)` }}>px</span>
          </Input.Group>

        </Col>
        <Col span={6}>
          <Input.Group className="input-box">
            <Text className="input-box__label">Color</Text>
            <div onClick={() => setToggle(true)} style={{ backgroundColor: textColor.hex }} className="pallet">

              <div ref={domNode} className={`pallet__picker ${toggle ? 'display' : ''}`}>
                <BlockPicker
                  color={textColor.hex}
                  onChange={handleColor}
                />
              </div>
            </div>
          </Input.Group>
        </Col>
      </Row>
    </Col>
  )
};
