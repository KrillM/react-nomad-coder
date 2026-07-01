import { useState } from "react";

const C_state = () => {

    // 화폐
    const krw = "KRW";
    const usd = "USD";
    const [currentCurrency, setCurrentCurrency] = useState(usd);

    // 단위 변경
    const changeCurrency = (e) => {
        setCurrentCurrency(e.target.value);
    }

    // 값
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);

    // 계산
    const changeValue = () => {
        if(currentCurrency == krw){
            setResult(value*1557.45)
        }
        else {
            setResult(value*0.00064)
        }
    }

    return (
        <>
            <select onChange={changeCurrency}>
                <option value={usd}>{krw}</option>
                <option value={krw}>{usd}</option>
            </select>

            <form>
                <input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/>
                {/* 예약어도 camelCase라고 간주한다 */}
                <button type="button" onClick={()=>changeValue()}>계산</button> 
            </form>
            <p>{currentCurrency} {result}</p>
        </>
    )
}

export default C_state;