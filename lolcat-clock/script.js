var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds =
		currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) { 
        meridian = "PM"; 
    }  
    if (hours > noon) { 
        hours = hours - 12; 
    }
    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// In case the button is clicked.
var partyButtonOn = false;

var updateClock = function() 
{
	var time = new Date().getHours();
	
	if (partyButtonOn == true) {
		// If isPartyTime is true, overwrite the hour.
		time = partyTime;
	}

	var messageText;
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	
    if (time == partyTime){
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "IZ PARTEE TIME!!";
    } else if (time == wakeUpTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "IZ TIME TO GETTUP.";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "IZ NOM NOM NOM TIME!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "IZ NAP TIME...";
    } else if (time < noon) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Good morning!";
    } else if (time > evening) {
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }
	var time_phrase_id = document.getElementById("timeEvent");
	time_phrase_id.innerText = messageText;
	var image_id = document.getElementById("lolcat");
    image_id.src = image;
	showCurrentTime();
};

setInterval( updateClock, 1000);
updateClock();

// Party Time Button Event Code

var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
   if (partyButtonOn == false) {
		partyButtonOn = true;
		partyButton.innerText = "Party Over";
		partyButton.style.background = "rgb(10, 141, 171)";
   }
   else {
		partyButtonOn = false;
		partyButton.innerText = "PARTY TIME!";
		partyButton.style.background = "rgb(34,34,34)";
   }
};

partyButton.addEventListener("click", partyEvent);

// Implement drop-down menus

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

var napTimeSelector =  document.getElementById("napTimeSelector");
var napEvent = function()
{
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);