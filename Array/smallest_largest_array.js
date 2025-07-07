let arr =[4,5,636,89]
let smallest = arr[0]
let largest= arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i] < smallest){
        smallest = arr[i]
}
    if (arr[i] > largest){
        largest=arr[i]
    }
}
console.log(smallest);
console.log(largest);

