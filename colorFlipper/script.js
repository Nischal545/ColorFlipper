const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]; //16

//Getting inside of btn class of button tag through parent div class->button-container
const btn1 = document.querySelector('.button-container .btn');

btn1.addEventListener("click", function(){
    let hexColor = "#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()]
    }

    document.body.style.backgroundColor = hexColor;
})



function getRandomNumber(){
    //This generates value less than 16
    return Math.floor(Math.random() * hex.length);
}
