import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/navBar'
import Card from '../components/Card/Card'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.page}>
      <NavBar></NavBar>
      <div className={styles.noss}>
        rapaziada's shop
      </div>
      <div className={styles.dav}>
        <Card className="jobContainer" />
      </div>
      <Footer></Footer>
    </div>
  )
}
