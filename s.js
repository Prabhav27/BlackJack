let startGameBtn=document.getElementById("str");
let newCardBtn=document.getElementById("nc");

let cardArr=[];
let sum=0;

let cardDisplay=document.getElementById("card");
let sumDisplay=document.getElementById("sum");


let a=false;
let b=false;
let f=false;
let nax=false;


let RandomGen=()=>{
    let x=Math.floor(Math.random()*(13-1+1))+1;
    console.log(x);
    return x;
}

let startMessage=document.getElementById("start");
let namex=document.getElementById("namee");

function startG(){

    let strx=prompt("Let's Play! Enter Your Name : ");

    namex.innerHTML=strx;
    startMessage.innerHTML=" ";
    console.log(strx);  

    if(strx!=null && strx.length>0){
        nax=true;
    sum=0;

    a=true;
    b=false;

    console.log(a);

    let firstCard=RandomGen();
    let secondCard=RandomGen();

    cardArr.push(firstCard);
    cardArr.push(secondCard);

    sum+=firstCard;
    sum+=secondCard;

let message=" ";

    if(sum<21){
        message+="Do you want to draw a new card ?";
    }
    else if(sum===21){
        message+="Woah! You've got a BlackJack!";
        b=true;
    }
    else{
        message+="You Lost! You're out of the game! Start Again";
        a=false;
    }
    

    cardDisplay.innerHTML="Cards : " + cardArr[0]+" "+cardArr[1];
    sumDisplay.innerHTML="Sum : "+ sum;

    startMessage.innerHTML=message;
  
    cardArr=[];


    }
    else{
        nax=false;
        console.log(strx);
        
        cardDisplay.innerHTML="Cards : " ;
        sumDisplay.innerHTML="Sum : ";
        startMessage.innerHTML="Please Enter Your Name First!";
        
        cardArr=[];
    }
}

newCardBtn.addEventListener("click",()=>{
        if(b==false && a==true && nax==true){
        let newCard=RandomGen();
        
        
        sum+=newCard;
        let message=" ";
    if(sum<21){
        message+="Do you want to draw a new card ?";
    }
    else if(sum===21){
        message+="Woah! You've got a BlackJack!";
        b=true;
    }
    else{
        message+="You Lost! You're out of the game!";
        a=false;
    }
    startMessage.innerHTML=message;
    
        sumDisplay.innerHTML="Sum : "+ sum;
      
        
        cardDisplay.innerHTML+=" "+newCard;

    }
    else if(nax==false){

        let message=" ";
        message+="Enter Your Name Before Playing!"
        startMessage.innerHTML=message;
    }
    else if(b==true && a==true){

        let message=" ";
        message+="You've Already Won BlackJack! Please Start a New Game."
        startMessage.innerHTML=message;
    }
    else if(a==false){

        let message=" ";
        message+="You've Already Lost, Cannot Draw a New Card! Please Start a New Game."
        startMessage.innerHTML=message;
    }
    })

