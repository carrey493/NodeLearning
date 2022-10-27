# 初识Node

**学习目标**

- 能够知道什么是Node.js
- 能够知道Node.js可以做什么
- 能够说出Node.js 中的JavaScript的组成部分
- 能够使用fs模块读写操作文件
- 能够使用path模块处理路径
- 能够使用http模块写一个基本的web 服务器

**学习目录**

- 初识Node.js
- fs文件系统模块
- path路径模块
- http模块

## 一. 初识Node.js

### 1. 回顾与思考

1.已经掌握的技术
- HTML
- CSS
- JavaScript

2.浏览器中的JavaScript的组成部分

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028002717029-838952518.png)

3.为什么JavaScript可以在浏览器中执行

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028002813229-2108827400.png)

不同的浏览器使用不同的JAcaScripr解析引擎

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028002926301-339774684.png)

4.为什么JavaScript可以操作DOM和BOM

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028003228980-304067726.png)

每个浏览器都`内置`了DOM、BOM这样的API函数，因此，浏览器中的JavaScript才可以调用它们。

5.浏览器中的JavaScript运行环境

`运行环境`是指****代码正常运行所需的必要环境。**

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028003604467-8109644.png)

- v8引擎负责解析和执行JavaScript 代码。
- 内置API是由`运行环境`提供的特殊接口，`只能在所属的运行环境中被调用`。

6.思考:JavaScript能否做后端开发

![](https://img2022.cnblogs.com/blog/2332774/202210/2332774-20221028003919537-2038072318.png)

JavaScript也可以做后端开发但需要借助Node.js的开发环境。
