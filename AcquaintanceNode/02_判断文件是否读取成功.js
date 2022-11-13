const fs = require('fs')

fs.readFile('./files/11.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }

    console.log('读取文件成功！', dataStr);
})
//读取文件失败！ENOENT: no such file or directory, open 'e:\web-study\NodeLearning\AcquaintanceNode\files\11.txt'

fs.readFile('./files/1.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }

    console.log('读取文件成功！', dataStr);
})
//读取文件成功！ 2022年11月13日