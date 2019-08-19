
let img;
let vid;
let theta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  
  vid = createVideo(['libraries/video.mp4']);
  vid.elt.muted = true;
  vid.loop();
  vid.hide();
}

function draw() {
  background(250);
  translate(0, 0, 0);
  push();
  rotateZ(theta * mouseX * 0.001);
  rotateX(theta * mouseX * 0.001);
  rotateY(theta * mouseX * 0.001);
  //pass image as texture
  texture(vid);
  noStroke()
  sphere(200);
  theta += 0.05;
}
