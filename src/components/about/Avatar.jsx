import myPic from "../../images/myPic.jpg"
const Avatar = () => {
  return (
<div className="pb-[2rem] flex justify-center items-center drop-shadow-xl">
        <img className="drop-shadow-xl w-[15rem] rounded-[3rem] overflow-hidden" src={myPic} alt="picture" />
    </div> 
     )
}

export default Avatar