$(document).ready(function() {

// Display date at top of page
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate());    
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());


// Start and Stop buttons
var startClick = function(){  
	dateTime = new Date();
	timestamp = dateTime.getTime();
	readableStart = readableTime(dateTime);

  localStorage.setItem(timestamp, JSON.stringify({
  	taskName: $('#task').val(),
  	endTime: null
  }));
}

document.getElementById('Start').onclick = startClick;

var stopClick = function(){
	var endDateTime = new Date();
	var endTime = endDateTime.getTime();
	readableEnd = readableTime(dateTime);

	localStorage.setItem(timestamp, JSON.stringify({
  	taskName: $('#task').val(),
  	endTime: endTime
  }));
	$('#completed').prepend("<p>"+$('#task').val() + " began at " + readableStart + " and ended at " + readableEnd);
	$('#task').val("");
	};

document.getElementById('Stop').onclick = stopClick;

readableTime = function(dateTime){
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes()

  if (minutes < 10){
  	minutes = "0" + minutes
  }
  return hours + ":" + minutes

}


});

