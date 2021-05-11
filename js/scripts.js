// Function to display both date and time
function showDateTime() {
    // store html elements to varaibles
    var myTime = document.getElementById('time');
    var myDate = document.getElementById('date');

    // Store date to a varaible
    var dateTime = new Date();
    // console.log(dateTime.toString());

    function showTime() {
        // create variables to store hour,minutes,seconds
        let h, m, s;
        h = dateTime.getHours();
        m = dateTime.getMinutes();
        s = dateTime.getSeconds();
        
        //display time through html elements
        myTime.innerHTML = h + ':' + m + ':' + s;


    }

    function showDate() {
        // create variables to store date, day and month and year, sd = string date, bsd = before string date
        let d, m, y, sd;

        d = dateTime.getDate();
       var bsd = dateTime.getDay();
      
        // if function to display the right string for the day
        if (bsd <= 1) {
            sd = "Monday";
        } else if (bsd <= 2) {
            sd = "Tuesday";
        } else if (bsd <= 3) {
            sd = "Wednesday";
        } else if (bsd <= 4) {
            sd = "Thursday";
        } else if (bsd <= 5) {
            sd = "Friday";
        } else if (bsd <= 6) {
            sd = "Saturday";
        } else if (bsd <= 0) {
            sd = "Sunday";
        }

        // get month and store to var
        sm = dateTime.getMonth();
        // if function to display the right string for the month
        if (sm <= 0) {
            m = "January";
        } else if (sm <= 1) {
            m = "February";
        } else if (sm <= 2) {
            m = "March";
        } else if (sm <= 3) {
            m = "April";
        } else if (sm <= 4) {
            m = "May";
        } else if (sm <= 5) {
            m = "June";
        } else if (sm <= 6) {
            m = "July";
        } else if (sm <= 7) {
            m = "August";
        } else if (sm <= 8) {
            m = "September";
        } else if (sm <= 9) {
            m = "October";
        } else if (sm <= 10) {
            m = "November";
        } else if (sm <= 11) {
            m = "December";
        }
        
        y = dateTime.getFullYear();
      

        myDate.innerHTML = d + " " + m + " " + y;

        
    
    

    }



    showTime();
    showDate();
}

showDateTime();