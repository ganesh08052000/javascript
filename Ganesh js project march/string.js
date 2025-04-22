//charat
let str = "Hello, World!";
console.log(str.charAt(1)); 
console.log(str.charAt(5));
//concat
let str1 = "Hello";
let str2 = "World";
let result = str1.concat(" ", str2);
console.log(result);
//includes
let str = "JavaScript is awesome";
console.log(str.includes("Java")); 
console.log(str.includes("Python"));
//indexof
let str = "Hello, World!";
console.log(str.indexOf("World")); 
console.log(str.indexOf("world"));
//lastindexof
let str = "JavaScript, Java, JavaScript";
console.log(str.lastIndexOf("Java"));
//replace
let str = "Hello, World!";
let newStr = str.replace("World", "JavaScript");
console.log(newStr);
//replaceall
let str = "JavaScript is fun, JavaScript is powerful";
let newStr = str.replaceAll("JavaScript", "Python");
console.log(newStr);
//slice
let str = "Hello, World!";
let Str8 = str.slice(7, 12);
console.log(Str8);
//split
let str = "apple,banana,cherry";
let arr = str.split("apple");
console.log(arr);
//tolowercase
let str = "JavaScript";
console.log(str.toLowerCase());
//touppercase
let str = "JavaScript";
console.log(str.toUpperCase());
//trim
let str = "   Hello, World!   ";
console.log(str.trim());
//substring
let str = "JavaScript";
let subStr = str.substring(0, 4);
console.log(subStr);
//startswith
let str = "Hello, World!";
console.log(str.startsWith("Hello"));
console.log(str.startsWith("World"));
//endswith
let str = "Hello, World!";
console.log(str.endsWith("World!"));
console.log(str.endsWith("Hello")); 
//repeat
let str = "Hello! ";
console.log(str.repeat(3));