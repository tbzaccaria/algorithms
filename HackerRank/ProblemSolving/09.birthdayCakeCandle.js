function birthdayCakeCandles(candles) {
    // Write your code here
    

    const max = Math.max(...candles);

    
    let iteration = 0;
   
    candles.forEach((e) => {
        e === max ? iteration += 1 : iteration = iteration
    })
    return(iteration);

}