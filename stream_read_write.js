var Readable=require('stream').Readable
var Writable=require('stream').Writable

var readStream=new Readable()
var writeStream=new Writable()

readStream.push('I')
readStream.push('love')
readStream.push('you')
readStream.push(null)

//加下划线是私有方法
writeStream._write=function(chunk,encode,cb){
	console.log(chunk.toString())
	cb()
}

readStream.pipe(writeStream)