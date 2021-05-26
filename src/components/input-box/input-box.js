import React from 'react'
import { Input, Typography } from 'antd'
import PropTypes from 'prop-types'


export default function InputBox({
  subtitle,
  keyValue,
  inputValue,
  inputType,
  handleChange,
  showPx,
  placeholder,
  textBox,
}) {

  const inputStyles ={
    borderRadius: '4px',
  }


  const { TextArea } = Input
  const { Text, } = Typography

  return (
    <Input.Group className="input-box">
      <Text className="input-box__label">{subtitle}</Text>
      {
        !textBox ?
          <Input
            className="design__input"
            size="large"
            type={inputType}
            placeholder={placeholder}
            name={keyValue}
            value={inputValue}
            style={inputStyles}
            onChange={handleChange}
          />
          :
          <div className="input-box__text-area-wrapper">
            {/* Wrapper for  resize tool in textarea */}
            <TextArea
              placeholder="Enter custom text"
              size="large"
              style={inputStyles}
              name="description"
              value={inputValue}
              onChange={handleChange}
            />
          </div>
      }
      {
        showPx && <span className="input-box__pixel" style={{ left: `calc(1em + ${Number(inputValue.toString().length) * .525}em)` }}>px</span>
      }
    </Input.Group>
  )
};

InputBox.defaultProps = {
  showPx: false,
  placeholder: '',
  InputType: 'text',
  textBox: false
}