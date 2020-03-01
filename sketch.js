var QSX = 0
var QSY = 0
var GunSound;
var Gunaim;
var HV = 110;
var badGuyX = 100;
var badGuyY = 100;
var badGuyXSpeed = 5.002;
var badGuyYSpeed = 4.502;
var loaded = 100;
var t = 10;
var w = 1;


function preload() {
  H = loadImage("HOME1.png");
  bullet = loadImage("bullet.png")
  bullet2 = loadImage("bullet.png")
  GunSound = loadSound("gun.wav");
  Reload = loadSound("Reload bullet.wav");
  Gunaim = loadImage("Gunaim5.png");
  badGuy = loadImage("Orga.png");
  QS = loadImage("QS3.png");
  OS = loadSound("OS2.m4a");
  SG = loadImage("shotgun1.png");
  IS = loadImage("IS.png");
  W = loadImage("WIN.png");

}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(190, 140, 120);
  noStroke();
  fill(130, 90, 70, 150);
  rect(0, 180, 600, 530);
  image(QS, QSX, QSY);
  QS.resize(0, 605)

  image(badGuy, badGuyX - 30, badGuyY - 65)
  badGuy.resize(60, 135);

  badGuyX = badGuyX + badGuyXSpeed
  if (badGuyX > width) {
    badGuyXSpeed = -badGuyXSpeed;
  }

  if (badGuyX <= 0) {
    badGuyXSpeed = -badGuyX - badGuyXSpeed;
  }

  badGuyY = badGuyY + badGuyYSpeed

  if (badGuyY > height) {
    badGuyYSpeed = -badGuyYSpeed;
  }

  if (badGuyY <= 0) {
    badGuyYSpeed = -badGuyY + badGuyYSpeed;
  }
  image(Gunaim, mouseX - 100, mouseY - 100);
  Gunaim.resize(200, 200);

  image(IS, 0, 0);
  IS.resize(600, 600);

  if (mouseIsPressed) {
    fill(0, 0, 0, 200);
    rect(0, 0, 600, 600);
    image(SG, 120, 160);
    SG.resize(350, 300)
    image(H, 0, 0);
    H.resize(600, 600);
  }


  if (t >= 5) {
    image(bullet, 490, -80);
    bullet.resize(100, 150);
  }

  if (t == 10) {
    image(bullet2, 510, -80);
    bullet2.resize(100, 150);
  }
  fill(0, 100);
  rect(30, 30, 120, 30);
  fill(500, 30, 50, 180);
  //HP
  rect(35, 35, HV, 20);

  //after game 
  if (HV <= 0) {
    fill(0);
    rect(0, 0, 600, 600);
    image(W, 0, 0);
    W.resize(600, 600);
  }
}

function keyPressed() {
  if (t > 0 & loaded >= 50 & key == 'j' & dist(mouseX, mouseY, badGuyX, badGuyY) < 50) {
    HV = HV - 10;
  }
  if (t > 0 & loaded >= 50 & key == 'j') {
    loaded = loaded - 50;
    GunSound.play(0.1);
    t = t - 5;
  }
  if (t == 0 & loaded == 0 & key == 'k') {
    Reload.play();
    loaded = loaded + 100;
    t = t + 10;
  }
  if (key == 'j' & t - 5) {
    OS.play();
  }
}
