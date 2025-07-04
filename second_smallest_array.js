let arr = [2,2,10, 17,8, 8, 9, 636];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
    }
}

console.log("Smallest:", smallest);
console.log("Second Smallest:", secondSmallest);
