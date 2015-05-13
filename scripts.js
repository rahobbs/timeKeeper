$(document).ready(function() {

// Display date at top of page
var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());


// Start and Stop buttons
var startClick = function()
{ 
  localStorage.setItem('taskName', $('#task')[0].innerHTML());
  localStorage.setItem('start', jQuery.now());
}
document.getElementById('Start').onclick = startClick;

var stopClick = function(){
    localStorage.setItem('stop', jQuery.now());
}
document.getElementById('Stop').onclick = stopClick;



});

