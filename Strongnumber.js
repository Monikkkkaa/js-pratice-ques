function Factorail(n) {
    let fact = 1;
    for(let i=1;i<n;i++){
      fact *= i
    }
    return fact
    
}
function isStong (num) {
    let orignialnum=num;
    let sum= 0;

    while (num > 0 ) {
        let digit = num % 10
        sum += Factorail(digit)
        num = Math.floor(num /100)
        
    }
    return sum === orignialnum
    
}

let num = 134
if (isStong(num)){
    console.log(num)
}else{
    console.log(num +"Not a number ")
}