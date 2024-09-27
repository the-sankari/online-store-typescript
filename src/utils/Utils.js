

const convertString = (str)=>{
 return  [...str].reverse().join('').toUpperCase();
}
// let newString = convertString('Hello');

// console.log(newString);
console.log(convertString('Hello'));


const convertString2 = (str)=>{
    return str.split('').reverse().join('').toUpperCase();
}
console.log(convertString2('Hello'));
console.log(Date);
console.log(Date.now());
console.log(new Date());

