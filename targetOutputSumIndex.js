const targetOutputSumIndex = (arr, target) => {
    for(let i in arr){
        for(let j in arr){
            if(arr[i]+arr[j]===target){
                return [i, j];
            }
        }
    }
    return 'invalid';
}
const ans = targetOutputSumIndex([1, 3, 6, 8, 11, 15], 9);
console.log(ans);