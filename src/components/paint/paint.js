import React, { useRef, useEffect, useState } from 'react';
import './paint.css'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Paint() {

  const canvasRef = useRef(null)
  const contextRef = useRef(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [color, setColor] = useState("black")

  // const handleSelect=(e)=>{
  //   console.log(e);
  //   setColor(e)
  // }

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 3850;
    canvas.height = 1950;
    canvas.style.width = `${1000}px`;
    canvas.style.height = `${750}px`;

    const context = canvas.getContext("2d")
    context.scale(3.85, 2.58);
    context.lineCap = "round"
    //this line will provide the color - maybe change that to let users type in a color or click a color
    context.strokeStyle = {color}
    //here the line thickness is defined
    context.lineWidth = 5
    contextRef.current = context
  }, [])

  const startDrawing = ({nativeEvent}) => {
    const {offsetX, offsetY} = nativeEvent
    contextRef.current.beginPath()
    contextRef.current.moveTo(offsetX, offsetY)
    setIsDrawing(true)
  }

  const finishDrawing = () => {
    contextRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = ({nativeEvent}) => {
    if(!isDrawing){
      return
    }
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY)
    contextRef.current.stroke()
  }

  return (
    <div>
      <div className="dropdownDiv">
      <Dropdown>
      <DropdownButton className="dropdownMenu">
          <Dropdown.Item eventKey="red">Red</Dropdown.Item>
          <Dropdown.Item>Orange</Dropdown.Item>
          <Dropdown.Item>Yellow</Dropdown.Item>
          <Dropdown.Item>Green</Dropdown.Item>
          <Dropdown.Item>Blue</Dropdown.Item>
          <Dropdown.Item>Purple</Dropdown.Item>
          <Dropdown.Item>Black</Dropdown.Item>
          <Dropdown.Item>Brown</Dropdown.Item>
          <Dropdown.Item>Erase</Dropdown.Item>
      </DropdownButton>
      </Dropdown>
      </div>
      <div id="canvasDiv">
        <canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef}
        />
      </div>
    </div>
  )
}

export default Paint
