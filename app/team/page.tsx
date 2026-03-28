import type { Metadata } from 'next'
import styles from '@/components/Page.module.css'

export const metadata: Metadata = {
  title: 'Meet the Team — Engineers, Designers & Innovators',
  description: 'Meet the people behind UnitechLabs — a passionate team of engineers, designers, and innovators building cutting-edge software, IoT, and AI solutions from Bangalore.',
  alternates: { canonical: 'https://unitechlabs.io/team' },
  openGraph: { title: 'Meet the UnitechLabs Team', url: 'https://unitechlabs.io/team' },
}

const team = [
  { name: 'Sudharshan V R', role: 'Founder & CEO', bio: '', initial: 'S' },
  { name: 'Sudharsan K', role: 'CMO', bio: '', initial: 'S' },
  { name: 'Manjunath Sathya', role: 'Investor', bio: '', initial: 'M' },
  { name: 'Kedilungdiakbo Z', role: 'President', bio: '', initial: 'K' },
  { name: 'Atul Kumar', role: 'Project Manager', bio: '', initial: 'A' },
  { name: 'Team Member', role: 'Marketing rep', bio: 'Details coming soon. Coordinates cross-functional teams and ensures timely, quality delivery.', initial: 'T' },
]

export default function TeamPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className="label" style={{ display: 'block', marginBottom: 16 }}>Unitechlabs leadership team update</p>
          <h1 className={`display ${styles.heroTitle}`}>Our <em>team</em></h1>
          <p className={styles.heroSub}>We’re happy to announce several executive role changes that reflect our recent progress and will ensure continued momentum toward our next major milestones.</p>
        </div>
      </section>
      <section className={`section ${styles.inner}`}>
        <div className="container">
          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.avatar}>{m.initial}</div>
                <h3 className={styles.name}>{m.name}</h3>
                <p className={styles.role}>{m.role}</p>
                <p className={styles.bio}>{m.bio}</p>
              </div>
            ))}
          </div>
          <div className={styles.cta}>
            <p className={styles.ctaText}>Interested in joining the team?</p>
            <a href="/#contact" className="btn btn--primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  )
}
