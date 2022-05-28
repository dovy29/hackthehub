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
                    <Link to={'/eventdetails'}><i className="fas fa-car-crash"></i></Link>
                    <p>Events</p>
                </li>
                <li>
                    <Link to={'/vehicledetails'}><i class="fas fa-car"></i></Link>
                    <p>Vehicle details</p>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation