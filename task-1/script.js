/*----------------Jai Shree Krishna--------------------------*/

//-----------Menu bar---------
function toggleMe() {
 menubtn = document.getElementsByClassName("navlist");
  menubtn[0].classList.toggle("show");
}

//----------Slide auto changing--------------
var counter = 1;
function slideMe(){
  document.getElementById("radio"+counter).checked = true;
  counter++;
  if(counter >5){
    counter = 1;
  }
}
setInterval(slideMe,3000);


// --------------Video player-----------------------

let playBtn = document.querySelector(".video .play-btn");
let videoView = document.querySelector(".video-Player");
let video = document.querySelector('.video-Player video');
document.querySelectorAll(".video-gallery .play-btn").forEach((btn)=>{

  btn.onclick =() =>{
    videoView.classList.add("active");
    video.src = btn.getAttribute("data-target") ;
  }
});

function closePopup() {
  video.pause();
  videoView.classList.remove("active");
}


// -----------------Images Gallery-----------------
// render image from image box to main box on click 
document.querySelectorAll(".box-img img").forEach((img)=>{

  img.onclick =() =>{
    document.querySelector('.main-img img').src = img.getAttribute('src') ;
  }
});



// --------------Signup-signin page---------------

var signup  =  document.querySelector("#signup");
var  signup_page = document.querySelector(".signup-section");
var signup_box = document.querySelector(".signup-container");
var signin  =  document.querySelector("#signin");

signup.addEventListener("click",()=>{
   signup_page.classList.toggle("activated");
   signup_box.classList.toggle("deactivate");
});

signin.addEventListener("click",()=>{
  signup_page.classList.remove("activated");
  signup_box.classList.add("deactivate");
});
