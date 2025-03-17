 function Ui({name,date}){
    return (
   
     <div className="bg-black text-white font-bold flex justify-between w-150 mx-auto mt-10 mb-10 py-5 px-5 rounded-sm ">
        <div>{name}</div>
        <div>{date}</div>
        <button className="border-1 rounded-sm py-1 px-1 hover:bg-gray-600  active:outline-none active:bg-gray-800"
        
        >Delete</button>
    </div>
   
    )
}
export default Ui