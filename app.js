// $(document).ready(function(){
//     if(typeof(storage)!=="undefined")
//     {
//         $getJSON('ques-db.json',function(data){
//             selectedQue=data[Math.floor(Math.random()*quotes.length)]
//         })
//     }
// })
window.onload=function()
{
    document.getElementsByClassName("opt1")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt2")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt3")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt4")[0].style.backgroundColor="#E0F2F1";
}
function getOption1(){
    document.getElementsByClassName("opt1")[0].style.backgroundColor="#4DB6AC";
    document.getElementsByClassName("opt2")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt3")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt4")[0].style.backgroundColor="#E0F2F1";
}
function getOption2(){
    document.getElementsByClassName("opt1")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt2")[0].style.backgroundColor="#4DB6AC";
    document.getElementsByClassName("opt3")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt4")[0].style.backgroundColor="#E0F2F1";
}
function getOption3(){
    document.getElementsByClassName("opt1")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt2")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt3")[0].style.backgroundColor="#4DB6AC";
    document.getElementsByClassName("opt4")[0].style.backgroundColor="#E0F2F1";
}
function getOption4(){
    document.getElementsByClassName("opt1")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt2")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt3")[0].style.backgroundColor="#E0F2F1";
    document.getElementsByClassName("opt4")[0].style.backgroundColor="#4DB6AC";
}
$(function(){
    // data in attributes
    // getAttributeData()
    getJSON();
    // getLocalData()
 })
 console.log("sudheer reddy");
 function getJSON(){
    $.getJSON('ques-db.json',function(json){
        data = json;
        console.log(typeof data);
        console.log(data);
        // localStorage.setItem("data",JSON.stringify(data))
        // let varr=localStorage.getItem("data");
        // let obj=JSON.parse(varr)


        const keys=Object.keys(data);
        console.log(typeof keys);
        let getQuestionAndAnswer = data[keys[3]];
        console.log(getQuestionAndAnswer);
        let getQuestion=getQuestionAndAnswer["question"];
        document.getElementById("que").innerHTML=getQuestion;
        let getOptions=getQuestionAndAnswer["options"];
        let option1=getOptions[0];
        document.getElementsByClassName("opt1")[0].innerHTML=option1;
        let option2=getOptions[1];
        document.getElementsByClassName("opt2")[0].innerHTML=option2;
        console.log(option2);
        let option3=getOptions[2];
        document.getElementsByClassName("opt3")[0].innerHTML=option3;
        let option4=getOptions[3];
        document.getElementsByClassName("opt4")[0].innerHTML=option4;
    })
}