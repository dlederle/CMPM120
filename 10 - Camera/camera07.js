var game;
var cursors;
var healthbar;

window.onload = function() {
	game = new Phaser.Game(800, 600, Phaser.AUTO);
	game.state.add('Play', Play);
	game.state.start('Play');
}

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		game.load.image('number_bg', '../assets/img/number_bg.png');
		game.load.image('diamond', '../assets/img/diamond.png');
		game.load.image('healthbar', '../assets/img/healthbar.png');
	},
	create: function() {
		// set stage color
		game.stage.setBackgroundColor('#333');

		// set world bounds to bg image (number_bg) size
		game.world.setBounds(0, 0, 2400, 1800);

		// add bg image
		game.add.image(0, 0, 'number_bg');	

		// populate game with 50 random diamond sprites
		for(let i=0; i<50; i++) {
			game.add.sprite(game.world.randomX, game.world.randomY, 'diamond');
		}

		// setup health bar
		healthbar = game.add.sprite(32, 32, 'healthbar');
		healthbar.fixedToCamera = true;	// attach it to the camera

		// debug info
		console.log(game.stage);
		console.log(game.world);
		console.log(game.camera);
		console.log(game.camera.deadzone);

		// setup cursor control
		cursors = game.input.keyboard.createCursorKeys();
	},
	update: function() {
		// camera movement by 'frame'
		if (cursors.up.justPressed()) {
	        game.camera.y -= 600;
	    }
	    else if (cursors.down.justPressed()) {
	        game.camera.y += 600;
	    }

	    if (cursors.left.justPressed()) {
	        game.camera.x -= 800;
	    }
	    else if (cursors.right.justPressed()) {
	        game.camera.x += 800;
	    }
	},
	render: function() {
		// display some debug info
		//game.debug.cameraInfo(game.camera, 32, 32);
		//game.debug.spriteInfo(player, 32, game.height - 80);
		//game.debug.rectangle({x:game.camera.deadzone.x, y:game.camera.deadzone.y, width:game.camera.deadzone.width, height:game.camera.deadzone.height});
	}
};




