let num =1234
let temp = num 
let sum =0

while (n > 0) {
    let rem = num % 10


sum = sum +rem **4
num = parseInt(num/10)
}
if(temp === sum ){
    console.log("Armstrong");
    
}
else{
    console.log("not a Armstrong");
    
}