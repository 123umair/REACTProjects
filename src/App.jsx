import { useState } from 'react'
import TodoItems from './Components/TodoItems';
import Uiinputs from './Components/UITodo';
import './App.css'

function App() {
    const itemarr = [];
    
    const [item,setItem] = useState(itemarr);
    function additems(item1,item2){
      const newarr = [...item,{name:item1,date:item2}]
      setItem(newarr)
    }

  return (
    <>
    <Uiinputs inputHandler ={additems}/>
      <TodoItems mapitems={item}/>
    </>
  )
}

export default App
