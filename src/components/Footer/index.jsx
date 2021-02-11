import React,{Component} from 'react'

import './index.css'

export default class Footer extends React.Component{
    render(){
        let {todos,tag} = this.props
        // 已完成数量
        let doneCount = todos.reduce((prev,current)=>prev + (current.done ? 1 : 0),0)
        // 总数
        let total = todos.length
        return (
            <div className="footer">
                <span className="todo-count"> {doneCount}/{total}</span>
                <ul className="filters">
                    <li>全部 ({total})</li>
                    <li>进行中 ({total - doneCount})</li>
                    <li>已完成 ({doneCount})</li>
                </ul>
                <span className="clear-completed" onClick={this.handleClearAllDone}>清除已完成</span>
            </div>
        )
    }

    handleClearAllDone = ()=>{
        this.props.checkClearAllDone()
    }
}