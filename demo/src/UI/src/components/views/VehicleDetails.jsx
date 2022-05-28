import React from 'react'
import Event from '../layout/Event'
import styles from './vehicle-details.module.scss'

function VehicleDetails() {
    return (
        <div className={styles.container}>
            <img src="https://smartcdn.prod.postmedia.digital/driving/wp-content/uploads/2021/05/chrome-image-413110.png" className={styles.video} />

            <HeadingContainer label="Vehicle details">
                <div className={styles.vehicleDetails}>
                    <ul>
                        <li>
                            <div>Make</div>
                            <div>BMW</div>
                        </li>
                        <li>
                            <div>Model</div>
                            <div>3 Series</div>
                        </li>
                        <li>
                            <div>Year</div>
                            <div>2015</div>
                        </li>
                        <li>
                            <div>Colour</div>
                            <div>White</div>
                        </li>
                        <li>
                            <div>Licence plate</div>
                            <div>WP23LSA</div>
                        </li>
                        <li>
                            <div>MOT</div>
                            <div>Until 23/10/2022</div>
                        </li>
                    </ul>
                </div>
            </HeadingContainer>

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

export default VehicleDetails
