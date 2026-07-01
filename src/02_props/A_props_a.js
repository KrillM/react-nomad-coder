import { useState } from "react";
import A_props_b from "./A_props_b";
import A_props_c from "./A_props_c";
import A_props_d from "./A_props_d";

export default function A_props_a (){
    const [num, setNum] = useState(0);
    const add = "add"
    const min = "min"

    // 부모에서 상태를 관리하므로 원래 사용하는 함수는 그대로 둠
    function addNum () {
        setNum(num+1)
    }

    function removeNum () {
        setNum(num-1)
    }

    // 여러 타입 보내기
    const asahi = {name: "Asahi", home: "Tokyo", age: 28};
    const yena = {name: "Yena", home: "Seoul", age: 26};

    return(
        <>  
            <span>Total Count : {num}</span>
            <br/>
            <A_props_c numberValue={addNum} value={add}/>
            <A_props_c numberValue={removeNum} value={min}/>         
            <br/>
            <A_props_d profile={yena}/>
            <A_props_d profile={asahi}/>
        </>
    )
} 