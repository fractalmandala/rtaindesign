import styles from './modules/header.module.css'
import Link from 'next/link'


export default function Header() {
  return (
    <div className={styles.isheader}>
      <div className={styles.brander}>
        <div className={styles.bolinf}>
          <svg width="182" height="92" viewBox="0 0 182 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.3087 0.000252063C65.1786 0.000250326 78.9648 13.5359 90.6174 28.4738C102.27 13.5359 116.056 0.000245878 135.926 0.000244141C159.215 0.000242105 181.235 22.2448 181.235 45.7709C181.235 69.2971 159.215 91.5416 135.926 91.5416C116.056 91.5416 102.27 78.006 90.6174 63.0681C78.9648 78.006 65.1786 91.5416 45.3087 91.5416C22.02 91.5416 2.05672e-06 69.2971 0 45.771C-2.05672e-06 22.2448 22.02 0.000254099 45.3087 0.000252063ZM77.8074 45.7709C67.7571 32.2519 57.8015 20.8051 45.3087 20.8051C32.231 20.8051 20.5949 34.7652 20.5949 45.7709C20.5949 56.7767 32.231 70.7368 45.3087 70.7368C57.7974 70.7368 67.753 59.2899 77.8074 45.7709ZM135.926 70.7368C149.004 70.7368 160.64 56.7767 160.64 45.7709C160.64 34.7652 149.004 20.8051 135.926 20.8051C123.437 20.8051 113.482 32.2519 103.427 45.7709C113.482 59.2899 123.437 70.7368 135.926 70.7368Z" fill="url(#paint0_linear_2058_249)"/>
            <path d="M45.3087 20.8051C75.542 20.8051 90.6174 91.5416 135.926 91.5416C135.926 84.7592 135.926 77.7605 135.926 70.7368C105.12 70.7368 90.6174 0.000248102 45.3087 0.000252063C45.008 0.000252089 44.7069 0.0459026 44.4062 0.0542246C44.8964 6.97392 45.127 13.8936 45.2259 20.8133C45.2506 20.8092 45.2799 20.8051 45.3087 20.8051Z" fill="url(#paint1_linear_2058_249)"/>
            <defs>
              <linearGradient id="paint0_linear_2058_249" x1="181.2" y1="45.7706" x2="-0.14381" y2="46.0547" gradientUnits="userSpaceOnUse">
              <stop offset="0.0468566" stop-color="#060606"/>
              <stop offset="0.151027" stop-color="#C96508"/>
              <stop offset="0.302075" stop-color="#E36509"/>
              <stop offset="1" stop-color="#FF3D00"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2058_249" x1="135.718" y1="84.2609" x2="43.7905" y2="5.75834" gradientUnits="userSpaceOnUse">
              <stop offset="0.026727" stop-color="#E4660A"/>
              <stop offset="0.543889" stop-color="#FFC700"/>
              <stop offset="0.983907" stop-color="#FF3D00"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.bolball}>
          <Link href="/">
            <svg width="93" height="92" viewBox="0 0 93 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.5669 2.20242C82.2623 8.5038 97.2615 33.2871 91.0686 57.5575C84.8757 81.8279 59.8357 96.3946 35.1403 90.0933C10.4449 83.7919 -4.55428 59.0086 1.63865 34.7382C7.83158 10.4678 32.8715 -4.09896 57.5669 2.20242Z" fill="url(#paint0_linear_2058_246)"/>
            <defs>
            <linearGradient id="paint0_linear_2058_246" x1="4.5" y1="34.0002" x2="92.4204" y2="62.713" gradientUnits="userSpaceOnUse">
            <stop offset="0.0950356" stop-color="#DC3500"/>
            <stop offset="0.633307" stop-color="#FD5204"/>
            <stop offset="1" stop-color="#FF9C09"/>
            </linearGradient>
            </defs>
            </svg>
          </Link>
        </div>
      </div>
      <div className={styles.other}>
        <Link href="/docs/documentation">Build</Link><span> | </span><Link href="#">Use</Link><span> | </span><Link href="/docs/about">About</Link>
      </div>
      <div className={styles.hol}>
        <div className={styles.gol}>
          <Link href="/rtaindesign">
          <svg width="45.5" height="46.1" viewBox="0 0 45.5 46.1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <filter id="saturate" filterUnits="objectBoundingBox">
              <feColorMatrix type="saturate" in="SourceGraphic" values="1"/>
              </filter>
            <ellipse cx="22.67675" cy="23.07385" rx="22.67675" ry="23.07385" fill="url(#paint0_linear_2053_240)" filter="url(#saturate)"/>
            <defs>
              <linearGradient id="paint0_linear_2053_240" x1="16.5271" y1="10.5592" x2="84.3238" y2="47.1105" gradientUnits="userSpaceOnUse">
              <stop offset="0.0950356" stop-color="#11FC8B"/>
              <stop offset="1" stop-color="#006132"/>
              </linearGradient>
            </defs>
          </svg>
          </Link> 
        </div>
      </div>
    </div>
  )
}



