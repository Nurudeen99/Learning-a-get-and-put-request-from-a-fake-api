import { Link } from "react-router-dom"
import Button from "../../shared/Button"
import Container from "../container/Container"
import Avatar from "./Avatar"
import MyProfile from "./MyProfile"
import SkillList from "./SkillList"

const AboutMe = () => {
  return (
    <Container>
    <div className='pt-[3rem] flex flex-col justify-center items-center  w-full min-h-screen' >
      <Avatar/>
      <MyProfile/>
      <SkillList/>
      <div className="p-[rem] font-bold flex flex-col justify-center items-center ">
        <p>Want To Know MORE ABOUT THE DEVELOPER?</p>
            <Link to="/moreaboutme">
               <Button text="Click Here!!!"/>
            </Link> 
      </div>
           {/* <Button text="Back To AboutUs"/> */}
    </div>
    </Container>
  )
}

export default AboutMe