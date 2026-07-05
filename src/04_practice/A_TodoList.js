import { useState } from "react";

const A_TodoList = () => {
    const [word, setWord] = useState("");
    const [list, setList] = useState([]);

    console.log(list);

    const changeWord = (event) => {setWord(event.target.value)}

    const addList = () => {
        setList([...list, word])
    }

    return(
        <>
            <form>
                <input type="text" value={word} onChange={changeWord}/>
                <button type="button" onClick={()=>addList()}>입력</button>
            </form>

            <h2>To Do List</h2>
            <ul>
                {list.map(
                    item => <li>{item}</li>
                )}
            </ul>
        </>
    )
} 

export default A_TodoList;