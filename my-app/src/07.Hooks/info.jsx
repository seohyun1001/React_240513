import React, {useEffect, useState} from "react";

function Info(props) {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect( () => {
        console.log("랜더링 완료");
        console.log({name, nickname});
    }, [])
    // 빈 배열을 넣으면 mount, unmount 시에 단 한 번씩만 실행됨
    // 배열을 생략하면 랜더링이 바뀔 때마다 실행됨

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div><b>이름 : </b>{name}</div>
            <div><b>닉네임 : </b>{nickname}</div>
        </div>
    )
}

export default Info;