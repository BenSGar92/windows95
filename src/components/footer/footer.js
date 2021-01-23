import React, {useState} from "react";
import "./footer.css"

function Footer(props) {

    const [openStart, setOpenStart] = useState(true)
    const [closeStart, setCloseStart] = useState(false)

    function changeButton1() {
        setOpenStart(false)
        setCloseStart(true)
        props.start()
    }

    function changeButton2() {
        setOpenStart(true)
        setCloseStart(false)
        props.closeStart()
    }

    return (
        <div className="footerBackground">
            <footer className="page-footer font-small py-1 text-white-50 fixed-bottom">
                { openStart ? <button onClick={changeButton1} className="startButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b11afbe18710ca164a57b1_Start%20Logo%2032x32.png"/>Start</button> : null }
                { closeStart ? <button onClick={changeButton2} className="startButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b11afbe18710ca164a57b1_Start%20Logo%2032x32.png"/>Start</button> : null }
            </footer>
        </div>
    );
}

export default Footer;