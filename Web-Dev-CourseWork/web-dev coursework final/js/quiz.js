    let score=0;
    let correct = 0;

 function getRadioValues() {
    var q1=document.myform.q1.value;
    var q2=document.myform.q2.value;
    var q3=document.myform.q3.value;
    var q4=document.myform.q4.value;
    var q5=document.myform.q5.value;
    var q6=document.myform.q6.value;
    var q7=document.myform.q7.value;
    var q8=document.myform.q8.value;
    var q9=document.myform.q9.value;
    var q10=document.myform.q10.value;
   
    if(q1=="c"){ 
        score+=2;correct++;
    }else{
        score--;
    }
    if(q2=="a"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q3=="d"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q4=="a"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q5=="c"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q6=="b"){ 
        score+=2; correct++;
    }else{
        score--;
    }


    if(q7=="d"){ 
        score+=2; correct++;
    }else{
        score--;
    }


    if(q8=="d"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q9=="c"){ 
        score+=2; correct++;
    }else{
        score--;
    }
    if(q10=="b"){ 
        score+=2; correct++;

    }else{
        score--;
    }            
}

startTimer();
let time = 60;

function startTimer(){
    setTimeout(function(){
        if(time>0){
        time--;
        document.getElementById('timer').innerHTML = time;
        startTimer();


    }else{
        finishAttempt();
    }
    },1000);
}

function finishAttempt(){
    getRadioValues();

    document.getElementById('popup').style.display = 'block';
    document.getElementById('totalMarks').innerHTML = score;
    document.getElementById('timeLeft').innerHTML = 60-time;
        document.getElementById('timer').innerHTML = '0';

    document.getElementById('correct').innerHTML = correct;



}