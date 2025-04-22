const test = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success")
    }, 5000);
    setTimeout(()=>{
        reject("failure")
    }, 5000);
})
test.then((res)=>{console.log(res)}).catch((res)=>{console.log(res)})
test.then(console.log).catch(console.log)

const pro = Promise.resolve("immediate success")
const pro1 = Promise.resolve("immediatesuccess1")

Promise.all([pro,pro1]).then(console.log)
// hi.then(console.log).catch(console.log)
