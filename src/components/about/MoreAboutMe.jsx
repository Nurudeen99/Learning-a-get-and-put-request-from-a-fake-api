import { useState } from "react"
import Container from "../container/Container"
import Button from "../../shared/Button"
import MyProfile from "./MyProfile"
import Avatar from "./Avatar"
import SkillList from "./SkillList"

const MoreAboutMe = () => {
const [step,setStep] = useState(1)
// const [nextAgain,setNextAgain] = useState(false)
// const [previousAgain,setPreviousAgain] = useState(false)



function handleNextAgain(){
    if(step >= 3){
        setStep(step)
    }else{
       setStep(step + 1) 
    }
}
function handlePreviousAgain(){
    if(step == 1){
        setStep(step)
    }else if(step >= 3 || step >= 2 || step>=1){
       setStep(step - 1) 
    }
}


  return (
    <Container>
    <div className="flex flex-col justify-center items-center">
       <div>
                 {/* <p id="select"> My name is Nurudeen</p> */}
                 {/* {next?"I WANT TO BE A DEVELOPER":"I WILL BECOME A DEVELOPER"}
                <div onClick={handleNext}>
                  <Button text="next"/>
                </div> */}
       </div>
       <div className="flex  gap-[3rem] items-center p-[3rem]">
           <div className={` flex justify-center items-center w-[2rem] h-[2rem] rounded-[2rem] ${step == 1 ?"bg-red-500":""}`}>1</div>
           <div className={` flex justify-center items-center w-[2rem] h-[2rem] rounded-[2rem] ${step == 2 ?"bg-red-500":""}`}>2</div>
           <div className={` flex justify-center items-center w-[2rem] h-[2rem] rounded-[2rem] ${step == 3 ?"bg-red-500":""}`}>3</div> 
       </div>
       <p>This is step {step}</p>
       {step == 1 && <MyProfile/> || step == 2 && <Avatar/> || step == 3 && <SkillList/>}
       <div className="flex gap-[2rem]">
       <div onClick={handlePreviousAgain}>
              <Button text="PREVIOUS"/>
          </div>
          <div  onClick={handleNextAgain}>
               <Button text="NEXT"/>
          </div>
       </div>
            
       
    </div>
    </Container>
    
  )
}

export default MoreAboutMe