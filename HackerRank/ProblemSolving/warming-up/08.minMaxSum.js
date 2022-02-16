function miniMaxSum(arr) {
    // Write your code here
    arr.sort();
    // 4 MINIMUM NUMBER SUM LOOP
    let minSum = arr.slice(0,4).reduce((p, c) => {
        return p + c
        
    })
    // 4 MAXIMUM NUMBER SUM LOOP
    let maxSum = arr.slice(arr.length - 4, arr.length).reduce((p, c) => {
        return p + c
    })
    
    console.log(minSum, maxSum);
    

}