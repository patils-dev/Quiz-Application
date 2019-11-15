
let selectedIndex;
let keys=" ";
let text;
let quesIndex=0;
let arr;
let ansArr=[];
let queCount=0;

//this function will get called after loading html document
$(document).ready(function(){
  getData();
})

//this function is for getting question's data from database
$.getJSON('../ques-db.json',function(json){
    keys=Object.values(json)
    arr=keys;
})

//this question will display question and option data
function getData(){
      queCount++;
      $(".questionNumber").text(queCount+"/ 10")
      $(".question").text(arr[quesIndex].question);
      $(".option1").text(arr[quesIndex].options[0]);
      $(".option2").text(arr[quesIndex].options[1]);
      $(".option3").text(arr[quesIndex].options[2]);
      $(".option4").text(arr[quesIndex].options[3]);
      quesIndex++;
}

//this function called after clicking on next button 
//this will display next question.
$(".next").click(function(){

      storeAns(selectedIndex,text)
      if(queCount<10)
      {
          getJSON1();
          $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
      }
      if(queCount==10)
      {
          $(".submitButton").css("display", "flex");
      }

});

$('div.option1').click(function(){
  text = $(this).text();
})

$('div.option2').click(function() {
  text = $(this).text();
})

$('div.option3').click(function() {
  text = $(this).text();
})

$('div.option4').click(function() {
  text = $(this).text();
})

$(".submitButton").click(function(){
  checkAns();
})


function storeAns(index,text)
{
    ansArr.push(text);
}

function checkAns()
{
  let correctAns=0;
  for(let i=0;i<ansArr.length;i++)
  {
      console.log(ansArr[i])
      console.log(arr[i].answer)
      if(ansArr[i]==arr[i].answer)
      {
          correctAns++;
      }
  }
  alert(`You Scored : ${correctAns}`);
}
