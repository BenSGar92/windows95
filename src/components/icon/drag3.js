import React from 'react';
// import './App.css';

import Draggable from 'react-draggable';

class DragIcon3 extends React.Component {

  render() {
    return (
      <Draggable>
        <div className="drag-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e2a4ca7f058f7729a_Trash%20Can%2032x32.png"/>
          <div className="iconText">Recycle Bin</div>
        </div>
      </Draggable>
    );
  }
}

export default DragIcon3;