import axios from "axios"
import { useEffect, useState } from "react"
import ProfileCard from "../../shared/ProfileCard"
import Container from "../container/Container"

const Profile = () => {

    const [userProfile,setUserProfile] = useState({})

    const getTokenForProfile = localStorage.getItem("theTokenIsHere")

    async function userProfileInFull (){
       
        try {
            const userProfileInFull = await axios({
                method: 'GET',
                url: 'https://dummyjson.com/auth/me',
                headers: {
                        'Authorization': `Bearer ${getTokenForProfile}`, 
                         },
            })
            setUserProfile(userProfileInFull.data)
            console.log("userProfileInFull:",userProfileInFull.data)
        } catch (error) {
            console.log("error:",error)
        }
    }
    useEffect(()=>{
        userProfileInFull()
    },[])

  return (
    <Container>
     
      {
        <ProfileCard  {...userProfile}/>
      }
    </Container>
  
    
  )
}

export default Profile