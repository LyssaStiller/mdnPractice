//constructor function

function StopWatch(elem) {

  var time = 0;
  var interval;
  var offset;


  function update(){
    time+= delta();
    var formattedTime = timeFormatter(time)
    console.log(formattedTime)
  }

  function delta(){
    var now = Date.now()
    var timePassed = now - offset;
    offset = now;
    return timePassed;
  }

  function timeFormatter(unformattedTime) {
    var time = new Date(unformattedTime)
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();
    if(minutes.length < 2){
      minutes = "0" + minutes;
    }
    if(seconds.length < 2){
      seconds = "0" + seconds;
    }
    while(milliseconds.length < 3){
      seconds = "0" + milliseconds;
    }

    return `${minutes} : ${seconds} . ${milliseconds}`

  }

  this.isOn = false;

  this.start =function(){
    if(!this.isOn){
      var interval = setInterval(update, 10);
      offset = Date.now();
      this.isOn = true;
    }
  }
  this.stop = function(){
    if(this.isOn){
      clearInterval(interval)
      interval = null;
      this.isOn = false;
    }
  }
  this.reset = function(){
    time = 0;
  }
}

var timer = document.getElementById('timer');

var toggleBtn = document.getElementById('toggle');

var resetBtn = document.getElementById('reset');

var watch = new StopWatch();

toggleBtn.addEventListener('click', function(){
  if(watch.isOn) {
    watch.stop()
  }
  else {
    watch.start()
  }
})

resetBtn.addEventListener('click', function(){
  watch.reset()
})




//first attempt, doesn't work
// var time = 0;

// var running = 0;

// function startPause() {
//   if(running === 0){
//     increment();
//     document.getElementById('start').innerHTML ="Pause"
//     document.getElementById('startPause').style.backgroundColor = "red";
//     document.getElementById('startPause').style.borderColor = "red";
//   }
//   else {
//     running = 0;
//     document.getElementById('start'.innerHTML="Resume");
//     document.getElementById('startPause').style.backgroundColor="green";
//     document.getElementById('startPause').style.borderColor="green";
//   }
// }

// function reset() {
//   running = 0;
//   document.getElementById('start'.innerHTML="Start");
//   document.getElementById('output'.innerHTML="00: 00:00:00");
//   document.getElementById('startPause').style.borderColor="green";
//   document.getElementById('startPause').style.backgroundColor="green";

// }

// function increment(){
//   if(running === 1){
//     setTimeout(function(){
//       time++
//       var mins = Math.floor(time/10/60);
//       var secs = Math.floor(time/10%60)
//       var hours = Math.floor(time/10/60/60);
//       var tenth = time%10

//       if(mins < 10){
//         mins = "0" + mins;
//       }
//       if(secs < 10){
//         secs = "0" + secs;
//       }
//       document.getElementById("output").innerHTML = hours + ":" + "mins" + ":" + secs + ":" + tenth;

//       increment()
//     }, 100)
//   }
// }
