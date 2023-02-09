
var cursor = true;
var speed = 500;       

let welcomeTitle = document.getElementById("welcome-title");
let welcomeForm = document.getElementById("enter_form");


  setInterval(() => {

          if (cursor) {
            document.getElementById('cursor').style.opacity = 0;
            cursor = false;
          } else {
            document.getElementById('cursor').style.opacity = 1;
            cursor = true;
          }
        }, speed);


      
          
      