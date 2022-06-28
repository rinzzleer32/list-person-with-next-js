import styles from '../../styles/Navbar.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
const Navbar = () => {
    const router = useRouter();
    console.log(router);
    return (
        <div className={styles.topnav}>
            <Link href="/"><a className={router.pathname == "/" ? styles.active : ''}>Home</a></Link>
            <Link href="/users"><a className={router.pathname == "/users" ? styles.active : ''}>Users</a></Link>
        </div>
    )
}

export default Navbar
