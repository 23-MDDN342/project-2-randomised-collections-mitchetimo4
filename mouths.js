/*
 * This file contains code that draws my mouths.
 */



function Mouths(mouthVersion) {

  //Set line colour
  const mouthLines = ["#000000"];
  

  if (mouthVersion == 1){ //open mouth
    stroke(mouthLines);
    strokeWeight(.3);
    noFill();
    
    //nose
    line(-0.1, 2.4, 0.1, 2.4);

    //mouth 
    noFill();
    ellipse(0, 3.7, 1.2, 1);
  }

  else if (mouthVersion == 2){ //slanted mouth
    stroke(mouthLines);
    strokeWeight(.3);
    noFill();
    
    //nose
    line(-0.1, 2.4, 0.1, 2.4);

    //mouth 
    line(-1, 3.7, .8, 4);
  }

  else if (mouthVersion == 3){ //straight mouth
    stroke(mouthLines);
    strokeWeight(.3);
    noFill();
    
    //nose
    line(-0.1, 2.4, 0.1, 2.4);

    //mouth 
    line(-1, 3.7, .8, 3.7);
  }

  else if (mouthVersion == 4){ //sad mouth
    stroke(mouthLines);
    strokeWeight(.3);
    noFill();
    
     //nose
    line(-0.1, 2.4, 0.1, 2.4);

    //mouth 
    ellipse(0, 3.7, 1.2, 1);
  }
}