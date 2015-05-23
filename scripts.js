$(document).ready(function() {

// Display date at top of page
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate());
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

//Populate date fields with today's date by default (not working)
// var monthNum = newDate.getMonth();
// if (monthNum < 10){
//   monthNum = "0" + String(monthNum);
// }
//
// $('input#startDate').val(String(newDate.getFullYear()) + '-' + String(monthNum) +
// '-' + String(newDate.getDate()));
// $('input#endDate').val(String(newDate.getFullYear()) + '-' + String(monthNum) +
// '-' + String(newDate.getDate()));


// Start button inilializes task object w/ start time and name
var startClick = function(){
  dateTime = new Date();
  timestamp = dateTime.getTime();
  readableStart = readableTime(timestamp);

  localStorage.setItem(timestamp, JSON.stringify({
    taskName: $('#task').val(),
    endTime: null
  }));
}

document.getElementById('Start').onclick = startClick;

// Stop button modifies task object w/end time and prepends to taskList
var stopClick = function(){
  if ($('#task').val() == ""){
    alert('Task name cannot be null.')
    return false
    }
  else
    var endDateTime = new Date();
    var endTime = endDateTime.getTime();
    readableEnd = readableTime(endTime);

    localStorage.setItem(timestamp, JSON.stringify({
      taskName: $('#task').val(),
      endTime: endTime
    }));

    $('#taskList').prepend("<p>"+ JSON.parse(localStorage.getItem(timestamp)).taskName + " began at " +
      readableStart + " and ended at " + readableEnd) ;

    $('#task').val(""); // Clears text from input box
    };

document.getElementById('Stop').onclick = stopClick;

//readableTime converts timestamps to HH:MM for display on page
readableTime = function(timestamp){
  var hours = new Date(timestamp).getHours();
  var minutes = new Date(timestamp).getMinutes()

  if (minutes < 10){
    minutes = "0" + minutes
  }
  return hours + ":" + minutes

}

//List all completed tasks on page load
for (var i = 0; i < localStorage.length; i++){

  var readableStart = readableTime(JSON.parse(localStorage.key(i)));;
  var readableEnd   = readableTime(JSON.parse(localStorage.getItem(localStorage.key(i))).endTime);

  $('#taskList').prepend("<p>"+ JSON.parse(localStorage.getItem(localStorage.key(i))).taskName + " began at " +
  readableStart + " and ended at " + readableEnd) ;
}

//Filter tasks by date
function filterList(){
  $("p").remove();
  for (var i = 0; i < localStorage.length; i++){
    var datePickerStart = (new Date($('#startDate').val())).getTime();
    //adds 11:59 to date time to register as end of day
    var datePickerEnd =  (new Date($('#endDate').val())).getTime() + 89940000;
    var readableStart = readableTime(JSON.parse(localStorage.key(i)));;
    var readableEnd   = readableTime(JSON.parse(localStorage.getItem(localStorage.key(i))).endTime);

    if (localStorage.key(i) > datePickerStart && localStorage.key(i) < datePickerEnd){
      $('#taskList').prepend("<p>"+ JSON.parse(localStorage.getItem(localStorage.key(i))).taskName + " began at " +
      readableStart + " and ended at " + readableEnd + "</p>") ;
    }
  }
}

document.getElementById('Search').onclick = filterList;

});