import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  state = {
    todos: JSON.parse(window.localStorage.getItem('todos')) || [],
    tag: 1,
  }
  filterTodo = []
  render() {
    let {todos,tag} = this.state;
    return (
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} todos = {todos} selectAll={this.selectAll}/>
          <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
          {todos.length>0 && <Footer todos={todos} checkClearAllDone={this.checkClearAllDone}/>}
        </div>
    )
  }

  // 添加todo
  addTodo = async (todoObj)=>{
    let {todos,tag} = this.state
    let newTodos = [todoObj,...todos];
    await this.setState({
      todos: newTodos
    })
    // 缓存本地
    window.localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
  // 更新todo
  updateTodo = async (id,flag)=>{
    let {todos} = this.state
    let newTodos = todos.map(todoObj=>{
      if(todoObj.id === id) return {...todoObj,done: flag}
      else return todoObj
    })
    await this.setState({
      todos: newTodos
    })
    
    // 缓存本地
    window.localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
  // 删除todo
  deleteTodo = async id=>{
    let {todos} = this.state
    let newTodo = todos.filter(todo=>{
      if(todo.id !== id) return todo
    })
    await this.setState({
      todos: newTodo
    })
    // 缓存本地
    window.localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
  // 全选
  selectAll = async flag =>{
    let {todos} = this.state
    let newTodo = todos.map(todo=>{
      return {...todo,done:flag}
    })
    await this.setState({
      todos: newTodo
    })
    // 缓存本地
    window.localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
  // 删除已完成
  checkClearAllDone = async ()=>{
    let {todos} = this.state
    let newTodos = todos.filter(todo=> !todo.done)
    await this.setState({
      todos: newTodos
    })
    
    // 缓存本地
    window.localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }
}
