import { Link } from "react-router-dom"

const Container = ({children}) => {
  return (
    <>
<div>
    <nav className="flex justify-evenly text-white bg-indigo-500 h-[3rem] items-center font-bold rounded-xl drop-shadow-xl ">
        <Link to="/">HOME</Link>
            <div className="flex gap-[2rem]">
            <Link to="/login">LOG IN</Link>
            <h1>SIGN UP</h1>
            <Link to="/aboutus">ABOUT US</Link>
        </div>  
    </nav>
{
    children
}
</div>
    </>
  )
}

export default Container