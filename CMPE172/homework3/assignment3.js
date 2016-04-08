//var program = require( 'commander' ); //need this for 

var filestream = require('filestream');
var inputText = filestream.createReadStream('./input.txt');
var Transform = require('stream').Transform;
var util = require(	"util" ).inherits;

function PatternMatch(programParams)
{

	splitPattern = programParams.pattern;
	Transform.call( this, {objectMode:true} ); // calls
	this._inputBuffer = "";
}

PatternMatch.prototype._transform = function(chunk, encoding, done)
{
	console.log("---input----"); //print input file header to console
	var entry = chunk.toString()
	console.log(entry); //print input file



	if(this._lastLineData)
	{
		entry = this._lastLineData +_entry; //handles edge case of last line
	}

	console.log("---output----"); //print output header to console
	var output = entry.split(splitPattern);
	console.log(entry); //print output to console

	/*This splices the entries based upon the entry length*/
	this._lineLinedata = entry.splice(entry.length-1, 1)[0]; 
	lines.forEach(this.push.bind(this)); //
	done(); 

	

}

PatternMatch.prototype._flush = function(done)
{
	if(this._lastLineData)
	{
		this.push(this._lastLineData);
	}

	this._lastLineData = null;
	done();
}

program.option('-p, --pattern <patter>','enter "paterns" to split like: , or .').parse(process.argv);

var patternStream = inputText.pipe(new PatternMatch(program));
//patternStream.on('readable', function(){ }); 