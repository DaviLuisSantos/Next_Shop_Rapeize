import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.noss}>
        rapaziada's shop
      </div>
      <div className={styles.dav}>
      </div>

    </div>
  )
}
