import Image from "next/image";

export const getStaticPaths = async()=>{
    const res =  await fetch('https://reqres.in/api/users');
    const {data} = await res.json();
    const paths = data.map(user =>{
        return{
            params:{id: user.id.toString() }
        }
    })
    return{
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://reqres.in/api/users/' + id);
    const { data } = await res.json()
    return {
        props: { user: data }
    }
}

const Detail = ({ user }) => {

    return (
        <div className="container">
            <div className="detail-card">
                <h1>Details</h1>
                <Image src={user.avatar}  width={500} height={500} />
                <h3>{user.first_name} {user.last_name}</h3>
                <p>{user.email}</p>
            </div>
        </div>
    )
}

export default Detail