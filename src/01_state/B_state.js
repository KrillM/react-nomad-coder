import { useState } from "react";

const B_state = () => {

    // 입력한 값 변경
    const [word, setWord] = useState("")
    const [result, setResult] = useState("")

    const changeValue = () => {
        setResult(word);
    }

    // 입력한 값 변경
    const [usd, setUsd] = useState(0);

    const changeCurrency = (e) => {
        const value = e.target.value;
        setUsd(value);
    }

    return (
        <>
            <form>
                <input type="text" value={word} onChange={(e) => setWord(e.target.value)}/>
                <button type="button" onClick={()=>changeValue()}>입력</button>
            </form>
            <p>{result}</p>

            <form>
                <input type="number" value={usd} onChange={changeCurrency}/>달러
            </form>
            <p>{usd*1535.13}원</p>
        </>
    )
}

export default B_state;