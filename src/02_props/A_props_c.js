export default function A_props_c ({numberValue, value}){
    return(
        <>
            { value==="add" ? <button onClick={numberValue}>+</button> : <button onClick={numberValue}>-</button>}
        </>
    )
} 