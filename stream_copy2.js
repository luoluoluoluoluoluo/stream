var fs=require('fs')

// buffer用来保存原始数据。流用来暂存和移动数据。
// 流里面传递，是以buffer来传递的。
// 如果只用buffer的话，当请求太多的时候，有可能一下子就把内存用完了。
// 所以要利用流边读边写。
var readStream=fs.createReadStream('1.mp4')
var writeStream=fs.createWriteStream('1_copy.mp4')

readStream.on('data',function(chunk){
	//读的速度比写的速度快 一部分chunk无法写入 放入缓存 判断缓冲区时候还有数据
	if(writeStream.write(chunk)===false){
		console.log('still cached')
		readStream.pause()
	}
})
readStream.on('end',function(){
	writeStream.end()
})

writeStream.on('drain',function(){
	console.log('data drains')
	readStream.resume()
})