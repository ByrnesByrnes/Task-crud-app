import React, { useState, useEffect } from 'react'
import { StateContext } from '../../context/context'
import { DesignSub } from '../'


export default function Design({task}) {
  const [state, dispatch] = StateContext()
  const [inputs, setInputs] = useState({
    titleSize: 32,
    titleColor: { hex:'#0E2748'},
    descriptionSize: 16,
    descriptionColor: {hex: '#4F4F4F' },
    panelRadius: 16,
    panelColor: {hex: '#fff'}
  })

  const {id} = task

  const handleChange = e => setInputs({...inputs, [e.target.name]: e.target.value}) 
  
  // get attribute for key: color figure out eventually
  const handleTitleColor = (color) => setInputs({...inputs, titleColor: color})
  const handleDescriptionColor = (color) => setInputs({...inputs, descriptionColor: color})
  const handlePanelColor = (color) => setInputs({...inputs, panelColor: color})


  // Rerender if value changes in task
  useEffect (() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task,
        titleSize: inputs.titleSize.length !== 0 ? inputs.titleSize : 32,
        titleColor: inputs.titleColor,
        descriptionSize: inputs.descriptionSize.length !== 0 ? inputs.descriptionSize : 16,
        descriptionColor: inputs.descriptionColor,
        panelRadius: inputs.panelRadius.length !== 0 ? inputs.panelRadius : 16,
        panelColor: inputs.panelColor,
        id
      }
    })
  },[inputs, dispatch])
  // onSwatchHover 
  useEffect(() => {
    dispatch({
      type: 'EDIT_TASK',
      payload: {
        ...task
      }
    })
  },[])


  const { 
    titleSize, 
    titleColor, 
    descriptionSize ,
    descriptionColor,
    panelRadius,
    panelColor
  } = inputs

  return (

    <div style={{ height: '100vh' }}>
    <DesignSub 
      name="Title"
      keyValue="titleSize"
      task={task} 
      textSize={titleSize} 
      textColor={titleColor}
      handleChange={handleChange} 
      handleColor={handleTitleColor}

    />
    <DesignSub 
      name="Body"
      keyValue="descriptionSize"
      task={task} 
      textSize={descriptionSize} 
      textColor={descriptionColor}
      handleChange={handleChange} 
      handleColor={handleDescriptionColor}

    />
    <DesignSub 
      name="Panel"
      keyValue="panelRadius"
      task={task} 
      textSize={panelRadius} 
      textColor={panelColor}

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
