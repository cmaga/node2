let fs = require('fs');

let myArgs = process.argv.slice(2);

if (myArgs.length === 0) {
	console.log("no argument provided");
} else {
	const path = "./" + myArgs[0];
	
	//check if file exists
	fs.access(path, fs.F_OK, (err) => {
		if (err) {
			console.error("Creating file and writing...");
			fs.appendFile(myArgs[0], 'You are awesome', function(error) {
				if (error) throw error;

				console.log('Writing done.');
			});
			return;
		}
		//file exists
		console.log("File already exists please enter a new name");
	})
}
