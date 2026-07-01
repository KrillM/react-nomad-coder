import { memo } from "react";

const A_props_c = ({numberValue, value}) => {

    console.log("Render: ", value);

    return(
        <>
            { value==="add" ? <button onClick={numberValue}>+</button> : <button onClick={numberValue}>-</button>}
        </>
    )
} 

/*
    부모 컴포넌트가 변경될 때마다 자녀의 컴포넌트를 새로 받는다.
    자녀 컴포넌트가 많다면 이 과정이 매우 길다.
    따라서 기존의 컴포넌트를 다시 참조하지 않기 위해 memo()를 사용한다.
*/
export default memo(A_props_c);