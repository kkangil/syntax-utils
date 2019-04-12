/**
 * Array.of
 * 숫자를 사용해서 배열 인스턴스를 생성하기 위해 생긴 문법
 * Array(7) // [ , , , , , , ]
 * 7개의 빈요소로 배열이 생성되기 때문에 문제 발생
 * 
 * polyfill
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of#Polyfill
 */

Array.of(7) // [7]
Array(1, 2) // [1,2]
Array.of(1, 2) // [1,2]