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
    </div>
    </Container>
  )
}

export default AboutMe