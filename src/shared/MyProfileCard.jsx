
const MyProfileCard = ({skill,level,color}) => {
  return (
    <div style={{backgroundColor:color}} className="flex flex-col justify-center items-center rounded-[1rem]  ">
    <div className="">
        <h1>SKILL: <span className="font-bold text-xl">{skill}</span></h1>
        <h1>LEVEL: <span  className="font-bold text-xl">{level}</span><span>{level==="beginner" && " 👶" ||level==="intermediate" && "👍" || level==="advanced" && "💪" }</span></h1>
    </div>
</div>  )
}

export default MyProfileCard