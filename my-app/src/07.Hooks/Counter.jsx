import React, {useState} from "react";
function Counter(props){
    // var count = 0; 
    const [count, setCount] = useState(0);


    return(
        <div>
            <p>총 {count}번 클릭했습니다.</p>
            <button onClick={() => setCount(count + 1)}>클릭</button>
            {/* -> 현재는 안됨 재랜더링이 안되고 있다는 뜻 */}
        </div>
    );
}

export default Counter;