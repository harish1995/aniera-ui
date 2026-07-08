import { useState, useEffect } from 'react'
import styles from './App.module.css'
import heroLogo from './assets/hero.png'

const TARGET = new Date('2026-08-01T00:00:00')

function getTimeLeft() {
  const diff = TARGET - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days:    Math.floor(diff / 86400000),
    hours:   Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000)  / 60000),
    seconds: Math.floor((diff % 60000)    / 1000),
  }
}

function pad(n) {
  return String(n).padStart(2, '0')
}

const PILLARS = [
  { icon: '♻', label: 'Sustainably Sourced' },
  { icon: '✦', label: 'Ethically Crafted'   },
  { icon: '♀', label: 'Women Empowered'     },
]

export default function App() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { value: pad(time.days),    label: 'Days'    },
    { value: pad(time.hours),   label: 'Hours'   },
    { value: pad(time.minutes), label: 'Minutes' },
    { value: pad(time.seconds), label: 'Seconds' },
  ]

  return (
    <div className={styles.page}>
      {/* Decorative background shapes */}
      <div className={styles.bgCircleTop} />
      <div className={styles.bgCircleBottom} />

      <div className={styles.container}>

        {/* Logo / Brand */}
        <header className={styles.header}>
          <img src={heroLogo} alt="Aneira" className={styles.logoImg} />
          <span className={styles.logoName}>ANEIRA</span>
        </header>

        {/* Tag line */}
        <div className={styles.badge}>Coming Soon &nbsp;·&nbsp; 1 August 2026</div>

        {/* Headline */}
        <h1 className={styles.headline}>
          <span style={{whiteSpace: 'nowrap'}}>Main character, <em>Always.</em></span>
        </h1>

        <p className={styles.sub}>
          Fashion that honours the earth and the hands that craft it.
          <br />
          Timeless pieces for the conscious woman.
        </p>

        {/* Pillars */}
        <ul className={styles.pillars}>
          {PILLARS.map(({ icon, label }) => (
            <li key={label} className={styles.pillar}>
              <span className={styles.pillarIcon}>{icon}</span>
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Countdown */}
        <p className={styles.countdownLabel}>Launching in</p>
        <div className={styles.countdown}>
          {units.map(({ value, label }) => (
            <div key={label} className={styles.unit}>
              <div className={styles.unitValue}>{value}</div>
              <div className={styles.unitLabel}>{label}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className={styles.footer}>
          © 2026 Aneira &nbsp;·&nbsp; Ethnic Wear
        </footer>

      </div>
    </div>
  )
}
