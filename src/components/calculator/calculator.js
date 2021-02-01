import React, { Component } from 'react'
import './calculator.css'
// import {render} from 'react-dom'
import Calculator from 'awesome-react-calculator'
import Draggable from 'react-draggable';

// const style = {
//     height: '24rem',
//     width: '15rem'
// }

export default class Calc extends Component {
    handleInput(input) {
        console.log(`${input.expression} is shown in the calculator, User clicked the ${input.key}`)
      }
     
      onResultChange(newResult) {
        console.log(newResult)
        console.log(`${newResult.expression} is validated as ${newResult.result} `)
      }
    render() {
        return (
                    <div className="calc">
                        <Calculator
                        onNewInput={this.handleInput}
                        onResultChange={this.onResultChange}/>
                    </div>
        )
    }
}
