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
    const [showProgram, setShowProgram] = useState(false)

    const openStart = () => {
        setShowStart(true)
    }

    const closeStart = () => {
        setShowStart(false)
    }

    const showProgramFunction = () => {
        console.log("Program")
        if (showProgram == false) {
            setShowProgram(true)
        } if (showProgram == true) {
            setShowProgram(false)
        }
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
                                    <div className="divButton" onClick={showProgramFunction}><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/>Programs<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88a8_Documents%2032x32.png"/>Documents<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8ee18710ca16498bb6_Settings%2032x32.png"/>Settings<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c4421fd32dc352b2e255_Find%2032x32.png"/>Find<img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c442ec62b90517b967cc_Help%2032x32.png"/>Help</div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88aa_Run%2032x32.png"/>Run</div>
                                </div>
                                <div className="col-sm startDiv">
                                    <div className="divButton divShutdown"><img className="imgIcon1" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e71bead8852aa8020_Shut%20Down%2032x32.png"/>Shut Down...</div>
                                </div>
                            </div>
                        </div>
                        { showProgram ? 
                        <div className="programBox">
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Accessories</span><img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Start Up</span><img className="arrowRight" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57dffc3c437ad7d20b3dde20_Interenet%20Explorer%2032x32.png"/><span>Internet Explorer</span></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57dffd355056a8537bfa6730_Internet%20Mail%2032x32.png"/><span>Internet Mail</span></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57dffd35813bf6950b08758c_Internet%20News%2032x32.png"/><span>Internet News</span></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57dffd613c801e0704633258_MS-DOS_icon.png"/><span>MS-DOS Prompt</span></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57dffc3c3c801e0704631526_File%20Explorer%2032x32.png"/><span>Windows Explorer</span></div>
                            </div>
                        </div>
                        : null}
                    </div>
                : null}
                
                <Footer start={openStart} closeStart={closeStart}/>
            </div>
        )
}

export default Main
