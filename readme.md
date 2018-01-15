# 基于 express + mongoose 的api 练习

## 运行方式
1. 检查 config/default.json 中参数配置是否正确
2. 在命令行中执行如下命令
   ```bash
   npm start
   ```

3. 在浏览器中测试 http://localhost:3000
4. 在浏览器中测试 http://localhost:3000/items 


## 练习要求

**重要：本题包含四个篇目：基础，进阶，提高，出栈，做完一个篇目后，需要到 https://jinshuju.net/f/27Zpwx 提交做题记录**

### 基础篇
1. 创建model: item 完成下列接口

   ```
   GET /items # 获取全部item
   GET /items/:id	# 获取一个item
   POST /items #增加一个item
   DELETE /items/:id # 删除一个item
   PUT /items/:id	# 更新一个item
   ```

2. 创建Model: category，category 与 item 为一对多关系，并参照上面完成相应接口

3. 创建Model: cart，cart 与 item 为多对多关系，并参照上面完成相应接口

### 进阶篇
1. 自己编写刷数据库脚本创建上述数据库，并完成功能
2. 用 supertest + mocha 完成上述接口的集成测试
3. 用 inspector 调试功能解决问题

### 提升篇
1. 创建Model: user, 可以实现用户的注册和登录功能,user和cart是一对一的关系

2. 写一个中间件,实现如下功能
   ```
   - 没有登录的用户只能访问 GET 类型接口
   - 登录的用户可以访问所有接口
   - 用户只能访问自己的 cart
   ```

3. 从一个空库开始完成上述过程

4. 提出一个合理需求，要求用到 discriminator/populate/unwind，并完成之

### 出栈篇
待定。。。




### 问题与发现
1. 为什么在routers/items.js里，根路由就是'/items'?  答案：在router/index.js里路由中间件的使用
2. findById(itemId,callback),itemId的格式必须是mongoId格式(如：51bb793aca2ab77a3200000d)
3. 将数据库的控制跟路由逻辑分隔开

4. 注意如何修改测试脚本： "test": "mocha --require babel-register --recursive"
5. 注意在测试代码里导出app

6. require与import混用了，哪一种解决方式好，既然用了babel，全部换成es6写法？
7. api测试怎样写算是最佳实践，零散单元测试怎么整合

8. 数据库关联操作怎么测试？比如：item跟category是一对多的关系，item中的增加删除会影响category，怎么测试出category的变化