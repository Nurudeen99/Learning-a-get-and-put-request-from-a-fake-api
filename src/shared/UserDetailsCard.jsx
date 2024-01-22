import { Link } from "react-router-dom"
import Container from "../components/container/Container"
import { toast } from "react-toastify"

const UserDetailsCard = ({image,age,birthDate,bloodGroup,email,eyeColor,firstName,lastName,gender,height,university,phone}) => {
  return (
    
     <div className="flex justify-center items-center w-full  min-h-screen top-0 fixed">
        <div className="font-bold bg-white flex flex-col item-center rounded-[0.5rem] h-[28rem]  gap-y-[0.5rem] items-center drop-shadow-xl rounded-[1.5rem] text-center w-[20rem] p-[1rem]">
            <div className="w-[6rem]"><img src={image} alt="image" /></div>
                       <p>{firstName} {lastName}</p>
                       <p>{birthDate}</p>
                       <p>{gender}</p>
                       <p>{height}</p>
                       <p>{university}</p>
                       <p>{phone}</p>
                        <h1 className="text-green-500 font-bold">Want To See The Full Profile?</h1>
                <Link to="/profile" className=" font-bold">
                    <button   className="text-white bg-green-500 h-[2.5rem]  rounded-[1rem]">CLICK HERE</button>  
               
                </Link>
               <h1><span className="text-red-500">Made</span> <span className="text-blue-500">With</span>  <span className=" text-red-500 font-bold">&hearts;</span>  </h1>   
             </div>
    </div>
    
   
  )
}

export default UserDetailsCard