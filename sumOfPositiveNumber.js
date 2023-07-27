const sumOfPositiveNumber = arr =>{
    let sum = 0;
    for(let i of arr){
        if(i>0)
        sum = sum + i;
    }
    return sum;
}
sumOfPositiveNumber([2, -5, 10, -3, 7]);