import { Link } from "react-router-dom"

const Card = ({email,first_name,last_name,avatar,onClick}) => {
  return (
    <>
    <div onClick={onClick} className="font-bold bg-white flex flex-col item-center rounded-[0.5rem] h-[20rem]  gap-y-[1rem] items-center drop-shadow-xl rounded-[1.5rem] text-center w-[20rem] p-[1rem]">
       <div className=" bg-white drop-shadow-xl"> <img src={avatar} alt="avatar" /> </div>
       <p>{first_name} {last_name}</p>
       <h6>{email}</h6>
       <div className="flex justify-center gap-[1.5rem] h-[2rem]">
        <button onClick={onClick} className="bg-green-500 rounded-[0.5rem]">Get  Profile</button>
        <Link to="/putreq">
        <button  className="bg-blue-500 rounded-[0.5rem] h-[2rem]">Update Profile</button>
        </Link>
       </div>
       
       
    </div>
    </>
  )
}

export default Card