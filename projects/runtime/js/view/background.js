(function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var backgroundBox;
        var buildings = [];
        

        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        var circles = [];

        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            background.removeAllChildren();
            // TODO: 3 - YOUR DRAW CODE GOES HERE
            var circle;
            for(var i=0;i<200;i++) {
                var width = Math.random();
                var height = Math.random();
                
                var fill = (Math.random() > 0.5) ? '#FAFA00' : 'white';
                circle = draw.circle(width,fill,fill,height);
                circle.x = canvasWidth*Math.random();
                circle.y = canvasHeight*Math.random();
                background.addChild(circle);
                circles.push(circle);
            }
            var moon = draw.bitmap('img/saturn.png');
            moon.x = 700;
            moon.y = 150;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            background.addChild(moon);
            

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            //var backgroundFill = draw.rect(canvasWidth,canvasHeight,'darkblue');
            //background.addChild(backgroundFill);
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            backgroundBox.x = backgroundBox.x - 1;
            //background.x = background.x - 0.1;
            if(backgroundBox.x < -100) {
            backgroundBox.x = canvasWidth;
            }

            //}
            
            for (i in circles) {
                var thisCircle = circles[i];
                if (thisCircle.x < -2) {
                    thisCircle.x = canvasWidth;
                } else {
                   thisCircle.x = thisCircle.x - 0.15; 
                }  
            }
            
            //for (building in buildings) {
              //  buildings[building].x = buildings[building].x - 1
            //}
        }
        

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        backgroundBox = draw.rect(100,100,'Blue');
        backgroundBox.x = 500;
        backgroundBox.y = 222;
        //background.addChild(backgroundBox);
        var buildingHeight = 300;
        var groundY = 322;
        for(var i=0;i<5;++i) {
                   //var building;

            //building = draw.rect(75,buildingHeight,'LightGray','Black',1);
            //building.x = 200*i;
           //building.y = groundY - buildingHeight;
            //background.addChild(building);
            //buildings.push(building);
        }
        return background;
        
        
    };
}(window));