var request = require('request');
var fs = require('fs');

/*
* url 网络文件地址
* fileName 文件名
* callback 回调函数
*/
function downloadFile(uri,fileName,callback){
    var stream = fs.createWriteStream("G:\\study\\NodeJS\\AudioDownload\\audio\\"+fileName);
    request(uri).pipe(stream).on('close', callback); 
}

var fileUrl  = 'http://mp3.en8848.com/xiaoxue/pep-rj3/rjb33a-201409/{fileName}';
var fileName = 'unit';
// 文件类型 
var fileType = ["mp3","lrc"];
var filePrefix = ["1","1a","1b","1c","1-words","1-expressions","2","2a","2b","2c",'2-words','2-expressions','3','3a','3b','3c','3-words','3-expressions','4','4a','4b','4c','4-words','4-expressions','5','5a','5b','5c','5-words','5-expressions','6','6a','6b','6c','6-words','6-expressions'];

for(var i=0;i<filePrefix.length;i++) {
	for(var j=0;j<fileType.length;j++) {
		fileName = fileName + filePrefix[i] + "."+fileType[j];
		var audioUrl = fileUrl.replace("{fileName}",fileName);
		console.log(audioUrl);
		downloadFile(audioUrl,fileName,function(){
			console.log(fileName+'下载完毕');
		});
		fileName = 'unit';
	}
}