import { useState, useEffect } from "react";

export default function A_effects_a (){
    const [counter, setValue] = useState(0);
    const addCounter = () => setValue((prev) => prev+=1);
    
    // useEffect가 없인 계속 호출된다.
    console.log("I run all the time."); 

    // useEffect는 내가 호출할 때 사용한다. 

    // 맨 처음에만 호출할 때
    useEffect(()=> {
        console.log("I run only once."); 
    },[]) 

    // 원하는 타이밍에 호출할 때
    useEffect(()=> {
        if(counter%10 == 0) console.log(`I run only ${counter}.`); 
    },[counter]) 

    // 다른 예시
    const [word, setWord] = useState("")
    const [result, setResult] = useState("");

    const changeWord = (e) => {
        setWord(e.target.value)
    }

    const changeValue = () => {
        setResult(word);
    }

    useEffect(()=>{
        if(result === '') return
        console.log(`result : ${result}`)
    }, [result])
    
    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={addCounter}>Click Here</button>
            <br/>
            <form>
                <input type="text" value={word} onChange={changeWord}/>
                <button type="button" onClick={()=>changeValue()}>입력</button>
            </form>
        </div>
    )
} 