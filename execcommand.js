var execSync;

//Seeing whether the required dependencies are installed
try {
	execSync = require("execsync");
}
catch (exception) {
	//Setting to null, to stop further execution
	execSync = null;
}


// Executing the code in the statement below if the dependencies are found
if (execSync !== null)
{
	module.exports = function(command) {
		// Using execsync module as an exception, until child_process.execSync()
		// arrives in node v0.12.x
		var result;
		try {
			result = execSync(command);
			
			var end = result.lastIndexOf("\n"); // Removing last nextline character
			if (end > 0 && end !== null) { // Null check for result content that is null
				result  = result.slice(0, end);
			}
			return result;
		}
		catch (exception) {
			console.error(exception);
			return exception;
		}
	};
}
else {
	console.log("The required dependencies are not installed!");
	console.log("execsync: %s", execSync !== null ? "Installed" : "NOT INSTALLED");
}
