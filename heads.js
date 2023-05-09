/*
 * This file contains code that draws my heads.
 */



function Heads(headVersion) {

  //Set hair colours
  const peach = ["#FFE0BD"];
  const darkBrown = ["#b06c49"];
  const lightBrown = ["#bf9169"];
  

  if (headVersion == 1){ //peach head
    noStroke();
    fill(peach);
    rect(-4, -2, 8, 5);
    triangle(-4, 3, 4, 3, 0, 5.5);
  }

  else if (headVersion == 2){ //black and blonde dreads
    noStroke();
    fill(darkBrown); 
    rect(-4, -2, 8, 5);
    triangle(-4, 3, 4, 3, 0, 5.5);
  }

  else if (headVersion == 3){ //lightskin head
    noStroke();
    fill(lightBrown);
    rect(-4, -2, 8, 5);
    triangle(-4, 3, 4, 3, 0, 5.5);
  }
}