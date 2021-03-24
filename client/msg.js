// CONFIGURATION
var MSG_SERVER = "localhost:9898";
var APP_PATH = "inspection"

// GLOBAL VARIABLES
var source = new WebSocket("ws://" + MSG_SERVER + "/" + APP_PATH);

// SEND INFO TO MESSAGE SERVER
function SendMsg() {
  var data = {
      title: document.getElementById("title").value,
      message: document.getElementById("message").value
  };
  source.send(JSON.stringify(data));
}

// LISTEN FOR NEW MESSAGES AND DISPLAY
var today, dateTime;
function UpdateDateTime() {
  today = new Date();
  dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}
source.onmessage = function(event) {
  UpdateDateTime();
  var obj = JSON.parse(event.data);
  $("#receiving").prepend("<li>" + obj.title + " - " + obj.message + " <sup style=\"background-color:grey;color:white;\"> Received:" + dateTime + " </sup></li>");
};
source.onerror = function(e) {
  alert("RECEIVING ERROR");
}