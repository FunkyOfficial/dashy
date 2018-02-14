
devices_per_line = 10;


function resize_device_icons(){
  elements = document.getElementsByClassName("device");
  margin_offset = 8
  console.log (devices_per_line)
  console.log (margin_offset)
  for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = "calc((100% / " + devices_per_line + ") - 0.8em)";

  }
  device_name_height=document.getElementsByClassName("device-pic")[0].offsetHeight;
  elements = document.getElementsByClassName("device-name");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.height = device_name_height/3  + "px";
      elements[i].style.fontSize = device_name_height/3  + "px";
  }
  elements = document.getElementsByClassName("panel");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.fontSize = device_name_height/14  + "px";
  }
  document.getElementById("devices_per_line").innerHTML=devices_per_line;
}

function increase_devices_per_line(){
  devices_per_line++;
  resize_device_icons();
}
function decrease_devices_per_line(){
  if (devices_per_line > 1) {
    devices_per_line--;
    resize_device_icons();
  }
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}






//expand drawer under each device
var acc = document.getElementsByClassName("device");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        elements = document.getElementsByClassName("panel");
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = elements[i].style.display == 'block' ? 'none' : 'block';
        }
    }
}

// Blur on x
var toggle = function() {
    var on = false;
    return function() {
    if(!on) {
        on = true;
           document.getElementById("content").style.filter = "none";
           document.getElementById("glitch").style.display ='none';
        return;
    }
    document.getElementById("content").style.filter = "blur(9px) opacity(20%)";
    document.getElementById("glitch").style.display ='block';
    on = false;
}
}();


toggle(); //Set OFF as default

document.addEventListener('keydown',function(e) {
   var key = e.keyCode || e.which;
   if(key === 88) {
      toggle();
   }
}, false);





function init(){
  readTextFile("host_status.json", function(text){
      var data = JSON.parse(text);
      console.log(data);
  });

  resize_device_icons();
}
