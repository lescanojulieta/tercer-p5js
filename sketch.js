//Actividad 3
/*Alumna: Julieta Lescano*/

//--- variables horizontales sup.
let quadX = 100;
let quadX1 = 115;

let quadX2 = 130;
let quadX3 = 145;

let quadX4 = 160;
let quadX5 = 175;

let quadX6 = 190;
let quadX7 = 205;

let quadX8 = 220;
let quadX9 = 235;

let quadX10 = 250;
let quadX11 = 265;

let quadX12 = 280;
let quadX13 = 295;

let quadX14 = 310;
let quadX15 = 325;

//--- variables horizontales inf.
let quadZ = 400;
let quadZ1 = 370;

let quadZ2 = 450;
let quadZ3 = 420;

let quadZ4 = 500;
let quadZ5 = 470;

let quadZ6 = 550;
let quadZ7 = 520;

let quadZ8 = 600;
let quadZ9 = 570;

// --- ejes X e Y
let anchoX;
let altoY;

//---
let vel = 3;
let dir = 1;

let inicioancho = 0;

function setup() {
  createCanvas(700, 700);

  let anchoX = height;
  let altoY = width;
}

function draw() {
  background(0);
  noStroke(0);
  fill(255);

  anchoX = mouseX;
  altoY = mouseY;

  if (anchoX < 350) {
    background(0);
  } else {
    background(255);
  }

  if (mouseX < 350) {
    fill(255);
  } else {
    fill(0);
  }

  /*--- CUADRILÁTEROS VERTICALES*/

  //verticales dcho.
  quad(590, 110, 590, 590, 600, 600, 600, 100);
  quad(570, 130, 570, 570, 580, 580, 580, 120);
  quad(550, 150, 550, 550, 560, 560, 560, 140);
  quad(530, 170, 530, 530, 540, 540, 540, 160);
  quad(510, 190, 510, 510, 520, 520, 520, 180);
  quad(490, 210, 490, 490, 500, 500, 500, 200);
  quad(470, 230, 470, 470, 480, 480, 480, 220);
  quad(450, 250, 450, 450, 460, 460, 460, 240);
  quad(430, 270, 430, 430, 440, 440, 440, 260);
  quad(410, 290, 410, 410, 420, 420, 420, 280);
  quad(390, 310, 390, 390, 400, 400, 400, 300);
  quad(370, 330, 370, 370, 380, 380, 380, 320);
  quad(350, 350, 350, 350, 360, 360, 360, 340);

  //verticales izq.

  quad(100, 100, 100, 600, 120, 580, 120, 120);
  quad(140, 140, 140, 560, 160, 540, 160, 160);
  quad(180, 180, 180, 520, 200, 500, 200, 200);
  quad(220, 220, 220, 480, 240, 460, 240, 240);
  quad(260, 260, 260, 440, 280, 420, 280, 280);
  quad(300, 300, 300, 400, 320, 380, 320, 320);
  quad(340, 340, 340, 360, 360, 340, 360, 360);

  /*--- CUADRILÁTEROS HORIZONTALES Y FUNCIÓN "RESTABLECER"*/

  //---horizontales sup.

  //quadX, X1
  quad(quadX, 100, quadX1, 115, 585, 115, 600, 100);
  quadX = quadX + vel;
  quadX1 = quadX1 + vel;
  //quadX2, X3
  quad(quadX2, 130, quadX3, 145, 555, 145, 570, 130);
  quadX2 = quadX2 + vel;
  quadX3 = quadX3 + vel;
  //quadX4, X5
  quad(quadX4, 160, quadX5, 175, 525, 175, 540, 160);
  quadX4 = quadX4 + vel;
  quadX5 = quadX5 + vel;
  //quadX6,X7
  quad(quadX6, 190, quadX7, 205, 495, 205, 510, 190);
  quadX6 = quadX6 + vel;
  quadX7 = quadX7 + vel;
  //quadX8,X9
  quad(quadX8, 220, quadX9, 235, 465, 235, 480, 220);
  quadX8 = quadX8 + vel;
  quadX9 = quadX9 + vel;
  //quadX10, X11
  quad(quadX10, 250, quadX11, 265, 435, 265, 450, 250);
  quadX10 = quadX10 + vel;
  quadX11 = quadX11 + vel;
  //quadX12, X13
  quad(quadX12, 280, quadX13, 295, 405, 295, 420, 280);
  quadX12 = quadX12 + vel;
  quadX13 = quadX13 + vel;
  //quadX14, X15
  quad(quadX14, 310, quadX15, 325, 375, 325, 390, 310);
  quadX14 = quadX14 + vel;
  quadX15 = quadX15 + vel;

  if (quadX && quadX1 > width) {
    vel = -2;
  }
  if (quadX && quadX1 == 0) {
    vel = 3;
  }

  //--- horizontales inf.

  //quadZ, Z1
  quad(330, 370, 300, 400, quadZ, 400, quadZ1, 370);
  quadZ = quadZ - vel;
  quadZ1 = quadZ1 - vel;
  //quadZ2, 3
  quad(280, 420, 250, 450, quadZ2, 450, quadZ3, 420);
  quadZ2 = quadZ2 - vel;
  quadZ3 = quadZ3 - vel;
  //quadZ4, Z5
  quad(230, 470, 200, 500, quadZ4, 500, quadZ5, 470);
  quadZ4 = quadZ4 - vel;
  quadZ5 = quadZ5 - vel;
  //quadZ6, Z7
  quad(180, 520, 150, 550, quadZ6, 550, quadZ7, 520);
  quadZ6 = quadZ6 - vel;
  quadZ7 = quadZ7 - vel;
  //quadZ8, Z9
  quad(130, 570, 100, 600, quadZ8, 600, quadZ9, 570);
  quadZ8 = quadZ8 - vel;
  quadZ9 = quadZ9 - vel;

  //--- presione "Barra Espaciadora" para Restablecer
  if (keyIsPressed) {
    if (keyCode == "32") {
      quadX = 100;
      quadX1 = 115;

      quadX2 = 130;
      quadX3 = 145;

      quadX4 = 160;
      quadX5 = 175;

      quadX6 = 190;
      quadX7 = 205;

      quadX8 = 220;
      quadX9 = 235;

      quadX10 = 250;
      quadX11 = 265;

      quadX12 = 280;
      quadX13 = 295;

      quadX14 = 310;
      quadX15 = 325;

      quadX16 = 340;
      quadX17 = 355;

      quadZ = 400;
      quadZ1 = 370;

      quadZ2 = 450;
      quadZ3 = 420;

      quadZ4 = 500;
      quadZ5 = 470;

      quadZ6 = 550;
      quadZ7 = 520;

      quadZ8 = 600;
      quadZ9 = 570;
    }
  }
}
