$(document).ready(function(){
    getJSON1();
})
let selectedIndex;
let keys=" ";
let text;
let quesIndex=0;
let arr;
let ansArr=[];
let queCount=0;



$.getJSON('ques-db.json',function(json){
    keys=Object.values(json)
      arr=keys;})

function getJSON1(){
        queCount++;
        $(".questionNumber").text(queCount+"/ 10")
        console.log(arr);
        $(".question").text(arr[quesIndex].question);
        $(".option1").text(arr[quesIndex].options[0]);
        $(".option2").text(arr[quesIndex].options[1]);
        $(".option3").text(arr[quesIndex].options[2]);
        $(".option4").text(arr[quesIndex].options[3]);
        quesIndex++;
}

$('div.option1').click(function(){
    // text = $(this).index();
    text = $(this).text();
    console.log(text)
})

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
$('div.option2').click(function() {

    //  text = $(this).index();
    text = $(this).text();
   console.log(text)
})

$('div.option3').click(function() {

    //  text = $(this).index();
    text = $(this).text();
    console.log(text)
})

$('div.option4').click(function() {

    //  text = $(this).index();
    text = $(this).text();
    console.log(text)
})

function storeAns(index,text)
{
    ansArr.push(text);
    console.log(ansArr);
}
$(".submit").click(function(){
    checkAns();
    console.log("checkans")
})

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
    $(".score").text(correctAns+"/ 10")
}

