function todayCost() {	
    let st=parseFloat(document.getElementById("subtotal").value);
        let dayOfWeek = new Date().getDay();
        
    //PROCESS Checks if the subtotal is greater than 50 and the day is Tuesday or Wednesday. If both are correct then give a 10 percent discount and add sales tax. If it is not Tuesday or Wednesday, add the sales tax to the subtotal. 
        
    if ((st > 50) && (dayOfWeek == 2 || dayOfWeek == 3)){
        
        subtotal = st*.90;
    }
    else {
        subtotal = st;
    }
    //OUTPUT  This gives the customer the total amount that is due.
        let total = subtotal*1.06;
        
    document.getElementById("total").innerHTML = total.toFixed(2);
    }