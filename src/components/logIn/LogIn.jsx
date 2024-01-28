import { useState } from "react"
import Input from "../../shared/Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Container from "../container/Container"
import { ToastContainer, toast } from 'react-toastify';
import { ImSpinner3 } from "react-icons/im";

import 'react-toastify/dist/ReactToastify.css';

const LogIn = () => {
    // const ourToastMessage = 
    const [isSpinning,setIsSpining] = useState(false)
    // function handleSpinning (){
    //     setIsSpining(!isSpinning)
    // }
    const navigateTo = useNavigate()
    const [isLoading,setIsLoading] = useState(false)

    const [username,setUsername] = useState("")
    function handleUsername (e){
        setUsername(e.target.value)
    }
    const [password,setPassword] = useState("")
    function handlePassword(e){
        setPassword(e.target.value)
    }

   async function submitUserDetail(e){
        try {
            e.preventDefault()
            setIsSpining(true)
            setIsLoading(true)
            const userDetails = await axios({
                method: "POST",
                url: "https://dummyjson.com/auth/login",
                data:{
                    username : username,
                    password : password
                },
                headers: { "Content-Type": "application/json" },

            })
            console.log("show me the userDetails:",userDetails)
            localStorage.setItem("theTokenIsHere",userDetails.data.token)
        
            setIsLoading(false)

            navigateTo("/dashboard")
                toast.success(`🦄 WELCOME ${userDetails.data.firstName}`, {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                })

           
           
        } catch (error) {
            toast.error(`🦄 ${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
            console.log("Let me see the error:",error)
            setIsLoading(false)
            // if(error.response.status!=200){
            //     alert(error.response.data.message)
            // }
            // if(error.response.status != 200){
            //     alert(error.response.data.message)
            //    }
        }
    }

  return (
    <Container>
    <div className="flex justify-center items-center p-[3rem] ">
        <form onSubmit={submitUserDetail} className="flex flex-col p-[2rem] gap-[2rem] bg-blue-200 rounded-xl drop-shadow-xl">
            <Input 
            onChange={handleUsername}
            label="USERNAME" 
            placeholder="ENTER USERNAME"
            value={username}
            type="text"
            />
{/* /**--------------------------------------------------------------------------------- */ }
            <Input 
            onChange={handlePassword}
            label="PASSWORD" 
            placeholder="ENTER PASSWORD"
            value={password}
            type="password"
            />
            <div className="flex justify-center">
                   {/* <button className={`${isSpinning?  <ImSpinner3/> : "bg-green-500 "}bg-green-500 rounded-xl w-[8rem] h-[3rem]`}>{isLoading ? "LOADING..." : "SUBMIT"}</button> */}

                   <button className={`${isLoading? "bg-red-500 " : "bg-green-500 "}bg-green-500 rounded-xl w-[8rem] h-[3rem]`}>{isLoading ? "LOADING..." : "SUBMIT"}</button>
            </div>
        </form>
      
    </div>
    <div className="flex justify-center items-center  ">
        <div className="flex flex-col p-[2rem]  rounded-xl drop-shadow-xl">
              <div className="flex flex-col items-center font-bold">
                <h1>This is A Dummy Api...So Below Are list Of USERNAME and PASSWORD You Can Use</h1>
                   
                       <div className="bg-white rounded-xl ">
                            <h1>USERNAME: rshawe2</h1>
                            <h1>PASSWROD: OWsTbMUgFc</h1>
                       </div>
                       <div className="bg-white rounded-xl">
                            <h1>USERNAME: yraigatt3</h1>
                            <h1>PASSWROD: sRQxjPfdS</h1>
                       </div>
                       <div className="bg-white rounded-xl">
                            <h1>USERNAME: kmeus4</h1>
                            <h1>PASSWROD: aUTdmmmbH</h1>
                       </div>
                       <div className="bg-white rounded-xl">
                            <h1>USERNAME: jtreleven5</h1>
                            <h1>PASSWROD: zY1nE46Zm</h1>
                       </div>
                   
                   
                   
              </div>
        </div>
    </div>
    
    </Container>
  )
}

export default LogIn