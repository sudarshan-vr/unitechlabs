'use client'
import styles from './Clients.module.css'

const clients = [
  { name: 'Sunrise Advertising', logo: 'https://sunriseadvertising.org/images/hero/logo.svg' },
  { name: 'Craftuary',           logo: 'https://craftuary.com/favicon.ico' },
  { name: 'Aroush Tech',         logo: 'http://aroushtech.in/wp-content/uploads/2025/06/AS-ED-LOGO-11_-_Edited-removebg-preview.png' },
  { name: 'AQ Research',         logo: '/p-l/aq-r.svg' },
  { name: 'EMBS',                logo: 'https://extramilesolutions.in/img/logo1.jpg' },
  { name: 'Coolify',             logo: '/p-l/coolify-nextjs.png' },
  { name: 'VAPI',                logo: '/p-l/vapi.svg' },
  { name: 'ShakeItAbhi',         logo: 'https://shakeitabhi.com/1a.png' },
  { name: 'Dr. Kite Academy',    logo: 'https://www.drkiteacademy.com/gallery_images/favicon.svg' },
]
const doubled = [...clients, ...clients]

export default function Clients() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.badgeContainer}>
            <img src="/goodfirms-and-google.svg" alt="GoodFirms and Google badges" className={styles.badgeImage} />
          </div>
          <div className={styles.track}>
            <div className={styles.list}>
              {doubled.map((c, i) => (
                <span key={i} className={styles.client}>
                  {c.logo
                    ? <img src={c.logo} alt={c.name} className={styles.logo} />
                    : <span className={styles.clientName}>{c.name}</span>
                  }
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
