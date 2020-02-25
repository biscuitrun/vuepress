# 单元测试

**Jest** 是一个由 Facebook 开发的测试运行器，致力于提供一个“bettery-included”单元测试解决方案。你可以在其[官方文档](https://jestjs.io/) 

（中文文档）https://jestjs.io/zh-Hans/学习到更多 Jest 的知识。

## 安装 Jest

```
npm install --save-dev jest @vue/test-utils
```

然后我们需要在 package.json 中定义一个单元测试的脚本。

```
// package.json
{
 "scripts": {
  "test": "jest"
 }
}

```

## 更多配置-在 Jest 中处理单文件组件（vue, typescript, tsx, jsx等）

vue为例：为了告诉 Jest 如何处理 *.vue 文件，我们需要安装和配置 vue-jest 预处理器：

```
npm install --save-dev vue-jest
```

在 package.json 中创建一个 jest 块：

```
{
  // ...
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "ts",
      "tsx"
      // 告诉 Jest 处理 `*.vue` 文件
      "vue"
    ],
    "transform": {
      // 用 `vue-jest` 处理 `*.vue` 文件
      ".*\\.(vue)$": "vue-jest",
      // 用 `ts-jest` 处理 `*.ts` 文件
      "^.+\\.tsx?$": "ts-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-             transform-stub"
    },
    "testURL": "http://localhost/",
    "collectCoverageFrom": [
      "**/*.{vue,ts}",
      "!**/node_modules/**",
      "!**/*.d.ts"
    ]
  }
}
```

## 更多配置-支持ES6语法

```
npm install -D jest babel-jest babel-core babel-preset-env regenerator-runtime
```

babel-jest、 regenerator-runtime这几个依赖是为了让我们可以使用ES6的语法特性进行单元测试，ES6提供的 import 来导入模块的方式，Jest本身是不支持的。

## 添加 .babelrc 文件

在项目的根目录下添加.babelrc文件，并在文件复制如下内容:

```
{
  "presets": ["es2015", "env"]
}
```

## 编写你的第一个Jest测试

- 在src目录下添加functions.js文件
- 创建test目录，并在test目录下创建functions.test.js文件

**测试文件的文件名 = 被测试模块名 +** **.test.js**

在src/functions.js中创建被测试的模块


```
export default {
  sum(a, b) {
    return a + b;
  }}
```

在test/functions.test.js文件中创建测试用例

```
"use strict"

import functions  from '../src/functions';
test('sum(2 + 2) 等于 4', () => {
  expect(functions.sum(2, 2)).toBe(4);
})
```

**运行**

```
npm test
```

## 常用的几个Jest断言

1. .toBe函数即为一个匹配器 ,toBe使用 === 来测试全等于，如果我们想检查一个对象object中的值，使用toEqual来替代，toEqual递归遍历检查对象或数组里的每一个领域

   ```
   expect(functions.sum(2, 2)).toBe(5);
   ```

2. .not修饰符允许你测试结果不等于某个值的情况

   ```
   expect(functions.sum(2, 2)).not.toBe(5);
   ```

3. .toEqual匹配器会递归的检查对象所有属性和属性值是否相等，所以如果要进行应用类型的比较时，请使用.toEqual匹配器而不是.toBe。

   ````
   test('getAuthor()返回的对象深度相等', () => {
     expect(functions.getAuthor()).toEqual(functions.getAuthor());
   })
   test('getAuthor()返回的对象内存地址不同', () => {
     expect(functions.getAuthor()).not.toBe(functions.getAuthor());
   })
   ````

4. .toHaveLength可以很方便的用来测试字符串和数组类型的长度是否满足预期

   ```
   expect(functions.getIntArray(3)).toHaveLength(3);
   ```

5. .toThorw可能够让我们测试被测试方法是否按照预期抛出异常，但是在使用时需要注意的是：**我们必须使用一个函数将将被测试的函数做一个包装**

   ```js
   test('getIntArray(3.3)应该抛出错误', () => {
     function getIntArrayWrapFn() {
       functions.getIntArray(3.3);
     }
     expect(getIntArrayWrapFn).toThrow('"getIntArray"只接受整数类型的参数');})
   ```

6.  .toMatch传入一个正则表达式，它允许我们用来进行字符串类型的正则匹配。

   ```js
   expect(functions.getAuthor().name).toMatch(/li/i);
   ```

7. 使用.toContain对数组内的特定项进行匹配测试

   ```
   let shoppingList = ['diapers','beer']
   test('the shopping list has beer on it', () => {
       expect(shoppingList).toContain('beer');
   });
   ```

8. 测试异步函数（axios接口）

   - 如果我们的代码中使用到了Promises ，那我们就在测试中返回一个promise，Jest会等待这个promise解析完成用调用then()获取数据

     **.then()/.catch()**

     ```js
     test('fetchUser() 可以请求到一个含有name属性值为Leanne Graham的对象', () => {
       expect.assertions(1);
       return fetchUser()
         .then(data => {
           expect(data.name).toBe('Leanne Graham');
         });
     })
     test('the fetch fails with an error', () => {
       expect.assertions(1)
       return fetchError().catch(e => expect(e).toMatch('error'))
     })
     ```

     上面我们调用了expect.assertions(1)，它能确保在异步的测试用例中，有一个断言会在回调函数中被执行

     **.resolves/.rejects**

     ```js
     test('the fetch fails with an error', () => {
       expect.assertions(1)
       return fetchError().resolves.toBe('Leanne Graham')
     })
     test('the fetch fails with an error', () => {
       expect.assertions(1)
       return fetchError().rejects.toMatch('error')
     })
     ```

   - 若为普通异步函数，需使用一个参数为done的回调参数，而不是放置一个空参数，Jest要等到done被调用后才会结束此次测试。

     ```js
     test('the data is uyun', done => {
         function callback(data) {
             expect(data.name).toBe('Leanne Graham');
             done();
         }
        fetchUser(callback);
     });
     ```

     **使用async和await精简异步代码**

     ```js
     test('fetchUser() 可以请求到一个用户名字为Leanne Graham', async () => {
       expect.assertions(1);
       const data =  await fetchUser();
       expect(data.name).toBe('Leanne Graham')
     })
     ```

     **使用try和catch对异常进行捕获**

     ```js
     test('async: the fetch fails with an error', async () => {
       expect.assertions(1)
       try {
         await fetchError()
       } catch (e) {
         expect(e).toMatch('error')
       }
     })
     ```

9. 其他

   - toBe 使用 [Object.is](https://link.juejin.im/?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FGlobal_Objects%2FObject%2Fis) 判断是否严格相等。
   - toEqual 递归检查对象或数组的每个字段。
   - toBeNull 只匹配 null。
   - toBeUndefined 只匹配 undefined。
   - toBeDefined 只匹配非 undefined。
   - toBeTruthy 只匹配真。
   - toBeFalsy 只匹配假。
   - toBeGreaterThan 实际值大于期望。
   - toBeGreaterThanOrEqual 实际值大于或等于期望值
   - toBeLessThan 实际值小于期望值。
   - toBeLessThanOrEqual 实际值小于或等于期望值。
   - toBeCloseTo 比较浮点数的值，避免误差。
   - toMatch 正则匹配。
   - toContain 判断数组中是否包含指定项。
   - .toHaveProperty(keyPath, value) 判断对象中是否包含指定属性。
   - toThrow 判断是否抛出指定的异常。
   - toBeInstanceOf 判断对象是否是某个类的实例，底层使用 instanceof。