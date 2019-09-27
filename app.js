// $(document).ready(function(){
//     getJSON1();
// })
// let selectedIndex;
// let keys=" ";
// let text;
// let arr= [];      
// function getJSON1(){
 
//   // $.getJSON('ques-db.json',function(json){
//       keys=Object.values(json)
//     let arr=keys;
//     // console.log(arr)
//       // let randIndex =Math.floor(Math.round(Math.random()*(keys.length)));
//       // console.log(randIndex);
//       // selectedIndex=randIndex;


//       // THE ARRAY TO STORE JSON ITEMS.
//     //   let arr= new Array();
//     //   $.each( json, function(key, obj)
//     //   {
//     //        $.each(obj,function(k,value){
//     //        arr.push(k,value)
//     //     });
//     //  });
//     //  console.log(arr);

//     //  arr.forEach((key,value) => {
//     //   console.log(key);       
//     //  });

//         $(".question").text(keys[randIndex].question);
//         $(".option1").text(keys[randIndex].options[0]);
//         $(".option2").text(keys[randIndex].options[1]);
//         $(".option3").text(keys[randIndex].options[2]);
//         $(".option4").text(keys[randIndex].options[3]);
// })
// }

// $('div.option1').click(function(){
//   // console.log("div1")
//     text = $(this).index();
//     console.log(text)
// })
//  $(".next").click(function(){
//   checkAns(selectedIndex,text);
//   getJSON1();
// });
// $('div.option2').click(function() {
//    text = $(this).text();
// })

// $('div.option3').click(function() {
//     let text = $(this).text();
// })

// $('div.option4').click(function() {
//     let text = $(this).text();
// })


// let queCount=0;
// let correctAns=0
// function checkAns(index,text)
// {
//   // console.log("checkans");
//     if(text==keys[index].answer)
//     {
//       correctAns++;
//     }
//     console.log(index);
//     console.log(text)
//     let arr1=new Array();

//         arr.push(index);

//     queCount++;
//     // console.log(correctAns)
//     // console.log(queCount)
// }