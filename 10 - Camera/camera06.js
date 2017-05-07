var game;
var cursors;
var player, healthbar;

window.onload = function() {
	game = new Phaser.Game(800, 600, Phaser.AUTO);
	game.state.add('Play', Play);
	game.state.start('Play');
}

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		game.load.image('nebula', '../assets/img/nebula.jpeg');
		game.load.image('diamond', '../assets/img/diamond.png');
		game.load.image('star', '../assets/img/star.png');
		game.load.image('healthbar', '../assets/img/healthbar.png');
	},
	create: function() {
		// set stage color
		game.stage.setBackgroundColor('#333');

		// set world bounds to bg image (nebula) size
		game.world.setBounds(0, 0, 2560, 1440);

		// add bg image
		game.add.image(0, 0, 'nebula');

		// setup player
		player = game.add.sprite(game.world.centerX, game.world.centerY, 'star');
		player.anchor.x = 0.5;
		player.anchor.y = 1;	
		game.camera.follow(player, null, 0.1, 0.1);

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
		// player movement
		if (cursors.up.isDown) {
	        player.y -= 5;
	    }
	    else if (cursors.down.isDown) {
	        player.y += 5;
	    }

	    if (cursors.left.isDown) {
	        player.x -= 5;
	    }
	    else if (cursors.right.isDown) {
	        player.x += 5;
	    }
	},
	render: function() {
		// display some debug info
		//game.debug.cameraInfo(game.camera, 32, 32);
		//game.debug.spriteInfo(player, 32, game.height - 80);
		//game.debug.rectangle({x:game.camera.deadzone.x, y:game.camera.deadzone.y, width:game.camera.deadzone.width, height:game.camera.deadzone.height});
	}
};




