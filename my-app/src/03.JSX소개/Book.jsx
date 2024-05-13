// 5. JSX 실습
import React from "react";

// jsx 사용
function Book(props) {
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
        </div>
    )
}

// jsx 미사용
function Book1(props) {
    return React.createElement(
        'div',
        null,
        [
            React.createElement(
                'h1',
                null,
                `이 책의 이름은 ${props.name}입니다.`
            ),

            React.createElement(
                'h2',
                null,
                `이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`
            )
        ]
    )
}


export default Book1;