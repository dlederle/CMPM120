var game;
var cursors;

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
	},
	create: function() {
		// set stage color
		game.stage.setBackgroundColor('#333');

		// set world bounds to bg image (nebula) size
		game.world.setBounds(0, 0, 2560, 1440);

		// add bg image
		game.add.image(0, 0, 'nebula');

		// populate game with 50 random diamond sprites
		for(let i=0; i<50; i++) {
			game.add.sprite(game.world.randomX, game.world.randomY, 'diamond');
		}

		// debug info
		console.log(game.stage);
		console.log(game.world);
		console.log(game.camera);
		console.log(game.stage.getLocalBounds());

		// setup cursor control
		cursors = game.input.keyboard.createCursorKeys();
	},
	update: function() {
		// direct camera movement
		if (cursors.up.isDown) {
	        game.camera.y -= 25;
	    }
	    else if (cursors.down.isDown) {
	        game.camera.y += 25;
	    }

	    if (cursors.left.isDown) {
	        game.camera.x -= 25;
	    }
	    else if (cursors.right.isDown) {
	        game.camera.x += 25;
	    }
	},
	render: function() {
		game.debug.cameraInfo(game.camera, 32, 32);
		//game.debug.rectangle({x:game.camera.bounds.x, y:game.camera.bounds.y, width:game.camera.bounds.width, height:game.camera.bounds.height});
	}
};




