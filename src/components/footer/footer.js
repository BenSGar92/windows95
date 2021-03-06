import React, {useState} from "react";
import Moment from 'react-moment';
import "./footer.css"
import Clock from './clock/clock'

function Footer(props) {

    function startButton() {
        props.start()
    }

    

    return (
        <div className="footerBackground">
            <footer className="page-footer font-small py-1 text-white-50 fixed-bottom">
            <button onClick={startButton} className="startButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b11afbe18710ca164a57b1_Start%20Logo%2032x32.png"/>Start</button>
                <div className="clockBorder">
                    <div className="clock"><Clock /></div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;