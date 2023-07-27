const mostFrequentElement = arr => {
    let mostFrequent = 0;
    let mostFrequentElement;
    let arr2 = [];
    for(let i of arr)
    {
        if(arr2[i]){
            arr2[i]++;
        }
        else
            arr2[i]=1;
        
        if(arr2[i]>mostFrequent){
            mostFrequent= arr2[i];
            mostFrequentElement = i;
        }
    }
    console.log(mostFrequentElement);
}
mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5] );