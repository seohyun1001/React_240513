import React, { useMemo, useState } from "react";

const getAverage = numbers => {
    console.log("평균값 계산 중");

    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

function Average(props) {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    }

    // useMemo 적용 전 : 숫자 입력과 등록에 getAverage() 함수 적용
    // -> 입력만 해도 랜더링이 됨
    const avg = useMemo(() => getAverage(list), [list]);
    // useMemo Hook 적용 후
    // : 랜더링 하는 과정에 특정 값이 변경되었을 때만 연산을 수행, 연산 최적화가 됨

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div><b>평균값 : </b>{avg}</div>
        </div>
    )

}

export default Average;