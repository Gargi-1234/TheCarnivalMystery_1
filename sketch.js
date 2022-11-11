var waitimg

var gameState="wait"




function preload(){
waitimg=loadImage("assets/SplashScreen.gif")

}


function setup(){
createCanvas(windowWidth,windowHeight)

// play=createImg(name of the image file)
play=createButton("Input")
play.position(width/2,height-height/4)

about=createButton("about")
about.position(width/2-100,height-height/4)

home=createButton("how")
home.position(width/2+100,height-height/4)
home.hide()

// back=createButton("Back")
// back.position(width/2,height-height/5)
// back.hide()


}



function draw(){

    if(gameState=="wait"){
background(waitimg)
}

if (play.mousePressed(() => {
    gameState = "level1"

}))

if (home.mousePressed(() => {
    gameState = "wait"

}))

if (gameState==="level1"){
    background(0)
    
    play.hide()
    home.show()
    about.hide()
}

}



