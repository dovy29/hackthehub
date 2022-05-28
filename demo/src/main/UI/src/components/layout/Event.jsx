import React from 'react'
import styles from './event.module.scss'

function Event({image, info}) {
  return (
    <div className={styles.container}>
        <img src={image} />
        <p>{info}</p>
    </div>
  )
}

export default Event
