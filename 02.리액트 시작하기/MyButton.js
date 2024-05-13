function MyButton(props) {
    // 변수 선언 / 상태변수를 값으로 가짐
    const [isClicked, setIsClicked] = React.useState(false);
    return React.createElement(
        'button',
        // 매개변수 없는 함수
        // onClick 함수를 실행하면 setIsClicked를 true로 세팅
        {onClick: () => setIsClicked(true) },
        // isClickedr가 true면 Clicked / false 면 Click here
        isClicked ? 'Clicked!' : 'Click here!'
    )
}

// id가 root인 값들을 domContainer이라는 변수명으로 지정
const domContainer = document.querySelector("#root");
// domContainer에 새로운 루트 생성, 해당 루트에 대해 React컴포넌트를 랜더링하고 업데이트 할 수 있게 됨
const root = ReactDOM.createRoot(domContainer);
// root에 MyButton이라는 리액트를 랜더링 하겠다.
root.render(React.createElement(MyButton));