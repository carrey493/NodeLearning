const fs = require('fs')

fs.readFile('./files/3.txt', 'utf-8', function (err, dataStr) {
    if (err) {
        return console.log('读取文件失败!', err.message);
    }
    console.log('读取文件成功！' + dataStr);

    /* 
    先把成绩的数据按照空格进行分割
    循环分割后的数据，对每一项数据进行字符串的替换操作
    把数据中的每一项进行合并得到一个新的字符串
    调用fs.writeFile方法 把处理完毕的成绩写到新的文件中
    */
    const arrOld = dataStr.split(' ')
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
    console.log(newStr);
    fs.writeFile('./files/4.txt', newStr, function (err) {
        if (err) {
            return console.log('写入文件夹失败！', err.message);
        }
        console.log('成绩写入成功');
    })
})