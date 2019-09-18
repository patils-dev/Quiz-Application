
$(document).ready(function(){
    getJSON();
})
let selectedIndex;
let keys=" ";
let text;
let queCount=1;
let correctAns=0;

function getJSON(){

  $(".questionNumber").text(queCount+"/ 10")
  
  $.getJSON('/ques-db.json',function(json){
      keys=Object.values(json)
      // let randIndex =Math.floor(Math.round(Math.random()*10));
      //   selectedIndex=randIndex;

      //   $(".question").text(keys[randIndex].question);
      //   $(".option1").text(keys[randIndex].options[0]);
      //   $(".option2").text(keys[randIndex].options[1]);
      //   $(".option3").text(keys[randIndex].options[2]);
      //   $(".option4").text(keys[randIndex].options[3]);  

      let arr= new Array();
      $.each( json, function(key, obj)
      {
           $.each(obj,function(k,value){
           arr.push(k,value)
        });
     });

    //  console.log(arr)
    

     arr.forEach((key,value) => {
      console.log(this.key,this.value);       
     });
})
}


$(".next").click(function(){
  checkAns(selectedIndex,text);
  if(queCount<11)
  {
  getJSON();
  $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
  }
  if(queCount==10)
  {
    $(".submitButton").css("display", "flex");
  }
  
});

$('div.option1').click(function(){
 
  $(".option1").css("background-color", "#4DB6AC");
  $(".option3,.option2,.option4").css("background-color", "#E0F2F1");
    text = $(this).text();
   
})
 
$('div.option2').click(function() {
  // console.log("div2")
  $(".option2").css("background-color", "#4DB6AC");
  $(".option1,.option3,.option4").css("background-color", "#E0F2F1");
   text = $(this).text();
 
})

$('div.option3').click(function() {
 
  $(".option3").css("background-color", "#4DB6AC");
  $(".option1,.option2,.option4").css("background-color", "#E0F2F1");
     text = $(this).text();
    
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
  
    if(text==keys[index].answer)
    {
      correctAns++;
      getData(correctAns);
    }
    queCount++;
   
}
function getData(correctAns)
{
  localStorage.setItem('score', correctAns );
} 
$(".submitButton").click(displayScore())
 
function displayScore()
{
  let score_value=localStorage.getItem('score') 
     $(".score").text(score_value+"/ 10")
}
