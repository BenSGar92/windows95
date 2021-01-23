import React from 'react';
// import './App.css';

import Draggable from 'react-draggable';

class DragIcon6 extends React.Component {

  render() {
    return (
      <Draggable>
        <div className="drag-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57c0809af6bf29ec384916b2_Internet%20Explorer.png"/>
          <div className="iconText">Internet Explorer</div>
        </div>
      </Draggable>
    );
  }
}

export default DragIcon6;