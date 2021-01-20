
var readline = require('readline');
var fs = require('fs');
var os = require('os');
 
var fReadName = './config.txt';

var fRead = fs.createReadStream(fReadName);

 
 
var objReadline = readline.createInterface({
	input: fRead,
});
 
 
var index = 1;
objReadline.on('line', (line)=>{
	var tmp = 'line' + index.toString() + ':' + line;
	console.log(index, line);
	index ++;
});
 
objReadline.on('close', ()=>{
    console.log('readline close...');
});
