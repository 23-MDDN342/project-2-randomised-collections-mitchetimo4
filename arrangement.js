/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [71, 222, 219];
function setup () {
 // angleMode(DEGREES)
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}

//Guassian Selection from breif and lecture
function getAverageRandom(min, max, n) {
  let sum = 0;
      for (let i=0; i<n; i++) {
          sum = sum + random(min, max);

 }
 return sum / n;
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  noStroke();

  // draw a 7x4 grid of faces
  let w = canvasWidth / 7;
  let h = canvasHeight / 4;
  for(let i=0; i<4; i++) {
    for(let j=0; j<7; j++) {
      let y = h/2 + h*i;
      let x = w/2 + w*j;
     
      let headRandom = random(1,100);
      let eyeRandom = random(1,100);
      let mouthRandom = random(1,100);
      let hairstyleRandom = random(1,100);

      let headVersion;
      let eyeVersion;
      let mouthVersion;
      let hairstyleVersion;

     // function drawDesuHead(eyes, hairstyles, heads, mouths){
      

        if(headRandom < 25) {
          headVersion = 1;
        } else if (headRandom >= 25 && headRandom <= 50){
          headVersion = 2;
        } else if (headRandom > 50 && headRandom <= 75){
          headVersion = 3;
        } else if (headRandom > 75){
          headVersion = 2;
        }

        if(eyeRandom < 25){
          eyeVersion = 1;
        } else if (eyeRandom >= 25 && eyeRandom <= 50){
          eyeVersion = 2;
        } else if (eyeRandom > 50 && eyeRandom <= 75){
          eyeVersion = 3;
        } else if (eyeRandom > 75){
          eyeVersion = 1;
        }

        if(mouthRandom < 25){
          mouthVersion = 1;
        } else if (mouthRandom >= 25 && mouthRandom <= 50){
          mouthVersion = 2;
        } else if (mouthRandom > 50 && mouthRandom <= 75){
          mouthVersion = 3;
        } else if (mouthRandom > 75){
          mouthVersion = 1;
        }

        if(hairstyleRandom < 16.6666666667){
          hairstyleVersion = 1;
        } else if (hairstyleRandom >= 16.6666666667 && hairstyleRandom <= 33.3333333333){
          hairstyleVersion = 2;
        } else if (hairstyleRandom > 33.3333333333 && hairstyleRandom <= 50){
          hairstyleVersion = 3;
        } else if (hairstyleRandom > 50 && hairstyleRandom <= 66.6666666667){
          hairstyleVersion = 4;
        } else if (hairstyleRandom > 66.6666666667 && hairstyleRandom <= 83.3333333333){
          hairstyleVersion = 5;
        } else if (hairstyleRandom > 83.3333333333 && hairstyleRandom <= 100){
          hairstyleVersion = 6;
        }


        push();
        translate(x, y);
        scale(8);
        
        drawDesuHead(eyeVersion, hairstyleVersion, headVersion, mouthVersion);
        pop();
      
    }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
