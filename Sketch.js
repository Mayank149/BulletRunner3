//Defining global variables
var player; // pc
var gangster, pedestrian; //NPC
var rock, spikes, bullets; //Obstacles
var soda, HP, sheild, bullets_bunch ; //Collectables
var wall1, wall2; //making invisible walls
var textBox;

//making essential score and bullet number showcase
var bullets_available = 5;

var gamestate = 0;

//Variables for images
var playerimg, gangsterimg, rockimg, pedestrianimg, spikesimg, sodaimg, hpimg, sheildimg, bulletsimg, bg;
var bunchimg

function preload() {

    bg = loadImage("Images/background.png");
    playerimg = loadImage("Images/player.png");
    gangsterimg = loadImage("Images/gangster.png");
    hpimg = loadImage("Images/heart.png");
    pedestrianimg = loadImage("Images/npc.png");
    rockimg = loadImage("Images/rock.png");
    spikesimg = loadImage("Images/spikes.png");
    sodaimg = loadImage("Images/sodacan.png");
    sheildimg = loadImage("Images/sheild.png");
    bulletsimg = loadImage("Images/bullet.png");
    bunchimg = loadImage("Images/bulletbunch.png")


}
function setup() {

    createCanvas(displayWidth - 20, displayHeight - 50);
    player = createSprite(300, displayHeight / 2 - 60, 20, 20);
    player.addImage(playerimg);
    player.scale = 0.25;

    wall1 = createSprite(displayWidth / 2 - 200, displayHeight / 2 - 270, 1000, 10);
    wall2 = createSprite(displayWidth / 2 - 200, displayHeight - 180, 1000, 10);
    wall1.visible = false;
    wall2.visible = false;

    textBox = createSprite(displayWidth / 2 + 230, displayHeight / 3 - 20, 500, 50);
    textBox.visible = false;
    textBox.shapeColor = "blue";

    //player.debug = true;
    player.setCollider("rectangle", 0, 0, 200, 500);



}

function draw() {
    background(bg);
    drawSprites();

    player.collide(wall1);
    player.collide(wall2);

    if (gamestate == 0) {
        textBox.visible = true;
        fill("red");
        textSize(50);
        text("Press Enter To Start!", displayWidth / 2, displayHeight / 3);


    }

    if (keyWentDown("enter") && gamestate == 0) {
        gamestate = 1;
        textBox.visible = false;
    }


    if (gamestate == 1) {

        rockSpwan();
        sodaSpwan();
        spikeSpwan();
        shieldSpwan();
        bulletSpwan();
        HPSpwan();

        fill("red");
        textSize(30);
        text("Available Bullets:- "+bullets_available, 300, 100);
        textbox1 = createSprite(450,100,350,50);
        textbox1.shapeColor = "blue";


        //console.log(player.y)

        if (keyIsDown(UP_ARROW)) {
            player.y = player.y - 7;
        }
        if (keyIsDown(DOWN_ARROW)) {
            player.y = player.y + 7;
        }

        if(keyWentDown("SPACE") && bullets_available >=1){
            bullets = createSprite(player.x+5 ,player.y,10,10);
            bullets.addImage(bulletsimg);
            bullets.scale = 0.3;
            bullets.velocityX = 18;
        }
    }





}

function rockSpwan() {

    if (frameCount % 180 == 0) {
        rock = createSprite(player.x + 1000, random(170, 500), 20, 20);
        rock.addImage(rockimg);
        rock.scale = random(0.1, 0.35);
        rock.velocityX = -9;
    }

}
function sodaSpwan() {

    if (frameCount % 700 == 0) {
        soda = createSprite(player.x + 1000, random(170, 500), 20, 20);
        soda.addImage(sodaimg);
        soda.scale = 0.1;
        soda.velocityX = -9;
    }


}
function shieldSpwan() {

    if (frameCount % 890 == 0) {
        sheild = createSprite(player.x + 1000, random(170, 500), 20, 20);
        sheild.addImage(sheildimg);
        sheild.scale = 0.1;
        sheild.velocityX = -9;
    }
}


function spikeSpwan() {

    if (frameCount % 330 == 0) {
        spikes = createSprite(player.x + 1000, random(170, 500), 20, 20);
        spikes.addImage(spikesimg);
        spikes.scale = random(0.15, 0.35);
        spikes.velocityX = -9;
    }

}

function HPSpwan() {

    if (frameCount % 1250 == 0) {
        HP = createSprite(player.x + 1000, random(170, 500), 20, 20);
        HP.addImage(hpimg);
        HP.scale = 0.1;
        HP.velocityX = -9;
    }
}
function bulletSpwan() {

    if (frameCount % 620 == 0) {
        bullets_bunch = createSprite(player.x + 1000, random(170, 500), 20, 20);
        bullets_bunch.addImage(bunchimg);
        bullets_bunch.scale = 0.15;
        bullets_bunch.velocityX = -9;
    }
}

