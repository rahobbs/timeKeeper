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
	 timestamp = jQuery.now();
  localStorage.setItem(timestamp, JSON.stringify({
  	taskName: $('#task').val(),
  	endTime: null
  }));
}

document.getElementById('Start').onclick = startClick;

var stopClick = function(){
	var endTime = jQuery.now();
	localStorage.setItem(timestamp, JSON.stringify({
  	taskName: $('#task').val(),
  	endTime: endTime
  }));
	$('#completed').prepend("<p>"+$('#task').val() + " began at " + timestamp + " and ended at " + endTime);
	};

document.getElementById('Stop').onclick = stopClick;



});

