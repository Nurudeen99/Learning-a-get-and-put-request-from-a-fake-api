import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../../shared/Card"
import SingleCard from "../../shared/SingleCard"
import Container from "../container/Container"
import PageLoading from "../pageloading/PageLoading"

const Getreq = () => {
    const [userDetails,setUserDetails] = useState([])
    const [isUserDetailClicked,setIsUserDetailClicked] = useState(false)
    const [singleUserDetails,setSingleUserDetails]= useState({})
    const [loadingPage,setLoadingPage] = useState(false)

       

    const getUserDetailsFromApi =async ()=>{
      const userDetailFromApi = await axios("https://reqres.in/api/users?per_page=12")
      setUserDetails(userDetailFromApi.data.data)
    }

async function handleClickedToggle(singleUserId){

  try {
    
    const singleUserDetailsFromApi = await axios(`https://reqres.in/api/users/${singleUserId}`)
    console.log("singleUserDetailsFromApi:",singleUserDetailsFromApi.data.data)
   setSingleUserDetails(singleUserDetailsFromApi.data.data)
   setIsUserDetailClicked(!isUserDetailClicked)

  } catch (error) {
    setLoadingPage(true)
    console.log("let me see the network error:",error)
    setLoadingPage(false)

  }
    // const singleUserDetailsFromApi = await axios(`https://reqres.in/api/users/${singleUserId}`)
    //  console.log("singleUserDetailsFromApi:",singleUserDetailsFromApi.data.data)
    // setSingleUserDetails(singleUserDetailsFromApi.data.data)
    // setIsUserDetailClicked(!isUserDetailClicked)
}


useEffect(()=>{
    getUserDetailsFromApi()
},[])
// localStorage.setItem("name","Nurudeen")
// const myName = localStorage.getItem("name")
// const hisHobby = JSON.parse(localStorage.getItem("hobby"))
// const food = localStorage.getItem("myFood")

  return (
    <Container>
       {/* <div>My name is {myName} a Senior Dev.I love {hisHobby.like} and  my best food is {food}</div> */}
       {/* <div> {hisHobby}</div> */}
    <div className="flex justify-center w-full min-h-screen  ">
       <div className="grid grid-cols-3 gap-6 px-[5rem]">
        
          {
           userDetails.map((userDetail)=>(
            <Card key={userDetail.id} {...userDetail} onClick={()=>handleClickedToggle(userDetail.id)} toEachUserId={`/putreq/${userDetail.id}`}/>
           ))
         }

                  {isUserDetailClicked &&   <SingleCard {...singleUserDetails} setIsUserDetailClicked={setIsUserDetailClicked}/>}

        
         
         
         {/* {`${isUserDetailClicked && `${loadingPage ?`${<SingleCard {...singleUserDetails} setIsUserDetailClicked={setIsUserDetailClicked}/>}`:`${<PageLoading/>}`}`  }`} */}

      </div>
    </div>
    </Container>
    
  )
}

export default Getreq