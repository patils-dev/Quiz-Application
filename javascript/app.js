let selectedIndex;
let text;
let queIndex=0;
let arr;
let ansArr=[];
let queCount=0;
let result;


function getQues(){
    queCount++;

    $(".questionNumber").text(queCount+"/ 10")
    // console.log(arr);
    if(queCount==10)
    {
         $(".submitButton").css("display", "flex");
    }
    $(".question").text(result[0].questions[queIndex].question);
    $(".option1").text(result[0].questions[queIndex].options[0]);
    $(".option2").text(result[0].questions[queIndex].options[1]);
    $(".option3").text(result[0].questions[queIndex].options[2]);
    $(".option4").text(result[0].questions[queIndex].options[3]);
    queIndex++;
}

$(document).ready(function(){

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "http://localhost:8000/",
        success: function(data){
           result=data;
           console.log(result)
        //    console.log(result[0].questions[0].question)
        },
        error:function(err){
            console.log(err);
        }
    });
    getQues();

   
})

// ['q1':0,'q4':5]



$(".next").click(function(){
    storeAns(selectedIndex,text)
    if(queCount<10)
    {
        getQues();
        $(".option1,.option2,.option3,.option4").css("background-color", "#E0F2F1");
    }
    

});


$('div.option1').click(function(){
    // text = $(this).index();
    text = $(this).text();
    console.log(text)
})

 
$('div.option2').click(function() {

    //  text = $(this).index();
    index=
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
function checkAns()
{
    let correctAns=0;
    for(let i=0;i<ansArr.length;i++)
    {
        console.log(ansArr[i])
        // console.log(arr[i].answer)
        if(ansArr[i]==result[0].questions[i].answer)
        {
            correctAns++;
        }
    }
    console.log(correctAns);
    alert(`You Scored : ${correctAns}`);
    // document.getElementById('scored').innerText=correctAns;
    // $(".score").text(correctAns+"/ 10")
}


function storeAns(index,text)
{
    ansArr.push(text);
    console.log(ansArr);
}
$(".submitButton").click(function(){
    checkAns();
    // console.log("checkans")
})



