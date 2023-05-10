/*
 * This file contains code that draws my hairstyles.
 */



function Hairstyles(hairstyleVersion) {

  //Set hair colours
  const pinkHair = ["#FF69B4"];
  const blackHair = ["#000000"];
  const blondeHair = ["#d9b380"];
  const greenHair = ["#90ee90"];
  const bluehair = ["#0000a5"];
  const darkBlueHair = ["#000058"];

  if (hairstyleVersion == 1){ //pink tipped dreads
    //hair
    noStroke();
    fill(blondeHair);
    rect(-4.5, -4, 9, 2.5)
    rect(-4.7, -3, 1.5, 4);
    rect(-2.5, -3, 1.5, 3);
    rect(1, -3, 1.5, 3);
    rect(2, -3, 1.5, 4);
    rect(3.25, -3, 1.5, 3);

    //pink tips
    noStroke();
    fill(pinkHair);
    rect(-4.7, -.5, 1.5, 1.5);
    rect(-2.5, -1, 1.5, 1);
    rect(1, -1, 1.5, 1);
    rect(2, -.5, 1.5, 1.5);
    rect(3.25, -1, 1.5, 1);
  }

  else if (hairstyleVersion == 2){ //black and blonde dreads
    //hair
    noStroke();
    fill(blackHair);
    rect(-4.5, -4, 9, 2.5)
    rect(-4.7, -3, 1.5, 4);
    rect(-2.5, -3, 1.5, 3);
    rect(1, -3, 1.5, 3);
    rect(2, -3, 1.5, 4);
    rect(3.25, -3, 1.5, 3);

    //blonde tips
    noStroke();
    fill(blondeHair);
    rect(-4.7, -.5, 1.5, 1.5);
    rect(-2.5, -1, 1.5, 1);
    rect(1, -1, 1.5, 1);
    rect(2, -.5, 1.5, 1.5);
    rect(3.25, -1, 1.5, 1);
  }

  else if (hairstyleVersion == 3){ //spikey hair
    //hair spikey
    noStroke();
    fill(blackHair);
    rect(-4, -4, 8, 2.5)
    triangle(-.1, -8, 1.1, -4, -1.1, -4);//middle
    triangle(1.9, -7, 3.1, -4, 1.1, -4);//right
    triangle(-2.1, -7, -1.1, -4, -3.1, -4);//left
  }

  else if (hairstyleVersion == 4){ //blue hair
    //hair
    noStroke();
    fill(bluehair);
    rect(-4.5, -4, 9, 2.5) //base

    rect(-4.7, -3, 1.5, 5);
    rect(-3.5, -3, 1.5, 4);
    rect(-2.5, -3, 1.5, 3);

    rect(1, -3, 1.5, 3);
    rect(2, -3, 1.5, 4);
    rect(3.25, -3, 1.5, 5);

    //dark blue tips
    noStroke();
    fill(darkBlueHair);
    rect(-4.7, 1, 1.5, 1);
    rect(-2.5, -1, 1.5, 1);
    rect(1, -1, 1.5, 1);
    rect(2, 0, 1.5, 1);
    rect(-3.5, 0, 1.5, 1);
    rect(3.25, 1, 1.5, 1);
  }

  else if (hairstyleVersion == 5){ //shaved green hair
    //hair
    noStroke();
    fill("#90ee90");
    rect(-4, -3.5, 8, 2.5); //base
    rect(-4, -1.5, .5, 2);
    rect(3.5, -1.5, .5, 2);
  }
}
 
