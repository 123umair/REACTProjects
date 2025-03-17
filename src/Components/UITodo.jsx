import { useState } from "react";


function Uiinputs({inputHandler}) {

   const [itemDate,setItemDate] = useState("")
   const [itemName,setItemName] = useState("")
function dateHandler(event){
    setItemDate(event.target.value)
}
function nameHandler(event){
    setItemName(event.target.value)

}
function onclickHandler(){
    inputHandler(itemDate,itemName);
    setItemDate("");
    setItemName("");
   
    
}


  return (
    <div className="text-2xl"> 
      <h1 className="text-center mt-10 text-4xl font-black bg-amber-100 py-2">
        Todo App
      </h1>
      <div className="flex justify-around w-full mt-20 ">
        <input type="text" placeholder="Enter the Item here"
        onChange={nameHandler}
        className="px-2 outline-2 rounded-sm" value={itemName}/>

        <input type="Date" 
        onChange={dateHandler}
        value={itemDate}
         className="px-2 outline-2 rounded-sm"/>    
        
        <button className="bg-green-400 py-2 px-4 rounded-sm font-black w-20  text-2xl active:outline-1 active:bg-green-500"
        onClick={onclickHandler}>
          Add
        </button>
      </div>
    </div>
  );
}
export default Uiinputs;
