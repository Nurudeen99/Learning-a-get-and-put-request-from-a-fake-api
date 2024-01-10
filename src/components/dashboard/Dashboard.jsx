import axios from "axios"
import { useEffect, useState } from "react"
import UserDetailsCard from "../../shared/UserDetailsCard"

const Dashboard = () => {

    const [theUserDetail,setTheUserDetail] = useState({})

    const getToken = localStorage.getItem("theTokenIsHere")

      async function getTheUserDetailAfterLogIn (){
               try {
            const theUserDetailAfterLogIn = await axios({
                method: 'GET',
                url: 'https://dummyjson.com/auth/me',
                headers: {
                        'Authorization': `Bearer ${getToken}`, 
                         }, 
            })
            setTheUserDetail(theUserDetailAfterLogIn.data)
            console.log("theUserDetailAfterLogIn:",theUserDetailAfterLogIn.data)

             } catch (error) {
              console.log("error:",error)
             }
       }
     
       
       useEffect(()=>{
        getTheUserDetailAfterLogIn()
    },[])

  return (

    <div className="flex w-full min-h-screen">
         {/* {
            theUserDetail.company?.address?.address
         } */}
         {
            <UserDetailsCard  {...theUserDetail}/>
         }
            
         
    </div>
  )
}


export default Dashboard