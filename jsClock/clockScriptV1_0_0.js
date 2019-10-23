let reminderTime = 'No reminders'
let reminderDesc = 'No reminders'
let mode = 1

function setReminder() {
  reminderTime = document.getElementById('reminderInput').value
  console.log('reminder set');
}

function swapMode() {
  mode = (parseInt(mode) + 1)
  if (mode >= 3) {
    mode = 1
  }
  console.log('mode is ' + mode);
  hrDisplay = 0
  secDisplay = 0
  minDisplay = 0
  document.getElementById('output3').innerHTML = ''
}

function clock() {
  let currentTime = new Date();
  let hr = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();

  if (mode == 1) {
    if (sec < 10) {
      secDisplay = ('0' + sec)
    } else {
      secDisplay = sec
    }

    if (min < 10) {
      minDisplay = ('0' + min)
    } else {
      minDisplay = min
    }

    if (hr < 13) {
      hrDisplay = hr
      document.getElementById('output3').innerHTML = 'AM'
    } else {
      hrDisplay = (hr - 12)
      document.getElementById('output3').innerHTML = 'PM'
    }
  }

  if (mode == 2) {
    secDisplay = (parseInt(secDisplay) + 1)

    if (secDisplay >= 60) {
      secDisplay = 0
      minDisplay = (parseInt(minDisplay) + 1)
    }

    if (minDisplay >= 60) {
      minDisplay = 0
      hrDisplay = (parseInt(hrDisplay) + 1)
    }
  }

  let totalTime = hrDisplay + ':' + minDisplay + ':' + secDisplay
  document.getElementById('output2').innerHTML = totalTime
  console.log(totalTime);

  if (reminderTime == (hr + ':' + min)) {
    console.log('ALERT')
    window.alert(reminderTime + " " + reminderDesc)
  }
}
