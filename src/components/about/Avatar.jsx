import myPic from "../../images/myPic.jpg"
const Avatar = () => {
  return (
<div className="flex justify-center items-center drop-shadow-xl">
        <img className=" w-[15rem] rounded-[3rem]" src={myPic} alt="picture" />
    </div>  )
}

export default Avatar