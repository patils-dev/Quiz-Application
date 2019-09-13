
$(document).ready(function(){
    $.getJSON('ques-db.json',function(json){
        console.log(json);        
        let quearray=JSON.parse(json) 
        // console.log(quearray);

        $.each(json, function(key,val){
            // output += '<li>'+ val.name + " " + val.zipcode+ '</li>';
            console.log(val.question)
          });
  })
})



