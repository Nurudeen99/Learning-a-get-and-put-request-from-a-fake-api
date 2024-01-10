
const ProfileCard = ({image,age,birthDate,bloodGroup,email,eyeColor,firstName,lastName,gender,height,university,phone,weight,maidenName,userAgent,company,address}) => {
  return (
    <div className="flex justify-center items-center w-full bg-black bg-opacity-50  min-h-screen top-0 fixed">
        <div className=" font-bold bg-white flex flex-col item-center rounded-[0.5rem] h-screen  gap-y-[0.5rem] items-center drop-shadow-xl rounded-[1.5rem] text-center w-[40rem] p-[1rem]">
            <div className="w-[6rem]"><img src={image} alt="image" /></div>
                       <p>FULL NAME: {firstName} {lastName}</p>
                       <p>DATE OF BIRTH: {birthDate}</p>
                       <p>GENDER: {gender}</p>
                       <p>HEIGHT: {height}</p>
                       <p>UNIVERSITY: {university}</p>
                       <p>PHONE NUMBER: {phone}</p>
                       <h1>AGE: {age}</h1>
                       <h1>BLOODGROUP: {bloodGroup}</h1>
                       <h1>EMAIL: {email}</h1>
                       <h1>EYECOLOR: {eyeColor}</h1>
                       <h1>WEIGHT: {weight}</h1>
                       {/* <h1>HOUSE ADDRESS: {address.address}</h1> */}
                       {/* <h1>COMPANY NAME: {company.address.name}</h1> */}
                       <h1>MAIDEN NAME: {maidenName}</h1>
                       <h1>USERAGENT {userAgent}</h1>
               <h1>Made With  <span className=" text-red-500 font-bold">&hearts;</span>  </h1>   
             </div>
    </div>
  )
}

export default ProfileCard