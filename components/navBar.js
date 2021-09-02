import styles from '../styles/navBar.module.css'
import Link from 'next/link'
export default function NavBar() {
    return (
        <div className={styles.corpo}>
            <div className={styles.head}>
                <header ><Link href='/info'>INFO</Link></header>
                <header ><Link href='/'>HOME</Link></header>
                <header ><Link href='/shop'>SHOP</Link></header>
            </div>
        </div>
    )
}