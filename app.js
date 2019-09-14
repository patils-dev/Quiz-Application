$(document).ready(function(){
    getJSON1();
})
let selectedIndex;
let keys=" ";
let text;
function getJSON1(){
  let queCount1=
  $.getJSON('ques-db.json',function(json){
      keys=Object.values(json)
      
      let randIndex =Math.floor(Math.round(Math.random()*(keys.length)));
      console.log(randIndex);
      selectedIndex=randIndex;

        $(".question").text(keys[randIndex].question);
        $(".option1").text(keys[randIndex].options[0]);
        $(".option2").text(keys[randIndex].options[1]);
        $(".option3").text(keys[randIndex].options[2]);
        $(".option4").text(keys[randIndex].options[3]);
})
}

$('div.option1').click(function(){
  console.log("div1")
    text = $(this).index();
    console.log(text)
})
 $(".next").click(function(){
  console.log("checkans")
  checkAns(selectedIndex,text);
  getJSON1();
});
$('div.option2').click(function() {
  console.log("div2")
   text = $(this).text();
    // $(".next").click(function(){
    //   console.log("checkans")
    // checkAns(selectedIndex,text);
    // getJSON1(); 
  // });
})

$('div.option3').click(function() {
  console.log("div3")
    let text = $(this).text();
  //   $(".next").click(function(){
  //     console.log("checkans")
  //   checkAns(selectedIndex,text);
  //   getJSON1(); 
  // });
})

$('div.option4').click(function() {
  console.log("div4")
    let text = $(this).text();
  //   $(".next").click(function(){
  //     console.log("checkans")
  //    checkAns(selectedIndex,text);
  //   getJSON1(); 
  // });
})


let queCount=0;
let correctAns=0
function checkAns(index,text)
{
  console.log("checkans")
    if(text==keys[index].answer)
    {
      correctAns++;
    }
    queCount++;
    console.log(correctAns)
    console.log(queCount)
}