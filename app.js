
$(document).ready(function(){
    getJSON1();
})

function getJSON1(){
  let queCount=
  $.getJSON('ques-db.json',function(json){
      // questions = json;
      const keys = Object.values(json)
      // console.log(keys);
      // [0 -> 1] * 1
      let randIndex =Math.floor(Math.round(Math.random()*(keys.length)));
      // console.log(randIndex);
      // console.log(keys[randIndex])
      // console.log(keys[randIndex].question)
      let selectedIndex=randIndex;
      // console.log(keys[randIndex].options[1])
    
        $(".question").text(keys[randIndex].question);
        $(".option1").text(keys[randIndex].options[0]);
        $(".option2").text(keys[randIndex].options[1]);
        $(".option3").text(keys[randIndex].options[2]);
        $(".option4").text(keys[randIndex].options[3]);

        $('div.option1').click(function() {
          let text = $(this).text();
          checkAns(text,selectedIndex);
        })
        $('div.option2').click(function() {
          let text = $(this).text();
          checkAns(text,selectedIndex);
        });
        $('div.option3').click(function() {
          let text = $(this).text();
          checkAns(text,selectedIndex);
        });
        $('div.option4').click(function() {
          let text = $(this).text();
          checkAns(text,selectedIndex);
        });
})
}


$(".next").click(function(){
  getJSON1(); 
  checkAns();
});
let correctAns=0
function checkAns(text,index)
{
  // console.log("checkans")
  //  console.log(text);
  //  console.log(index);
   $.getJSON('ques-db.json',function(json){
    const keys = Object.values(json) 
    // console.log(keys)
    if(text==keys[index].answer)
    {
      correctAns++;
      // console.log(correctAns)
    }
    console.log(correctAns)
  })
}