//1.导入fs模块
const fs = require('fs')

//2.调用fs.readFile()方法读取文件
/* 
参数1：读取文件的存放路径
参数2：读取文件的编码格式，一般指定 utf8
参数3：回调函数，拿到读取失败和成功的结果 err dataStr
 */

fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
    //打印失败的结果
    console.log(err);//如果读取成功则err的值为null 如果读取失败则打印错误信息
    console.log('------');
    //打印成功的结果
    console.log(dataStr);//如果读取失败则dataStr为undefined
})
/* 
null
------
2022年11月13日 
*/
