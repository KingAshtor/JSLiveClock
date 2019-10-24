//V1.0.0
let reminderTime = 'No reminder'
let reminderDesc = 'No reminder'
let mode = 1

function setReminder() {
  reminderTime = document.getElementById('reminderInput').value
  console.log('reminder set');
}


//function used to change modes.
function swapMode() {
  mode = (parseInt(mode) + 1) // adds one to the mode counter
  if (mode >= 3) { //if the mode counter reaches 3 or more it wil reset to 1
    mode = 1
  }
  console.log('mode is ' + mode); //outputs mode to console
  hrDisplay = 0 //sets hour display value to zero
  secDisplay = 0 //sets seconds display value to zero
  minDisplay = 0 //sets minutes display value to zero
  document.getElementById('output3').innerHTML = '' //sets AM/PM to blank

}


//core funtion
function clock() {
  //Next 4 commands are used to get the current time
  let currentTime = new Date();
  let hr = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  //Runs when in mode one. It displays regular clock
  if (mode == 1) {

    //if seconds are less than 10 add an aditional zero for good looks baby!
    if (sec < 10) {
      secDisplay = ('0' + sec)
    } else {
      secDisplay = sec
    }

    //if minutes are less than 10 add an aditional zero for good looks baby!
    if (min < 10) {
      minDisplay = ('0' + min)
    } else {
      minDisplay = min
    }

    //If hour is greater than 13 than subtract 12. This makes it not millitary time. It also displays AM and PM based on hr>13
    if (hr < 13) {
      hrDisplay = hr
      document.getElementById('output3').innerHTML = 'AM'
    } else {
      hrDisplay = (hr - 12)
      document.getElementById('output3').innerHTML = 'PM'
    }
  }

  //runs while in mode two. Turns the standard clock into a stopwatch
  if (mode == 2) {



    secDisplay = (parseInt(secDisplay) + 1) //adds one to the second

    if (secDisplay >= 60) { //checks to see if it is greator than or equal to 60 seconds
      secDisplay = 0 //sets seconds back to zero once its at 60
      minDisplay = (parseInt(minDisplay) + 1) //adds one to minutes after seconds reach 60
    }

    if (minDisplay >= 60) { //same as previous if statment but for minutes and hours
      minDisplay = 0
      hrDisplay = (parseInt(hrDisplay) + 1)
    }
  }

  let totalTime = hrDisplay + ':' + minDisplay + ':' + secDisplay //puts all the numbers back into a clock format
  document.getElementById('output2').innerHTML = totalTime //sets output2 in html to the total time
  console.log(totalTime); //logs total time


  //used to check if the current time is the alert time
  if (reminderTime == (hr + ':' + min)) {
    console.log('ALERT') //logs alert used for testing
    window.alert(reminderTime + " " + reminderDesc) //used to output alert window
  }
  reminderDesc = document.getElementById('desc').value
  document.getElementById('output4').innerHTML = reminderTime //makes output4 in html read the time of reminder
  document.getElementById('output5').innerHTML = reminderDesc //makes output5 in html the reminder description
}
