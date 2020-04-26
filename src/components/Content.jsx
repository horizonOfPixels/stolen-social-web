import React from 'react'
import Profile from './Profile/Profile'
import style from './Content.module.css'

const Content = () => {
    return (
        <div className="section">
            <div className="uni-wrapper">
                <div className="uni-container">
                    <div className={style.contentContainer}>
                        <Profile />
                    </div>
                </div>
            </div>                        
        </div>
    )
}

export default Content;