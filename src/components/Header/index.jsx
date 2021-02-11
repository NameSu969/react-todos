import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    render() {
        let {todos} = this.props
        let doneCount = todos.reduce((prev,current)=> prev + (current.done ? 1 : 0),0)
        return (
            <div className="header">
                <input type="checkbox" className="toggle-all" checked={todos.length === doneCount && todos.length>0} onChange={this.handleChange} id="toggle-all"/>
                <label htmlFor="toggle-all"style={{display : todos.length ? 'block' : 'none'}}></label>
                <input type="text" className="ipt" placeholder="输入您的待办事件" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
    // 事件  
    handleKeyUp = (event)=>{
        if(event.keyCode !== 13) return
        if(event.target.value.trim() === '') return
        let {value} = event.target
        let {addTodo} = this.props
        // 生成数据对象
        let obj = { id: nanoid(),title:value,done: false }
        // 调用app组件的函数并且传参
        addTodo(obj);
        event.target.value = '';
    }
    handleChange = (evt)=>{
        let c = evt.target.checked
        this.props.selectAll(c)
    }
}
