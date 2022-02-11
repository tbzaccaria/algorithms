function diagonalDifference(arr) {
    // Write your code here
    const side = arr[0].length
    
    let sumLR = 0;
    let sumRL = 0
    
    for (let i = 0; i < side; i++){
        sumLR += arr[i][i];
    }
    let reverse = 0;
    for (let i = (side - 1); i > -1; i--){
        sumRL += arr[reverse][i];
        reverse++
    }
    
    return Math.abs(sumLR - sumRL);

}