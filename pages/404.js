import Link from "next/link"
const Error = () =>{
    return (
        <div className="container">
           <div>
            <h1>..Oopss</h1>
            <p>404 page not found</p>
            <Link href="/"><a className="button">back to home</a></Link>
           </div>
        </div>
    )
}

export default Error