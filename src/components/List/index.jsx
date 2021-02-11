import React,{Component} from 'react'

import './index.css'

export default class List extends React.Component{
    render(){
        let {todos} = this.props;
        return (
            <div className="main">
                <ul className="todo-list">
                    {todos.map(todo=>{
                        return (<li key={todo.id} className={todo.done ? 'completed' : '' } onDoubleClick={this.handleEdit}>
                            <div className="view">
                                <input type="checkbox" className="toggle" checked={todo.done} onChange={this.handleCheck(todo.id)}/>
                                <label>{todo.title}</label>
                                <button className="destroy" onClick={this.handleDelete(todo.id)}>x</button>
                            </div>
                            {/* <input type="text" className="edit" defaultValue={todo.title} ref={evt => this.edit = evt}/> */}
                        </li>)
                    })}
                </ul>
            </div>
        )
    }
    edit = ()=>{
        
    }

    // 事件
    handleCheck = (id)=>{
        return (event)=>{
            let {updateTodo} = this.props
            updateTodo(id,event.target.checked)
        }
    }
    // 删除
    handleDelete = (id)=>{
        return (event)=>{
            event.stopPropagation()
            let {deleteTodo} = this.props
            deleteTodo(id)
        }
    }
}