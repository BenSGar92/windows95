import React from 'react';
// import './App.css';

import Draggable from 'react-draggable';

class DragIcon5 extends React.Component {

  render() {
    return (
      <Draggable>
        <div className="drag-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88aa_Run%2032x32.png"/>
          <div className="iconText">Welcome Window</div>
        </div>
      </Draggable>
    );
  }
}

export default DragIcon5;