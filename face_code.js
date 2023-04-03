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



function orangeAlienFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [71, 222, 219];
  const fg_color3 = [255, 93, 35];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 traditonal eyes
  if (eye_value === 1 || eye_value == 3) {
    fill(bg_color3);
    ellipse(centerX, Iy, eyeSize-1,eyeSize);
   
  }
// middle eye
  if (eye_value >= 2) {
    fill(bg_color3);
    ellipse(centerX - distactBetweenEyes, Iy, eyeSize);
    ellipse(centerX + distactBetweenEyes, Iy, eyeSize );
  }

  // mouth
  fill(bg_color3);
  ellipse(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value);
}


function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function secondFace(){
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

  //hair
  noStroke();
  fill("#000000");
  rect(-4.5, -4, 9, 2.5)
  rect(-4.7, -3, 1.5, 4);
  rect(-2.5, -3, 1.5, 3);
  rect(1, -3, 1.5, 3);
  rect(2, -3, 1.5, 4);
  rect(3.25, -3, 1.5, 3);
}

function firstFace(){
  push();
  noFill();
  strokeWeight(.1);
  rect(-10, -10, 20, 20)
  pop();
  
  //hair base
  noStroke();
  fill("#905424");
  ellipse(0,-1,12,10.5);

  //head
  noStroke();
  fill("#FFE0BD");
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

  //hair
  fill("#905424");
  noStroke();
  rect(-4.5, -4, 9, 2.5);
  
}