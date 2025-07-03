function NthFibonnaci(n) {
    if (n===1) return 0
    if (n===2) return 1;
    
    let a=0,b=1,next
    for(let i=3;i<=n;i++){
        next =a+b;
        a=b
        b=next;
    }
return b;
    
}
let n=2;
const result = NthFibonnaci(n)
console.log(result)



























