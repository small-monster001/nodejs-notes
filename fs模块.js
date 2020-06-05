const fs=require('fs')
// 增加目录
// fs.mkdir("node01",err=>{
//   console.log(err);
// })
//删除目录
// fs.rmdir("node01",err=>{
//   console.log(err)
// })
//改变目录
// fs.rename("node01","111",err=>{
//   console.log(err)
// })
//查找目录
// fs.readdir("../nodejsNotes",(err, data)=>{
//   console.log(err,data);
// })

//对文件的操作
//写入文件内容(会覆盖)
// fs.writeFile("./111/1.txt","我是被覆盖的内容",err=>{
//   console.log(err)
// })
//删除文件
// fs.unlink("./111/1.txt",err=>{
//   console.log(err)
// })
//改变文件
// fs.appendFile("./111/1.txt","我是追加的内容",err=>{
//   console.log(err)
// })
//读取文件内容
fs.readFile("./111/1.txt","utf8",(err,data)=>{
  console.log(data)
})