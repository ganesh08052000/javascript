// function fibonacci(n){
// const fibseries = [0, 1];
// for(let i=2;i<n;i++) {
//     fibseries[i]=(fibseries[i-1] + fibseries[i-2])
// }
// return fibseries  
// }
// console.log (fibonacci(10))
//------------------------------------

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));