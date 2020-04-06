var data = [ 
    { principal: 2500, time: 1.8},
    { principal: 1000, time: 5},
    { principal: 3000, time: 1},
    { principal: 2000, time: 3}
     ];
   
function interestCalculator(data) {
   var rate = 1;
    
    var interestData = [];
    
    for (let i=0; i<data.length; i++) {
       if ( data[i].principal >= 2500 && data[i].time >1 && data[i].time <3){
           
        rate = 3; 
        let interest = data[i].principal * rate * data[i].time/ 100;

           let obj = {
               principal: data[i].principal,
               time: data[i].time,
               rate: rate,
               interest: interest,
           }
           
           interestData.push(obj)
          
          
       }
        else if ( data[i].principal >= 2500 && data[i].time >= 3){
            rate = 4; 
            let interest = data[i].principal * rate * data[i].time/ 100;

           let obj = {
               principal: data[i].principal,
               time: data[i].time,
               rate: rate,
               interest: interest,
           }
           
           interestData.push(obj)
           console.log(interestData)
          
        }
    
    else if( data[i].principal < 2500 || data[i].time <= 1){
        rate = 2; 
        let interest = data[i].principal * rate * data[i].time/ 100;

           let obj = {
               principal: data[i].principal,
               time: data[i].time,
               rate: rate,
               interest: interest,
           }
           
           interestData.push(obj)
          
    }
    else {
        rate = 1; 
        let interest = data[i].principal * rate * data[i].time/ 100;

           let obj = {
               principal: data[i].principal,
               time: data[i].time,
               rate: rate,
               interest: interest,
           }
           
           interestData.push(obj)
           console.log(interestData)
          
    };
        
    };
    
    return interestData
};
interestCalculator(data);