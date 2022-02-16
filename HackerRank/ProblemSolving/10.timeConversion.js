function timeConversion(s) {
    // Write your code here

    let moment = s.slice(-2);
    let time = s.slice(0, -2).split(':');
    let hh = time[0];
    let mm = time[1];
    let ss = time[2];
    
    if ((Number(hh) < 10) && (moment === 'AM')){
        hh = "0" + Number(hh[1]);
    }
    
    else if((Number(hh) < 12 && (moment === 'PM'))){
        hh = Number(hh) + 12;
    }
    if ((Number(hh) === 12) && (moment === 'AM')){
        hh = '00';
    }
    
    let format = `${hh}:${mm}:${ss}`;
    
    return format;
      
}