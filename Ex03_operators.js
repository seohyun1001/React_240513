// 연산자(Operator)
//대입연산자(Assignment operators)
console.log("------- 대입 연산자 -------");
let a=4;
let b=2;
console.log(a, b);

//산술 연산자(Arithmetic operators)
console.log("------- 산술 연산자 -------");
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); // a의 b승(제곱)

// 산술연산+대입연산자
console.log("------- 산술 + 대입 연산자 -------");
a+=b; // a=a+b
console.log(a);
a-=b;
console.log(a);
a*=b;
console.log(a);
a/=b;
console.log(a);

// 증감 연산자(++, --)
console.log("------- 증감 연산자 -------");
// a++ : b에 a를 대입한 후 a++
a=1;
b=a++; //postfix
console.log(a, b);
// ++c : c에 +1 한 후 d에 대입
let c=1;
let d=++c; //prefix
console.log(c, d);


// 비교연산자(Comparison operators)
console.log("------- 비교 연산자 -------");
a=1;
b=2;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b); //데이터 타입까지 비교
console.log(a!==b);

// 논리연산자
console.log("------- 논리 연산자 -------");
a=true;
b=false;
console.log(a && b);
console.log(a || b);

// 삼항연산자
console.log("------- 삼항 연산자 -------");
a=10;
b=20;
console.log(a > b? a:b);