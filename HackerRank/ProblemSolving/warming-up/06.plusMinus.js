function plusMinus(arr) {
    // Write your code here
    // INIT VAR array = [+, -, 0]
    
    let allNumber = [0, 0, 0]
    
    // LOOP
    arr.forEach((e) => {
        // positive
        if (e > 0){
            
            allNumber[0]++;
            
        } else if(e < 0){
            
            allNumber[1]++;
        } else if(e === 0){
            
            allNumber[2]++;
        }
    })
    
    console.log((allNumber[0]/arr.length).toFixed(6))
    console.log((allNumber[1]/arr.length).toFixed(6))
    console.log((allNumber[2]/arr.length).toFixed(6))

}