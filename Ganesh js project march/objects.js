let a ={name:"Hari",
    age:22,
    height:167,
    weight:65,
    education:{tenth:455,twelth:850,mbbs:9}
}
console.log(a)
console.log(a.education.tenth)
console.log(a['education'].twelth)

let cap= function(name,height){
    this.name=name,
    this.height=height
}

const ted = new cap("hari",22);
console.log(ted.name);
console.log(ted.height)