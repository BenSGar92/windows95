import React from 'react';
import './drag.css';

import Draggable from 'react-draggable';

class DragIcon1 extends React.Component {

  render() {
    return (
      <Draggable>
        <div className="drag-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e1fd32dc352b10b0e_My%20Computer%2032x32.png"/>
          <div className="iconText">My Computer</div>
        </div>
      </Draggable>
    );
  }
}

export default DragIcon1;