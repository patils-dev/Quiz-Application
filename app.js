$(document).ready(function(){
    getJSON1();
})
let selectedIndex;
let keys=" ";
let text;
let queCount=0;
let correctAns=0
function getJSON1(){
  let queCount1=
  $.getJSON('ques-db.json',function(json){
      keys=Object.values(json)
      //  console.log(keys)
      let randIndex =Math.floor(Math.round(Math.random()*10));
      // console.log(randIndex);
      selectedIndex=randIndex;

        $(".question").text(keys[randIndex].question);
        $(".option1").text(keys[randIndex].options[0]);
        $(".option2").text(keys[randIndex].options[1]);
        $(".option3").text(keys[randIndex].options[2]);
        $(".option4").text(keys[randIndex].options[3]);
})
}

$(".next").click(function(){
  // console.log("checkans")
  checkAns(selectedIndex,text);
  getJSON1();
  $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
});

$('div.option1').click(function(){
  // console.log("div1")
  $(".option1").css("background-color", "#4DB6AC");
  $(".option3,.option2,.option4").css("background-color", "#E0F2F1");
    text = $(this).text();
    // console.log(text)
})
 
$('div.option2').click(function() {
  // console.log("div2")
  $(".option2").css("background-color", "#4DB6AC");
  $(".option1,.option3,.option4").css("background-color", "#E0F2F1");
   text = $(this).text();
  //  console.log(text); 
})

$('div.option3').click(function() {
  // console.log("div3")
  $(".option3").css("background-color", "#4DB6AC");
  $(".option1,.option2,.option4").css("background-color", "#E0F2F1");
     text = $(this).text();
    //  console.log(text);
})

$('div.option4').click(function() {
  // console.log("div4")
  $(".option4").css("background-color", "#4DB6AC");
  $(".option1,.option2,.option3").css("background-color", "#E0F2F1");
     text = $(this).text();
    //  console.log(text); 
})

function checkAns(index,text)
{
  // console.log(keys[index].answer)
  // console.log(text)
    if(text==keys[index].answer)
    {
      correctAns++;
    }
    queCount++;
    console.log(correctAns)
    console.log(queCount)
}