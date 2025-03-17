import Ui from "./Uimaptodo"
const  TodoItems = ({mapitems}) => {
    
    
    return (
     <div className="border-2 mt-8 rounded-sm">
          {
        mapitems.map((mapitems,index)=>{
            return (
                <Ui  name = {mapitems.name} date = {mapitems.date} key = {index}/>
            )
        })
       }
     </div>

    )
}
export default TodoItems