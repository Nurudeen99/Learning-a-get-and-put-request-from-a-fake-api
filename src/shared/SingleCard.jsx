
const SingleCard = ({avatar,first_name,last_name,email,setIsUserDetailClicked}) => {

   function handleSingleCardClose (e){
    e.target.id === "close" && setIsUserDetailClicked((isClicked)=>(!isClicked))
   }
  return (
   
    <div id="close" onClick={handleSingleCardClose} className="flex justify-center items-center w-full bg-black bg-opacity-50 min-h-screen top-0 fixed">
           <div className="bg-white flex flex-col item-center rounded-[0.5rem] h-[25rem]  gap-y-[1rem] items-center drop-shadow-xl rounded-[1.5rem] text-center w-[20rem] p-[1rem]">
                <div className=" bg-white drop-shadow-xl"> <img src={avatar} alt="avatar" /> </div>
                <p>{first_name} {last_name}</p>
                <h1>{email}</h1>
                <div className=" font-bold">
                    <button onClick={handleSingleCardClose}  className="text-white bg-red-500 h-[2.5rem] w-[4.5rem] rounded-[2rem]">CLOSE</button>
                    <h1>Or click Anywhere To Close</h1>
                </div>
        
                <h1>Made With   <span className="text-red-500 font-bold">&hearts;</span>  </h1>
           </div>
    </div>
    
   
  )
}

export default SingleCard