import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'

function Navigation() {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link to={'/'}><i className="fas fa-home"></i></Link>
                    <p>Home</p>
                </li>
                <li>
                    <Link to={'/events'}><i className="fas fa-calendar"></i></Link>
                    <p>Events</p>
                </li>
                <li>
                    <Link to={'/footage'}><i className="fas fa-video"></i></Link>
                    <p>Video</p>
                </li>
                <li>
                    <Link to={'/eventdetails'}><i className="fas fa-video"></i></Link>
                    <p>Network</p>
                </li>
                <li>
                    <Link to={'/footage'}><i className="fas fa-video"></i></Link>
                    <p>Settings</p>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation