const tblretry = document.querySelector('.score button');

const mulai = document.getElementById('mulai');

let i = 0;

let correct = 0;

soal(0);

mulai.onclick = ()=>{
  document.querySelector('.wrapper').style.display = "block";
  document.querySelector('.start').style.display = "none";
}

tblretry.onclick = ()=>{
  correct = 0;
  i = 0;
  soal(0);
    document.querySelector('.score').style.display = "none";
    
    document.querySelector('.wrapper').style.display = "block";
}

function soal(index){
  document.querySelector('.quest').innerHTML = question[index].quest;
  
  document.getElementById('anss1').innerHTML = question[index].answer1;
  
  document.getElementById('anss2').innerHTML = question[index].answer2;
  
  document.getElementById('anss3').innerHTML = question[index].answer3;
  
}

function score(){
  if (document.getElementById('ans1').checked && question[i].answer1 == question[i].rights) {
    correct++;
  }
  
  if (document.getElementById('ans2').checked && question[i].answer2 == question[i].rights) {
    correct++;
  }
  
  if (document.getElementById('ans3').checked && question[i].answer3 == question[i].rights) {
    correct++;
  }
  
  i++
  if (question.length-1 < i) {
    document.querySelector('.score p').innerHTML = "Selamat kamu mendapatkan score "+correct;
    
    document.querySelector('.score').style.display = "block";
    
    document.querySelector('.wrapper').style.display = "none";
    
  }
  
  
  soal(i);
}