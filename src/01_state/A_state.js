import { useState } from "react";

export default function A_state() {

  const [num, setNum] = useState(0);
  const [text, setText] = useState("black");
  const [btnColor, setBtnColor] = useState("red");

  function addNum () {
    setNum(num+1)
  }

  function removeNum () {
    setNum(num-1)
  }

  function changeColor() {
    if(text == "black") {
      setText("red")
      setBtnColor("black")
    }
    else {
      setText("black")
      setBtnColor("red")
    }
  }

  return (
    <>
      <span>Total Count : {num}</span>
      <br/>
      <button onClick={()=>addNum()}>+</button>
      <button onClick={()=>removeNum()}>-</button>

      <br/>
      <span style={{color : `${text}`}}>{text}</span>
      <br/>
      <button onClick={()=>changeColor()}>{btnColor}</button>
    </>
  );
}