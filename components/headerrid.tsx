import styles from './modules/header.module.css'
import Link from 'next/link'


export default function Headerrid() {
  return (
    <div className={styles.ridheader}>
      <div className={styles.rander}>
        <div className={styles.ridball}>
        <Link href="/rtaindesign">
        <svg width="45.5" height="46.1" viewBox="0 0 45.5 46.1" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="22.67675" cy="23.07385" rx="22.67675" ry="23.07385" fill="url(#paint0_linear_2053_240)"/>
            <defs>
              <linearGradient id="paint0_linear_2053_240" x1="16.5271" y1="10.5592" x2="84.3238" y2="47.1105" gradientUnits="userSpaceOnUse">
              <stop offset="0.0950356" stop-color="#11FC8B"/>
              <stop offset="1" stop-color="#006132"/>
              </linearGradient>
            </defs>
          </svg>
        </Link>
        </div>
        <div className={styles.ridinf}>
          <svg width="182" height="92" viewBox="0 0 182 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M136.562 91.6065C116.692 91.6065 102.906 78.0708 91.2536 63.1329C79.6011 78.0708 65.8148 91.6065 45.9449 91.6065C22.6563 91.6065 0.63623 69.3619 0.63623 45.8358C0.63623 22.3096 22.6563 0.0650635 45.9449 0.0650635C65.8148 0.0650635 79.6011 13.6007 91.2536 28.5386C102.906 13.6007 116.692 0.0650635 136.562 0.0650635C159.851 0.0650635 181.871 22.3096 181.871 45.8358C181.871 69.3619 159.851 91.6065 136.562 91.6065ZM104.064 45.8358C114.114 59.3548 124.069 70.8016 136.562 70.8016C149.64 70.8016 161.276 56.8415 161.276 45.8358C161.276 34.83 149.64 20.8699 136.562 20.8699C124.074 20.8699 114.118 32.3168 104.064 45.8358ZM45.9449 20.8699C32.8672 20.8699 21.2311 34.83 21.2311 45.8358C21.2311 56.8415 32.8672 70.8016 45.9449 70.8016C58.4337 70.8016 68.3892 59.3548 78.4436 45.8358C68.3892 32.3168 58.4337 20.8699 45.9449 20.8699Z" fill="url(#paint0_linear_2057_227)"/>
            <path d="M136.562 70.8016C106.329 70.8016 91.2536 0.0650635 45.9449 0.0650635C45.9449 6.84745 45.9449 13.8462 45.9449 20.8699C76.7507 20.8699 91.2536 91.6065 136.562 91.6065C136.863 91.6065 137.164 91.5605 137.464 91.5522C136.974 84.6325 136.744 77.7128 136.645 70.7931C136.62 70.7972 136.591 70.8016 136.562 70.8016Z" fill="url(#paint1_linear_2057_227)"/>
            <defs>
              <linearGradient id="paint0_linear_2057_227" x1="0.670965" y1="45.8359" x2="182.015" y2="45.5519" gradientUnits="userSpaceOnUse">
                <stop stop-color="#060606"/>
                <stop offset="0.0951117" stop-color="#0A894C"/>
                <stop offset="0.241228" stop-color="#0DE87F"/>
                <stop offset="1" stop-color="#0FA95F"/>
              </linearGradient>
              <linearGradient id="paint1_linear_2057_227" x1="46.1532" y1="7.34556" x2="138.081" y2="85.8481" gradientUnits="userSpaceOnUse">
                <stop offset="0.026727" stop-color="#0BE88D"/>
                <stop offset="0.543889" stop-color="#94FD0E"/>
                <stop offset="0.983907" stop-color="#0EBC69"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className={styles.rother}>
      <Link href="#">Tools</Link><span> | </span><Link href="#">Design</Link><span> | </span><Link href="#">Apply</Link>
      </div>
      <div className={styles.hol}>
        <div className={styles.gol}>
          <Link href="/">
            <svg width="91" height="93" viewBox="0 0 91 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <filter id="saturate" filterUnits="objectBoundingBox">
              <feColorMatrix type="saturate" in="SourceGraphic" values="1"/>
              </filter>
              <ellipse cx="45.3535" cy="46.1477" rx="45.3535" ry="46.1477" fill="url(#paint0_linear_2057_237)" filter="url(#saturate)"/>
              <defs>
                <linearGradient id="paint0_linear_2057_237" x1="73" y1="10" x2="5.84896" y2="67.9832" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0950356" stop-color="#DC3500"/>
                  <stop offset="0.701083" stop-color="#FD5204"/>
                  <stop offset="1" stop-color="#FF9C09"/>
                </linearGradient>
              </defs>
            </svg>
          </Link> 
        </div>
      </div>
    </div>
  )
}



