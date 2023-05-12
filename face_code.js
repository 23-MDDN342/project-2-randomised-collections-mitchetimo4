/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */

function drawDesuHead(eyes, hairstyles, heads, mouths){
 
  const pinkHair = ["#FF69B4"];
  const blackHair = ["#000000"];
  const blondeHair = ["#d9b380"];
  const greenHair = ["#90ee90"];
  const bluehair = ["#0000a5"];
  const darkBlueHair = ["#000058"];

  const peach = ["#FFE0BD"];
  const darkBrown = ["#b06c49"];
  const lightBrown = ["#bf9169"];
  const eyeLines = ["#000000"];
  const mouthLines = ["#000000"];

  Heads(heads); //DRAW HEAD

  Eyes(eyes); //DRAW EYES

  Mouths(mouths); //DRAW MOUTH

  Hairstyles(hairstyles); //DRAW HAIR

}


function orangeAlienFace(tilt_value, eye_value, mouth_value) {
 //boarder
 push();
 noFill();
 strokeWeight(.1);
 rect(-10, -10, 20, 20)
 pop();
 
 //head
 noStroke();
 fill("#b06c49");
 rect(-4, -2, 8, 5);
 triangle(-4, 3, 4, 3, 0, 5.5);

 //eyes
 stroke('#000000');
 strokeWeight(.3);
 noFill();
 //arc(-4, -2, 5, 5, PI, PI + QUARTER_PI);
 arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
 arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

 //brows
 line(.9, 0, 3, -.5);
 line(-.9, 0, -3, -.5);

 //nose
 line(-0.1, 2.4, 0.1, 2.4);

 //mouth 
 line(-1, 3.7, .8, 3.7);

 //hair
 noStroke();
 fill("#d9b380");
 rect(-4.5, -4, 9, 2.5)
 rect(-4.7, -3, 1.5, 4);
 rect(-2.5, -3, 1.5, 3);
 rect(1, -3, 1.5, 3);
 rect(2, -3, 1.5, 4);
 rect(3.25, -3, 1.5, 3);

 //blonde tips
 noStroke();
 fill("#FF69B4");
 rect(-4.7, -.5, 1.5, 1.5);
 rect(-2.5, -1, 1.5, 1);
 rect(1, -1, 1.5, 1);
 rect(2, -.5, 1.5, 1.5);
 rect(3.25, -1, 1.5, 1);
}

function thirdFace() { //Pink dreads
  //boarder
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();

 //head
 noStroke();
 fill("#b06c49");
 rect(-4, -2, 8, 5);
 triangle(-4, 3, 4, 3, 0, 5.5);

 //eyes
 stroke('#000000');
 strokeWeight(.3);
 noFill();
 //arc(-4, -2, 5, 5, PI, PI + QUARTER_PI);
 arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
 arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

 //brows
 line(.9, 0, 3, -.5);
 line(-.9, 0, -3, -.5);

 //nose
 line(-0.1, 2.4, 0.1, 2.4);

 //mouth 
 line(-1, 3.7, .8, 4);

 //hair spikey
 noStroke();
  fill("#000000");
  rect(-4, -4, 8, 2.5)
  triangle(-.1, -8, 1.1, -4, -1.1, -4);//middle
  triangle(1.9, -7, 3.1, -4, 1.1, -4);//right
  triangle(-2.1, -7, -1.1, -4, -3.1, -4);//left
}

function secondFace(){ //dreads WRLD

  //boarder
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();
  
  //head
  noStroke();
  fill("#b06c49");
  rect(-4, -2, 8, 5);
  triangle(-4, 3, 4, 3, 0, 5.5);

  //eyes
  stroke('#000000');
  strokeWeight(.3);
  noFill();
  //arc(-4, -2, 5, 5, PI, PI + QUARTER_PI);
  arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
  arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

  //brows
  line(.9, 0, 3, -.5);
  line(-.9, 0, -3, -.5);

  //nose
  line(-0.1, 2.4, 0.1, 2.4);

  //mouth 
  noFill();
  ellipse(0, 3.7, 1.2, 1);

  //hair
  noStroke();
  fill("#000000");
  rect(-4.5, -4, 9, 2.5)
  rect(-4.7, -3, 1.5, 4);
  rect(-2.5, -3, 1.5, 3);
  rect(1, -3, 1.5, 3);
  rect(2, -3, 1.5, 4);
  rect(3.25, -3, 1.5, 3);

  //blonde tips
  noStroke();
  fill("#d9b380");
  rect(-4.7, -.5, 1.5, 1.5);
  rect(-2.5, -1, 1.5, 1);
  rect(1, -1, 1.5, 1);
  rect(2, -.5, 1.5, 1.5);
  rect(3.25, -1, 1.5, 1);
}

function firstFace(){ //afro
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();
  
  //hair base
  noStroke();
  fill("#FF69B4");
  ellipse(0,-1,12,10.5);

  //head
  noStroke();
  fill("#FFE0BD");
  rect(-4, -2, 8, 5);
  triangle(-4, 3, 4, 3, 0, 5.5);

  //eyes
  stroke('#000000');
  strokeWeight(.4);
  noFill();
  
  line(1, 1, 3, 1);
  line(-3, 1, -1, 1);

  //arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
  //arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

  //brows
  line(.9, 0, 3, -.5);
  line(-.9, 0, -3, -.5);

  //nose
  line(-0.1, 2.4, 0.1, 2.4);

  //mouth 
  //line(-1, 3.7, .8, 4);

  arc(0, 4.5, 2.5, 2.5, 9.9, 276);


  //hair
  fill("#FF69B4");
  noStroke();
  rect(-4.5, -4, 9, 2.5);
  
}

function fifthFace(){ //dreads XXXtentacion

  //boarder
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();
  
  //head
  noStroke();
  fill("#bf9169");
  rect(-4, -2, 8, 5);
  triangle(-4, 3, 4, 3, 0, 5.5);

  //eyes
  stroke('#000000');
  strokeWeight(.3);
  noFill();
  //arc(-4, -2, 5, 5, PI, PI + QUARTER_PI);
  arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
  arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

  //brows
  line(.9, 0, 3, -.5);
  line(-.9, 0, -3, -.5);

  //nose
  line(-0.1, 2.4, 0.1, 2.4);

  //mouth 
  noFill();
  ellipse(0, 3.7, 1.2, 1);

  //hair
  noStroke();
  fill("#0000a5");
  rect(-4.5, -4, 9, 2.5) //base

  rect(-4.7, -3, 1.5, 5);
  rect(-3.5, -3, 1.5, 4);
  rect(-2.5, -3, 1.5, 3);

  rect(1, -3, 1.5, 3);
  rect(2, -3, 1.5, 4);
  rect(3.25, -3, 1.5, 5);

  //dark blue tips
  noStroke();
  fill("#000058");
  rect(-4.7, 1, 1.5, 1);
  rect(-2.5, -1, 1.5, 1);
  rect(1, -1, 1.5, 1);
  rect(2, 0, 1.5, 1);
  rect(-3.5, 0, 1.5, 1);
rect(3.25, 1, 1.5, 1);
}

function sixthFace(){ //green shaved 

  //boarder
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();
  
  //head
  noStroke();
  fill("#b06c49");
  rect(-4, -2, 8, 5);
  triangle(-4, 3, 4, 3, 0, 5.5);

  //eyes
  stroke('#000000');
  strokeWeight(.3);
  noFill();
  //arc(-4, -2, 5, 5, PI, PI + QUARTER_PI);
  arc(-1.9, .8, 2.5, 2.5, 101, 97);
  arc(1.9, .8, 2.5, 2.5, 101, 97);

  //brows
  line(.9, 0, 3, -.5);
  line(-.9, 0, -3, -.5);

  //nose
  line(-0.1, 2.4, 0.1, 2.4);

  //mouth 
  noFill();
  ellipse(0, 3.7, 1.2, 1);

  //hair
  noStroke();
  fill("#90ee90");
  rect(-4, -3.5, 8, 2.5); //base
  rect(-4, -1.5, .5, 2);
  rect(3.5, -1.5, .5, 2);

 /*rect(-4.7, -3, 1.5, 5);
  rect(-3.5, -3, 1.5, 4);
  rect(-2.5, -3, 1.5, 3);

  rect(1, -3, 1.5, 3);
  rect(2, -3, 1.5, 4);
  rect(3.25, -3, 1.5, 5);*/

  //blonde tips
  /*noStroke();
  fill("#000058");
  rect(-4.7, 1, 1.5, 1);
  rect(-2.5, -1, 1.5, 1);
  rect(1, -1, 1.5, 1);
  rect(2, 0, 1.5, 1);
  rect(-3.5, 0, 1.5, 1);
rect(3.25, 1, 1.5, 1);*/
}

