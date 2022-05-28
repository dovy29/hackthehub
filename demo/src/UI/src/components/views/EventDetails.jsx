import React from 'react'
import Event from '../layout/Event'
import styles from './event-details.module.scss'

function EventDetails() {
    return (
        <div className={styles.container}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" className={styles.video} />

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

            <HeadingContainer label="Location">
                <img className={styles.location} src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.images.express.co.uk%2Fimg%2Fdynamic%2F1%2F590x%2Fsecondary%2FBelfast-fire-map-latest-update-1481695.jpg%3Fr%3D1535461849166&f=1&nofb=1" />
            </HeadingContainer>

            <ShareTile title="///trick.scenes.knots" />
            <ShareTile title="29 College Square N, Belfast BT1 2JN" />

            <Gallery />

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

function ShareTile({ title }) {
    return (
        <div className={styles.shareTile}>
            <p>{title}</p>
            <i class="fas fa-upload"></i>
        </div>
    )
}

function Gallery() {
    return (
        <div className={styles.gallery}>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
            <div className={styles.tile}>
                <i class="fas fa-image"></i>
            </div>
        </div>
    )
}

export default EventDetails
