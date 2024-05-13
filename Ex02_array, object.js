// 배열(array) :  다양한 타입의 데이터를 하나의 배열에 저장 가능

//Number 타입으로만 이루어진 배열
let arr1=[1,2,3,4,5];
console.log(arr1[0]);

//String 타입으로만 이루어진 배열
let arr2=["h","e","l","l","o"];
console.log(arr2[1]);

//Number와 String 자료형들로 구성된 배열
let arr3=[1, "h", 2, "l"];
console.log(arr3[2]);

// 다양한 자료형들로 구성된 배열
let arr4= [true, 1, undefined, false, "h", 2, null, "i"];
console.log(arr4[3]);

console.log("----------------------------------")

// 객체(object) : 이름(key)과 값(value)으로 구성

// 값을 String 타압만을 사용한 객체
let obj1={a:"apple", b:"banana", c:"carrot"};
console.log(obj1['a'], obj1.b);

// 값을 Number 타입만을 사용한 객체
let obj2={a:1, b:2, c:3, d:4};
console.log(obj2['a'], obj2.b);

// 값을 다양한 자료형들을 함께 사용한 객체
let obj3={a:"hello", b:100, c:[1,2,3,4]};
console.log(obj3.a,obj3.b);
console.log("obj3.c = " + obj3.c, " / obj3.c[0] = " + obj3.c[0])

// 값으로 객체를 사용한 객체
let obj4={a:{a1:1, a2:2}, b:{b1:3, b2:4}, c:{c1:5, c2:6}};
console.log(obj4.a.a2);
