function sum(a,b){
    return(a+b)
}
console.log(sum(1,2));

const sum1=(a,b) => {
    console.log("hi");
    return a+b;
}
console.log(sum1(1,2));

const multiply=(a, b) =>a*b; //실행문 1개
console.log(multiply(10,20));

const sum2=a => a+3; // 함수인자 1개
console.log(sum2(10));

const func1=() => console.log('hi'); // 매개인자 없음
func1();