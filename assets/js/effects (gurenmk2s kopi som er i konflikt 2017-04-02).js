
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


        return;
    }
    document.getElementById("content").style.filter = "blur(7px) opacity(20%)";
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
