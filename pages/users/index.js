import UserCard from "../components/UserCard";

export const getStaticProps = async()=>{
    const res = await fetch('https://reqres.in/api/users');
    const {data} = await res.json();

    return{
        props: {users :data}
    }
}

const Users = ({users}) =>{

    return(
        <div >
           
           {users.map(user=>(
            <UserCard key={user.id} user ={user}/>
           ))}
        </div>
    )
}

export default Users
