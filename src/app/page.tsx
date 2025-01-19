import Link from "next/link";


const Home = () => {
    return ( <div className=" flex min-h-screen justify-center items-center">
        Clik <Link href='/documents/123'><span className=" text-blue-500 underline">&nbsp;Here&nbsp;</span>
        </Link> Go tcv o document id
    </div> );
}
 
export default Home;