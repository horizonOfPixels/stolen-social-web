import React from 'react'
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return ( 
        <div className="section">
            <div className="uni-wrapper">
                <div className="uni-container">
                    <div>
                        <nav>
                            <div><NavLink to="/profile" activeClassName={s.activeClass} >Profile</NavLink></div>
                            <div><NavLink to="/dialogs">Messages</NavLink></div>
                        </nav>
                    </div>
                </div>
            </div>                        
        </div>       
        
    )
}

export default Navigation;