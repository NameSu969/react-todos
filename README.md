## npm start 启动项目

## todos项目知识点
1、拆分组件、实现动态化组件
2、将某些组件的共同state放到父组件（官方称此作为：状态提升）
3、实现组件父子之间通信：
    3.1 【父组件】给【子组件】通过props传递数据
    3.2 【子组件】更新或修改【父组件】state，前提是父组件传递的是一个函数，子组件再调用传递的函数完成操作
4、defaultChecked和checked的区别：
    defaultChecked：只有在第一次时执行，再次更新不会执行
    checked：跟随依赖更新，但要求搭配onChange事件
5、state状态放在谁身上，就由谁来操作状态
    利用本地存储，缓存todo，由于setState是异步执行，需要配合ES6 async才能正确缓存数据