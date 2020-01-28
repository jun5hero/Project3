// var winHeight = $(window).height();
var winHeight = window.innerHeight;
var height = ( winHeight * 16.6666 ) / 100;
var lineHeight = height + "px";


//$("li").css("line-height", lineHeight);
//$("li").css("height", height);

var events=[
  "11/28",
  "11/29",
  "12/5",
  "12/10",
  "12/20",
  "1/2"
]

//function testing() {
//  show(Events.random{})
//}

var button=document.getElementById("button");
var random=document.getElementsByClassName("random")[0];


button.addEventListener("click",function(){
  let randomNum = Math.floor(Math.random() * events.length);
  random.innerHTML = events[randomNum];
  console.log(events[randomNum]);
});

button.addEventListener("mouseover", function(){
  button.style.backgroundColor=
  "peachPuff";
})

button.addEventListener("mouseout", function(){
  button.style.backgroundColor=
  "";
})
