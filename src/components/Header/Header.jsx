import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <div className={"section " + style.header}>
            <div className="uni-wrapper">
                <div className="uni-container">
                    <div  className="heading-h1-cotnainer">
                        <h1>
                            Stolen Social Web
                        </h1>
                    </div>
                </div>
            </div>                        
        </div>
    )
}

export default Header;