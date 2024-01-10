import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../../shared/Card"
import SingleCard from "../../shared/SingleCard"

const Getreq = () => {
    const [userDetails,setUserDetails] = useState([])
    const [isUserDetailClicked,setIsUserDetailClicked] = useState(false)
    const [singleUserDetails,setSingleUserDetails]= useState({})

async function handleClickedToggle(singleUserId){
    const singleUserDetailsFromApi = await axios(`https://reqres.in/api/users/${singleUserId}`)
     console.log("singleUserDetailsFromApi:",singleUserDetailsFromApi.data.data)
    setSingleUserDetails(singleUserDetailsFromApi.data.data)
    setIsUserDetailClicked(!isUserDetailClicked)
}

const getUserDetailsFromApi =async ()=>{
    
    
  const userDetailFromApi = await axios("https://reqres.in/api/users?per_page=12")
//   const userDetailDataFromApi = await userDetailFromApi.data.data
//   console.log("details:",userDetailFromApi.data.data)
  setUserDetails(userDetailFromApi.data.data)
}
useEffect(()=>{
    getUserDetailsFromApi()
},[])
// localStorage.setItem("name","Nurudeen")
const myName = localStorage.getItem("name")
const hisHobby = JSON.parse(localStorage.getItem("hobby"))
const food = localStorage.getItem("myFood")

  return (
    <>
       <div>My name is {myName} a Senior Dev.I love {hisHobby.like} and  my best food is {food}</div>
       {/* <div> {hisHobby}</div> */}
    <div className="flex w-full min-h-screen gap-6 p-[5rem] ">
       <div className="grid grid-cols-3 gap-6 px-[2rem]">
         {
           userDetails.map((userDetail)=>(
            <Card key={userDetail.id} {...userDetail} onClick={()=>handleClickedToggle(userDetail.id)} toEachUserId={`/putreq/${userDetail.id}`}/>
           ))
         }
         
         {
            isUserDetailClicked && <SingleCard {...singleUserDetails} setIsUserDetailClicked={setIsUserDetailClicked}/>
         }
      </div>
    </div>
    </>
    
  )
}

export default Getreq