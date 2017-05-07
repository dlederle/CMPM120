var game;
var cursors;
var star, diamond, poo, leaf;

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
		game.load.image('leaf', '../assets/img/leaf.png');
		game.load.image('poo', '../assets/img/poo.png');
	},
	create: function() {
		// set stage color
		game.stage.setBackgroundColor('#333');

		// set world bounds to bg image (nebula) size
		game.world.setBounds(0, 0, 2560, 1440);

		// add bg image
		game.add.image(0, 0, 'nebula');

		// setup objects to follow
		star = game.add.sprite(game.world.randomX, game.world.randomY, 'star');
		poo = game.add.sprite(game.world.randomX, game.world.randomY, 'poo');
		leaf = game.add.sprite(game.world.randomX, game.world.randomY, 'leaf');
		diamond = game.add.sprite(game.world.randomX, game.world.randomY, 'diamond');

		// initially set camera to star
		game.camera.follow(star, Phaser.Camera.FOLLOW_TOPDOWN);

		// debug info
		console.log(game.stage);
		console.log(game.world);
		console.log(game.camera);

		// setup cursor control
		cursors = game.input.keyboard.createCursorKeys();
	},
	update: function() {
		// snap camera to different actors
		if (cursors.up.isDown) {
	        game.camera.follow(diamond, Phaser.Camera.FOLLOW_TOPDOWN, 0.1, 0.1);
	    }
	    else if (cursors.down.isDown) {
	        game.camera.follow(star, Phaser.Camera.FOLLOW_TOPDOWN, 0.5, 0.5);
	    }

	    if (cursors.left.isDown) {
	        game.camera.follow(poo, Phaser.Camera.FOLLOW_TOPDOWN, 0.25, 0.25);
	    }
	    else if (cursors.right.isDown) {
	        game.camera.follow(leaf, Phaser.Camera.FOLLOW_TOPDOWN, 1, 1);
	    }
	},
	render: function() {
		// display some debug info
		game.debug.cameraInfo(game.camera, 32, 32);
		//game.debug.spriteInfo(star, 32, game.height - 80);
	}
};




