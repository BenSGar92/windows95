import './newpaint.css';
import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import classNames from "./newpaint.css";

export default class NewPaint extends Component {

  state = {
    color: "black",
    width: 1000,
    height: 700,
    brushRadius: 2,
    lazyRadius: 1
  };

  componentDidMount() {
    // let's change the color randomly every 2 seconds. fun!
    // window.setInterval(() => {
    //   this.setState({
    //     color: "#" + Math.floor(Math.random() * 16777215).toString(16)
    //   });
    // }, 2000);
  }
  render() {

    const changeColor = (e) => {
      e.preventDefault()
      console.log(e.target.value)
      this.setState({ color: e.target.value })
    }

    return (
          <div className="row paintContainer">
            <div className={classNames.tools}>
              <button className="marginButton" onClick={() => {localStorage.setItem("savedDrawing", this.saveableCanvas.getSaveData());}}>Save</button>
              <button onClick={() => {this.saveableCanvas.clear();}}>Clear</button>
              <button onClick={() => {this.saveableCanvas.undo();}}>Undo</button>
              <label>Brush-Radius:</label>
              <input type="number" value={this.state.brushRadius} onChange={e => this.setState({ brushRadius: parseInt(e.target.value, 10) })}/>
              <button className="colorBox red" value="red" onClick={changeColor}></button>
              <button className="colorBox orange" value="orange" onClick={changeColor}></button>
              <button className="colorBox yellow" value="yellow" onClick={changeColor}></button>
              <button className="colorBox green" value="green" onClick={changeColor}></button>
              <button className="colorBox blue" value="blue" onClick={changeColor}></button>
              <button className="colorBox indigo" value="indigo" onClick={changeColor}></button>
              <button className="colorBox violet" value="violet" onClick={changeColor}></button>
              <button className="colorBox black" value="black" onClick={changeColor}></button>
              <button className="colorBox brown" value="brown" onClick={changeColor}></button>
              <button className="colorBox white" value="white" onClick={changeColor}></button>
              {/* <button onClick={() => {this.loadableCanvas.loadSaveData(localStorage.getItem("savedDrawing"));}}>Load:</button> */}
            </div>
            <div className="canvasBorder">
            <CanvasDraw
              hideGrid
              ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
              brushColor={this.state.color}
              brushRadius={this.state.brushRadius}
              lazyRadius={this.state.lazyRadius}
              canvasWidth={this.state.width}
              canvasHeight={this.state.height}
            />
            </div>
          </div>
    );
  }
}
