import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function Card(props) {
  return (
    <>
      <li className={styles.list}>

        <figure className={styles.figure} data-category={props.label}>

          <Link href={props.path}>
            <img src={props.src} alt="Travel"
              className={styles.image} />
          </Link>
        </figure>
        <div className={styles.iteminfo}>
          <h5 className={styles.itemtxt} >{props.text}</h5>
        </div>
      </li>
    </>
  )
}