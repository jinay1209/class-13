var input,heading;
var value;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  input=createInput();
  input.position(10,60);

  heading = createElement("h4", "Enter any alphabet:");
  heading.position(10,10)
  //textAlign(CENTER);
  //textSize(50)
 
}

function draw() {

    var value = input.value();
    switch(value){
        case 'a': text("This is a vowel", 10, 100);
                    break;
        case 'e': text("This is a vowel", 10, 100);
                    break;
        case 'i': text("This is a vowel", 10, 100);
                    break;
        case 'o': text("This is a vowel", 10, 100);
                    break;
        case 'u': text("This is a vowel", 10, 100);
                    break;
        default: text("Please enter an alphabet", 10, 150);
    }
}