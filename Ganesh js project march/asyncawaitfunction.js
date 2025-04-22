// const asyncfunctionn = async()=>{
//     const promise = await Promise.resolve('async and await')
//     console.log(promise)
// }
// asyncfunctionn()


// let a=2;
// let b=3;
// try {
//     a=b+2;
//     console.log(a);
    
// } catch (error) {
//     console.log(error)
// }

// function isAnagram(a, b) {
//     const sortedA = a.toLowerCase().split('').sort().join('');
//     const sortedB = b.toLowerCase().split('').sort().join('');
  
//     return sortedA === sortedB;
//   }
  
//   const a = "listen";
//   const b = "slient"; 
  
// if (isAnagram(a, b)) {
//   console.log(`a and b are anagrams.`);
// } else {
//   console.log(`a and b are not anagrams.`);
// }
  
//   console.log(isAnagram(a, b)); 

  function isArmstrong(num) {
    let sum = 0;
    let temp = number;
    const digits = number.toString().length;
  
    while (temp > 0) {
      let digit = temp % 10;
      sum += digit ** digits;
      temp = Math.floor(temp / 10);
    }
  
    return sum === number;
  }
 
  const number = 371;
  
  if (isArmstrong(number)) {
    console.log(`${number} is an Armstrong number.`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
  }