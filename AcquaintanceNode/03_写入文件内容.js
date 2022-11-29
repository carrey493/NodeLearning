//1.导入fs模块
const fs = require('fs')

//2．调用fs.writeFile()方法，写入文件的内容
/* 
参数1：表示文件的存放路径
参数2：表示要写入的内容
参数3：回调函数
*/
fs.writeFile('./files/2.txt', '2022/11/29', function (err) {
    /* 
    2.1如果文件写入成功，则err返回null
    2.2如果文件写入失败，则err的值等于一个错误对象
     */
    console.log(err);
})
