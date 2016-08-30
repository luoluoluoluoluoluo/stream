var http=require('http')
var fs=require('fs')
var request=require('request')//npm install request

http
	.createServer(function(req,res){
		//方法一：
		// fs.readFile('../buffer/logo.png',function(err,data){
		// 	if(err){
		// 		res.end('file not exist')
		// 	}else{
		// 		res.writeHeader(200,{'Context-type':'text/html'})
		// 		res.end(data)
		// 	}
		// })

		// 方法二
		// fs.createReadStream('../buffer/logo.png').pipe(res)

		// 方法三
		request('http://static.mukewang.com/static/img/index/logo.png')
			.pipe(res)
	})
	.listen(8090)