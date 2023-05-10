/*
 * This file contains code that draws my eye types
 */



function Eyes(eyeVersion) {
  angleMode(RADIANS)
  //Set line colour
  const eyeLines = ["#000000"];
  

  if (eyeVersion == 1){ //happy curve
     //eyes
    stroke(eyeLines);
    strokeWeight(.3);
    noFill();
    arc(-1.9, 1.9, 2.5, 2.5, 9.9, 276);
    arc(1.9, 1.9, 2.5, 2.5, 9.9, 276);

    //brows
    line(.9, 0, 3, -.5);
    line(-.9, 0, -3, -.5);
  }

  else if (eyeVersion == 2){ //sad curve
    //eyes
    stroke(eyeLines);
    strokeWeight(.3);
    noFill();
    arc(-1.9, .8, 2.5, 2.5, 101, 97);
    arc(1.9, .8, 2.5, 2.5, 101, 97);

    //brows
    line(.9, 0, 3, -.5);
    line(-.9, 0, -3, -.5);
  }

  else if (eyeVersion == 3){ //squint
    //eyes
    stroke(eyeLines);
    strokeWeight(.3);
    noFill();
  
    line(1, 1, 3, 1);
    line(-3, 1, -1, 1);

    //brows
    line(.9, 0, 3, -.5);
    line(-.9, 0, -3, -.5);
  }
}