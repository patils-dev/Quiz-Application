
$(document).ready(function(){
    getJSON();
})

function getJSON(){
  $.getJSON('ques-db.json',function(json){
      questions = json;
      // console.log(Object)
      const keys = Object.values(json)
      console.log(keys);
      // [0 -> 1] * 1
      let randIndex =Math.floor(Math.round(Math.random()*(keys.length)));
      // console.log(randIndex);
      // console.log(keys[randIndex])
      // console.log(keys[randIndex].question)
      console.log(keys[randIndex].options[1])
    
        $(".question").text(keys[randIndex].question);
        $(".option1").text(keys[randIndex].options[0]);
        $(".option2").text(keys[randIndex].options[1]);
        $(".option3").text(keys[randIndex].options[2]);
        $(".option4").text(keys[randIndex].options[3]);

        $('div.option1').click(function() {
          let text = $(this).text();
          // do something with the text
          console.log(text)
        });
        $('div.option2').click(function() {
          let text = $(this).text();
          // do something with the text
          console.log(text)
        });
        $('div.option3').click(function() {
          let text = $(this).text();
          // do something with the text
          console.log(text)
        });
        $('div.option4').click(function() {
          let text = $(this).text();
          // do something with the text
          console.log(text)
        });

        
  })
}
$(".next").click(function(){
  getJSON();
    
});
