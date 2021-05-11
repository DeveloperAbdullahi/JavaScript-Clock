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
    

    }



    showTime();
    showDate();
}

showDateTime();