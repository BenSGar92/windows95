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
                        <div className="row">
                            <div className="vertical col-sm-2">
                                Windows 95
                            </div>
                            <div className="startMenuButtons col-sm-10">
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
                                </div>
                                <div className="col-sm">
                                    <button>BUTTON</button>
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
