function compareTriplets(a, b) {
    // Write your code here
    let totalA = 0;
    let totalB = 0;
    for (let i = 0; i < a.length ; i++){
        if (a[i] > b[i]){
            totalA++;
            
        } else if(a[i] < b[i]){
            totalB++;
        }
    }
    return [totalA, totalB]
   
}