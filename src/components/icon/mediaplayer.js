import React from 'react';
// import './App.css';

import Draggable from 'react-draggable';

class MediaPlayerIcon extends React.Component {

  render() {
    return (
      <Draggable>
        <div className="drag-wrapper">
          <img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e00b5f437ad7d20b3e2251_Media%20Player.ico_32x32.png"/>
          <div className="iconText">Media Player</div>
        </div>
      </Draggable>
    );
  }
}

export default MediaPlayerIcon;