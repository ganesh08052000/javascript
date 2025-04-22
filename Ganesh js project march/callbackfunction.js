function test(a,b,c,d){
    console.log(a+b)
    c()
    d()
}
test(2,4,test1,test2)

function test1(){
    console.log("hey")
}
function test2(){
    console.log("fun")
}