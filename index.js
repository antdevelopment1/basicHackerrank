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