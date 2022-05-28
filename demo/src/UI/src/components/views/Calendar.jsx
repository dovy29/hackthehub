import React from 'react'
import Container from '../layout/Container'
import styles from './calendar.module.scss'

function Calendar() {
  return (
    <Container>
      <ul className={styles.eventList}>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
        <li>
          <div className={styles.event}>
            <div className={styles.info}>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.C05J_DcUKPHgDdEeVpzXHQHaEK%26pid%3DApi&f=1" />
              <p>05/06/2022</p>
            </div>
            <i className="fas fa-chevron-right" />
          </div>
        </li>
      </ul>
    </Container>
  )
}

export default Calendar