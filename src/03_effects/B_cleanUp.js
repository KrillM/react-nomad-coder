import { useEffect, useState } from "react"

export default function B_cleanUp() {
    const [second, setSecond] = useState(0);
    
    useEffect(()=>{
        // 컴포넌트가 등장하면 1초마다 시간을 증가
        const timerId = setInterval(()=>{
            setSecond((prev) => prev + 1);
            console.log("1초가 지났습니다.");
        }, 1000);

        // 클린업 함수
        return () => {
            // 로그가 계속 쌓이면 느려짐!
            clearInterval(timerId);
            console.log("타이머가 종료되었습니다.");
        };
    }, []);

    return <div>진행시간: {second}초</div>
}