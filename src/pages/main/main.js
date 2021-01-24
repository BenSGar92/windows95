import React, { useState } from 'react'
import Footer from '../../components/footer/footer'
import DragIcon1 from '../../components/icon/drag1'
import DragIcon2 from '../../components/icon/drag2'
import DragIcon3 from '../../components/icon/drag3'
import DragIcon4 from '../../components/icon/drag4'
import DragIcon5 from '../../components/icon/drag5'
import DragIcon6 from '../../components/icon/drag6'
import './main.css'

function Main() {

    const [showStart, setShowStart] = useState(false)

    const openStart = () => {
        setShowStart(true)
        console.log("Test")
    }

    const closeStart = () => {
        setShowStart(false)
        console.log("Test2")
    }

        return (
            <div>
                <div className="background">
                    <DragIcon1 />
                    <DragIcon2 />
                    <DragIcon3 />
                    <DragIcon4 />
                    <DragIcon5 />
                    <DragIcon6 />
                </div>
                { showStart ? 
                    <div className="startBox">
                        <div className="row windows95Row">
                            <div className="vertical col-sm-3">
                                <span className="spanWindows">Windows</span> <span className="span95">95</span>
                            </div>
                            <div className="startMenuButtons col-sm-9 p-0">
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/>Programs<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88a8_Documents%2032x32.png"/>Documents<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8ee18710ca16498bb6_Settings%2032x32.png"/>Settings<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c4421fd32dc352b2e255_Find%2032x32.png"/>Find<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c442ec62b90517b967cc_Help%2032x32.png"/>Help</div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88aa_Run%2032x32.png"/>Run</div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton divShutdown"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e71bead8852aa8020_Shut%20Down%2032x32.png"/>Shut Down...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                : null}
                <Footer start={openStart} closeStart={closeStart}/>
            </div>
        )
}

export default Main
