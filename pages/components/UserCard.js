/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Card.module.css';

const UserCard = ({user}) => {
    return(
        <div class={styles.card}>
        <img src={user.avatar} alt="Avatar" style={{width :'100%'}}/>
        <div class={styles.container}>
    <h4><b>{user.first_name} {user.last_name}</b></h4> 
    <p>{user.email}</p> 
  </div>
</div>
    )
}
export default UserCard