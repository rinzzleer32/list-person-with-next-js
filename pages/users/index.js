import UserCard from "../components/UserCard";
import styles from"../../styles/Users.module.css"
export const getStaticProps = async()=>{
    const res = await fetch('https://reqres.in/api/users');
    const {data} = await res.json();

    return{
        props: {users :data}
    }
}

const Users = ({users}) =>{

    return(
        <div className="container">
            <div className={styles.userlist} >
           
           {users.map(user=>(
            <UserCard key={user.id} user ={user}/>
           ))}
        </div>
        </div>
        
    )
}

export default Users
