$(document).ready(function() {

var monthNames = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

var newDate = new Date();
newDate.setDate(newDate.getDate() + 1);    
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

var reply_click = function()
{ 
    alert("Button clicked! It's " + jQuery.now() + " milliseconds past Jan 1 1970.");
}
document.getElementById('Start').onclick = reply_click;
document.getElementById('Stop').onclick = reply_click;


});

