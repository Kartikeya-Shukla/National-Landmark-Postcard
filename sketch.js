//Kartikeya Shukla
//ICD201-02
//April 17,2024
// Postcard Assignment


function setup() {
  createCanvas(800, 500);
  angleMode(DEGREES)
 
}
// sky background
function draw() {
  let sky = color(51,153,255 );
  let cloud = color(255);
  noStroke();
  fill(sky);
  background(sky);
 
  //clouds
  fill(cloud);
  noStroke();  
  ellipseMode(CORNER);
  ellipse(250, 100,120, 60);
  ellipse(320, 90, 120, 70);
  ellipse(600, 5, -300, -100);
  ellipse(550, 40, -350, -100);


  //Mountain 1
  let rock = color (210,180,140)
  fill(rock);
  triangle(325, 200, 700, 500, 50, 500);
  let grey = color (119,136,153)
  fill(grey)
  triangle(325, 200, 300, 400, 200, 500);
  let peru = color (191, 143, 101)
  fill(peru)
  triangle(700, 500, 300, 400, 200, 500);
  let wood = color (222,184,135)
  fill(wood)
  triangle(325, 200, 300, 400, 700, 500);


  //Mountain 2
  let darkrock = color (150, 107, 69)
  fill(darkrock);
  triangle(400, 200, 700, 500, 50, 500);


  //Mountain 3
  let darkgrey = color (128)
  fill(darkgrey);
  triangle(460, 200, 2500, 500, 50, 500);
  let lightgrey = color (192)
  fill(lightgrey)
  triangle(460, 200, 300, 400, 50, 500);
  triangle(460,300,175,500,50,500);


  //hill
  let green = color(34,139,34)
  fill(green)
  ellipse(200, 325, 600, 300);


  //rocky hill 1
  let grey2 = color(169)
  fill(grey2);
  triangle(170, 200, -10000, 500, 400, 500);
  fill(darkgrey)
  triangle(170,200,150,450,305,375)


  //hill2
  fill(green)
  beginShape();
  vertex (450,365)
  vertex(5,300)
  vertex(205,800)
  endShape();


  //Mountain 4
  fill(darkgrey);
  triangle(725, 100, 2500, 500, 500, 500);
  fill(lightgrey)
  triangle(725, 98, 700, 400, 550, 400);


  //Mountain 5
   fill(darkgrey);
   stroke(225)
   triangle(550, 200, 1000, 275, 550, 400);
   line(550, 400, 550, 200);
   fill(lightgrey)
   triangle(550, 200, 600, 400, 550, 400);


   //Mountain 6
   fill(darkgrey);
   triangle(775, 150, 1000, 600, 550, 400);
   fill(lightgrey)
   triangle(775, 150, 1000, 400, 750, 400);
   stroke (225)
   line(550, 400, 775, 150);
   
   //Rocky Hill 2
   fill(grey2);
   triangle(100, 140, -10000, 800, 200, 500);
   fill(darkgrey)
   triangle(-5,149,-10000,10000,505,775)


   //Hill 3
   stroke(green)
   fill(green)
   beginShape();
   vertex (450,450)
   vertex(-10,300)
   vertex(5,900)
   endShape();


   //Hill 4
   stroke(green)
   fill(green)
   beginShape();
   vertex (850,850)
   vertex(850,225)
   vertex(5,625)
   endShape();


   //Water Stream
   let water = color (135,206,250)
   fill(water)
   beginShape(260,338);
   vertex(265,388);
   vertex(270,339);
   vertex(322,455);
   vertex(300,510);
   vertex(365,510)
   curveVertex(366,466)
   vertex(316,346)
   vertex(377,240)
   endShape();


   //text
   let heading = color (255,255,0)
   stroke(heading)
   fill(heading)
   ellipse(-275, -55, 575, 185);
   fill(0); // Black color
   textSize(24);
   textAlign(CENTER, CENTER);
   text("Welcome to Yosemite National Park!",2, -30, 275, 165);


}



