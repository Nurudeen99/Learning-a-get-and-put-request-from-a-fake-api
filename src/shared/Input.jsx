
const Input = ({label,...props}) => {
  return (
    <>
    <div className="font-bold text-center ">
    <label htmlFor="">{label}</label>
    <input {...props} className='gap-[1rem] text-center block w-[20rem] px-[1rem] py-[0.5rem] border rounded-[0.5rem] outline-none ' />    
    </div>
        
    </>

  )
}

export default Input