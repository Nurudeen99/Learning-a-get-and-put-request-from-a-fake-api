import { Link } from "react-router-dom"

const UserDetailsCard = ({image,age,birthDate,bloodGroup,email,eyeColor,firstName,lastName,gender,height,university,phone}) => {
  return (
    <div className="flex justify-center items-center w-full bg-black bg-opacity-50 min-h-screen top-0 fixed">
        <div className="font-bold bg-white flex flex-col item-center rounded-[0.5rem] h-[25rem]  gap-y-[0.5rem] items-center drop-shadow-xl rounded-[1.5rem] text-center w-[20rem] p-[1rem]">
            <div className="w-[6rem]"><img src={image} alt="image" /></div>
                       <p>{firstName} {lastName}</p>
                       <p>{birthDate}</p>
                       <p>{gender}</p>
                       <p>{height}</p>
                       <p>{university}</p>
                       <p>{phone}</p>
       
                <Link to="/profile" className=" font-bold">
                    <button   className="text-white bg-green-500 h-[2.5rem]  rounded-[1rem]">GO TO PROFILE</button>  
                </Link>
               <h1>Made With  <span className=" text-red-500 font-bold">&hearts;</span>  </h1>   
             </div>
    </div>
  )
}

export default UserDetailsCard