import React, { useState, useEffect } from 'react'
import { StateContext } from '../../context/context'
import { DesignSub } from '../'


export default function Design({task}) {
  const [state, dispatch] = StateContext()
  const [inputs, setInputs] = useState({
    titleSize: 0,
    titleColor: { hex: ''},
    descriptionSize: 0,
    descriptionColor: {hex: '' },
    panelRadius: 0,
    panelColor: {hex: ''}
  })

  const handleChange = e => setInputs({...inputs, ...task, [e.target.name]: e.target.value}) 
  
  // get attribute for key: color figure out eventually
  const handleTitleColor = (color) => setInputs({...inputs, ...task, titleColor: color})
  const handleDescriptionColor = (color) => setInputs({...inputs,...task, descriptionColor: color})
  const handlePanelColor = (color) => setInputs({...inputs, ...task, panelColor: color})


  // Rerender if value changes in task
  useEffect (() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        titleSize: inputs.titleSize,
        titleColor: inputs.titleColor,
        descriptionSize:inputs.descriptionSize,
        descriptionColor: inputs.descriptionColor,
        panelRadius: inputs.panelRadius,
        panelColor: inputs.panelColor,
        ...inputs,
      }
    })
  },[inputs, dispatch])

  return (

    <div style={{ height: '100vh' }}>
    <DesignSub 
      name="Title"
      keyValue="titleSize"
      task={task} 
      textSize={task.titleSize} 
      textColor={task.titleColor}
      handleChange={handleChange} 
      handleColor={handleTitleColor}
      setInputs={setInputs}
    />
    <DesignSub 
      name="Body"
      keyValue="descriptionSize"
      task={task} 
      textSize={task.descriptionSize} 
      textColor={task.descriptionColor}
      handleChange={handleChange} 
      handleColor={handleDescriptionColor}

    />
    <DesignSub 
      name="Panel"
      keyValue="panelRadius"
      task={task} 
      textSize={task.panelRadius} 
      textColor={task.panelColor}
      handleChange={handleChange} 
      handleColor={handlePanelColor}
      subtitle="Corner Radius"
    />







      {/* <div className="design">
        <h3 className="design__subtitle">title</h3>
        <Row>
          <Col span={14}>
            <div className="input-box">
              <label className="input-box__label">Size</label>
              <Input
                type="number"
                placeholder="Enter custom title"
                name="titleSize"
                value={titleSize}
                style={inputStyles}
                onChange={handleChange}
              />
            </div>
          </Col>
          <Col span={8}>
            <div className="input-box">
              <label className="input-box__label">Color</label>

              <div onClick={() => setToggle(true)} style={{backgroundColor: task.titleColor.hex }} className="pallet">

                <div ref={domNode} className={`pallet__picker ${toggle ? 'display' : ''}`}>
                  <BlockPicker 
                    color={task.titleColor.hex}
                    onChange={handleColor} 
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div> */}
    </div>



  )
};
