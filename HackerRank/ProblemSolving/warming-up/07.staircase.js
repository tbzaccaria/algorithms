function staircase(n) {
    // Write your code here
    let prints = [];
    
    for (let i = 0; i < n; i++){
        prints.push(' ');
    }
    for (let i = prints.length - 1; i >= 0; i--){
        prints[i] = "#";
        let result = prints.join('');
        console.log(result)
    }

}