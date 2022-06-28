import styles from '../../styles/Card.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UserCard = ({ user }) => {
    return (
        <div className={styles.card}>
            <Image src={user.avatar} alt="Avatar" width={200} height={200} />
            <div className={styles.container}>
                <h4><b>{user.first_name} {user.last_name}</b></h4>
                <p>{user.email}</p>
                <Link href={`/users/${user.id}`}>
                    <a className="button">Details</a>
                </Link>
            </div>
        </div>

    )
}

export default UserCard
