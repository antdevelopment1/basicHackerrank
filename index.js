function modifyArray(nums) {
    let newArr = nums.map((num) => {
        if (num % 2 === 0) {
            return num * 2;
        } else if (num % 2 !== 0) {
            return num * 3;
        }
    })
    return newArr; 
}
console.log(modifyArray([1,2,3,4]))


let obj = [
    {'x': 1, 'y':1},
    {'x': 1, 'y':2}
]
function getCount(objects) {
    let count = 0;
    for (let key of objects) {
        if (key['x'] === key['y']) {
            count += 1;
        }
    }
    return count;
    
}
console.log(getCount(obj))