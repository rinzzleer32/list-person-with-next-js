/* eslint-disable @next/next/no-html-link-for-pages */
import styles from '../../styles/Navbar.module.css'
import { useRouter } from 'next/router'
const Navbar = () =>{
    const router = useRouter();
    return(
        <div className={styles.topnav}>
            <a href="/" className={router.pathname=="/"?styles.active: ''}>Home</a>
            <a href="/users" className={router.pathname=="/users"?styles.active: ''}>users</a>        
            </div>
    )
}

export default Navbar