function fibonnaci(n) {
let a=0;b=1
console.log("Fibonnaci series")
for(let i=0;i<n;i++){
    console.log(a)
    let next=a+b;
    a=b;
    b=next;
}
}   
let number=4;
fibonnaci(number)
