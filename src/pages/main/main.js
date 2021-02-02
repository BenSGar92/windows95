import React, { useState } from 'react'
import Footer from '../../components/footer/footer'
import DragIcon1 from '../../components/icon/drag1'
import DragIcon2 from '../../components/icon/drag2'
import DragIcon3 from '../../components/icon/drag3'
import DragIcon4 from '../../components/icon/drag4'
import DragIcon5 from '../../components/icon/drag5'
import Explorer from '../../components/icon/explorer'
import Paint from '../../components/paint/paint'
// import Browser from '../../components/browser/browser'
import Calc from '../../components/calculator/calculator'
import './main.css'
// import { Dropdown } from 'react-bootstrap';
import Draggable from 'react-draggable';

function Main() {

    const [showStart, setShowStart] = useState(false)
    const [showProgram, setShowProgram] = useState(false)
    const [showAccessories, setShowAccessories] = useState(false)
    const [showPaint, setShowPaint] = useState(false)
    // const [showBrowser, setShowBrowser] = useState(false)
    const [showCalc, setShowCalc] = useState(false)
    const [color, setColor] = useState(false)

    const openStart = () => {
        if (showStart == false) {
            setShowStart(true)
        } if (showStart == true) {
            setShowStart(false)
        }
        setShowProgram(false)
        setShowAccessories(false)
    }

    const showProgramFunction = () => {
        if (showProgram == false) {
            setShowProgram(true)
        } if (showProgram == true) {
            setShowProgram(false)
        }
    }

    const showAccessoriesFunction = () => {
        if (showAccessories == false) {
            setShowAccessories(true)
        } if (showAccessories == true) {
            setShowAccessories(false)
        }
    }

    const closePaint = () => {
        setShowPaint(false)
    }

    const closeCalc = () => {
        setShowCalc(false)
    }

    const openPaint = () => {
        if (showPaint == false) {
            setShowPaint(true)
        } if (showPaint == true) {
            setShowPaint(false)
        }
        openStart()
    }

    const calcFunction = () => {
        setShowCalc(true)
        openStart()
    }

    const openBrowser = () => {
        // setShowBrowser(true)
        console.log("Eventually this will be a working browser...hopefully")
    }

        return (
            <div>
                <div className="background">
                    <DragIcon1 />
                    <DragIcon2 />
                    <DragIcon3 />
                    <DragIcon4 />
                    <DragIcon5 />
                    <div onDoubleClick={openBrowser}>
                        <Explorer />
                    </div>
                </div>
                {/* { showBrowser ?
                    <div>
                        <Browser />
                    </div>
                : null} */}
                { showCalc ?
                    <Draggable>
                    <div className="container">
                        <div className="row calcHeader">
                            <div className="paintIcon"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000ee813bf6950b088acc_Calculator%2032x32.png"/><span>Calculator</span></div>
                            <div onClick={closeCalc} className="closeCalc">&#10006;</div>
                        </div>
                        <div className="row">
                            <div className="calcContainer">
                                <Calc />
                            </div>
                        </div>
                    </div>
                    </Draggable>
                : null}
                { showPaint ? 
                        <div className="container">
                            <div className="row paintHeader">
                                <div className="paintIcon"><img src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000d1b08345807bdc15b6_pbrush_1.ico_32x32.png"/><span>Paint</span></div>
                                <div onClick={closePaint} className="closePaint">&#10006;</div>
                            </div>
                            <div className="row">
                                
                                <div className="paintContainer">
                                    <div className="dropdownDiv">
                                    {/* <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Color
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdownMenu">
                                        <Dropdown.Item href="#/action-1">Red</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Orange</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Yellow</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Green</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Blue</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Purple</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Black</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Brown</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Erase</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown> */}
                                    </div>
                                    <Paint />
                                </div>
                            </div>
                        </div>
                : null}
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
                                <div className="programButton" onClick={showAccessoriesFunction}><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Accessories</span><img className="arrowRight2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
                            </div>
                            <div className="col-sm p-0">
                                <div className="programButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Start Up</span><img className="arrowRight3" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b124d371bead8852ab0e91_Menu%20Arrow.png"/></div>
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
                            { showAccessories ?
                            <div className="accessoriesBox">
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Games</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Internet Tools</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>Multimedia</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c44254eef5b558d0147b_Programs32x32.png"/><span>System Tools</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton" onClick={calcFunction}><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000ee813bf6950b088acc_Calculator%2032x32.png"/><span>Calculator</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88a9_Folder%20Icon%2032x32.png"/><span>Character Map</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b0bd8e54eef5b558ce88a9_Folder%20Icon%2032x32.png"/><span>Imaging</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57b1c5c82a4ca7f058f9569c_Notepad%2032x32.png"/><span>Word Pad</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000d13c801e0704634aa4_Online%20Reg%2032x32.png"/><span>Online Registration</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton" onClick={openPaint}><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000d1b08345807bdc15b6_pbrush_1.ico_32x32.png"/><span>Paint</span></div>
                                </div>
                                <div className="col-sm p-0">
                                    <div className="accessoriesButton"><img className="imgIcon2" src="https://daks2k3a4ib2z.cloudfront.net/57b0b52271bead8852aa6781/57e000d1b08345807bdc15b5_Wordpad%2032x32.png"/><span>Notepad</span></div>
                                </div>
                            </div>
                            : null}
                        </div>
                        : null}
                    </div>
                : null}
                
                <Footer start={openStart}/>
            </div>
        )
}

export default Main
