import React from 'react'
import Event from '../layout/Event'
import styles from './event-details.module.scss'

function EventDetails() {
    return (
        <div>
            <video className={styles.video}></video>

            <div className={styles.actionButtons}>
                <button>SHARE</button>
                <button>REQUEST ASSISTANCE</button>
                <button>ATTACH</button>
            </div>

            <HeadingContainer label="Event record">
                <div>13/05/2022 16:14:23</div>
            </HeadingContainer>

            <HeadingContainer label="Vehicles involved">
                <Event image={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.osAKxvl0NvOFwNG-j-BXEwHaE8%26pid%3DApi&f=1'} info="BMW 3 Series" />
                <Event image={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.osAKxvl0NvOFwNG-j-BXEwHaE8%26pid%3DApi&f=1'} info="BMW 3 Series" />
                <Event image={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.osAKxvl0NvOFwNG-j-BXEwHaE8%26pid%3DApi&f=1'} info="BMW 3 Series" />
            </HeadingContainer>
        </div>
    )
}

function HeadingContainer({ label, children }) {
    return (
        <div className={styles.headingContainer}>
            <h5>{label}</h5>
            {children}
        </div>
    )
}

export default EventDetails