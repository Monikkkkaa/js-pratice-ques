function Primefactor(n) {
    for(let i = 2 ; i<=n; i++){
        while(n %i ===0){
            console.log(i)
            n=n/i
        }
    }
    
}
let num=60
console.log(num)
Primefactor(num)