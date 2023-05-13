import React,{useRef,useState} from "react";
import "./style.css";

export default function App() {
  const [count,setCount] = useState(0)
  const ref = useRef(null)
  const num = useRef(0)

  function myFun(){
    // ref.current.value=1000
    ref.current.focus()
num.current +=1

  }

 
  return (
    <div>
      <h1>Hello StackBlitz!{count}</h1>
      <p>Start editing to see some magic happen :){num.current}</p>
      <button onClick={()=>{setCount(count +1)}}>increment</button>
      <button onClick={myFun}>refCount</button>
      <input type="text" ref={ref} />
    </div>
  );
}
