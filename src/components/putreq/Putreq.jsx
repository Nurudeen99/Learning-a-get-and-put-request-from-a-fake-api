import { useState } from "react"
import Input from "../../shared/Input"
import axios from "axios"
import { useParams } from "react-router-dom"

const Putreq = () => {

    const [isLoading,setIsLoading] = useState(false)


    const {id} = useParams()

    const [name,setName] = useState("")
    function handleName(e){
        setName(e.target.value)
    }

    const [job,setJob] = useState("")
    function handleJob(e){
        setJob(e.target.value)
    }

    const [email,setEmail] = useState("")
    function handleEmail(e){
        setEmail(e.target.value)
    }

    const [gender,setGender] = useState("")
    function handleGender(e){
        setGender(e.target.value)
    }

   async function handleSubmitUserData (e){
        e.preventDefault()
        try {
            setIsLoading(true)
            const userData = await axios({
                method: 'post',
                url: `https://reqres.in/api/users/${id}`,
                data: {
                      name: "",
                      job: "",
                      email: "",
                      gender:"",
                      }
            })
            console.log("let me see the details;",userData.data)
            setIsLoading(false)
        } catch (error) {
            console.log("error:", error)
            setIsLoading(false)
        }
    }

  return (
    <>
    <div>
        <form onSubmit={handleSubmitUserData} className="flex flex-col justify-center items-center py-[2rem] gap-[1rem] min-h-screen ">
              <Input  value={name} onChange={handleName} label="Name" placeholder="Enter Your Full Name"/>
              <Input  value={job} onChange={handleJob} label="Job" placeholder="Present Job"/> 
              <Input  value={email} onChange={handleEmail} label="E-mail" placeholder="i.e jangbalokoAlinko@gmail.com"/>
              <Input  value={gender} onChange={handleGender} label="Gender" placeholder="Male Or Female"/>
              <div>
                   <button  className={`${isLoading? "bg-red-500" : "bg-green-500"} font-bold bg-green-500 rounded-[0.5rem] h-[2rem] w-[7rem]`}>{isLoading ? "LOADING...":"SUBMIT"}</button>
              </div>
        </form>
    </div>
    
    </>

    )
}

export default Putreq