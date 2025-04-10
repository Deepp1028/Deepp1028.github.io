//alert('This is external Javascript')
function addition(){
    let a = 25;
    let b = 10;

    console.log(a+b);
}

function substraction(){
    let a = prompt("Please insert no 1 : ");
    let b = prompt("Please insert no 2 : ");
    let c = a-b;
    alert("The final answer of subsition is "+c);
}
function substraction2(){
    let a = 100;
    let b = 37;

    console.log(a-b)
}
function Multiplication(){
    let a = 6;
    let b = 8;

    let result = a*b;

    //Increment
    //result++;

    //Decrement
    //result--;

    console.log(result);
}
function Divition(){
    let a = 144;
    let b = 12;

    let result = a/b;

    console.log(result);
}
function countdown(){
    let countdown = 10;
    while(countdown>0){
    console.log("Countdown "+countdown)
    countdown--;    
    }
    console.log("Happy New Year!")
    
}