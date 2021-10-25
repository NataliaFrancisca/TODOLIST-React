import React, { Component } from 'react';

import './Todo.css';
import Task from './Task';

class Todo extends Component{

    state = {
        tasks: [
            {
                id: 1,
                text: 'comprar pão'
            },
            {
                id: 2,
                text: 'comprar sobonete'
            },
            {
                id: 3,
                text: 'fazer trabalho da faculdade'
            },
            {
                id: 4,
                text: 'aprender react'
            },
        ],

        newTask: {
            text: ''
        }
    }


   //  adicionando uma nova tarefa
    addTask = (event) => {
        event.preventDefault();

        const keyValue = Math.floor(Math.random() * (100 - 4)) + 4;
        const newTask = {id: keyValue, ...this.state.newTask}

        this.setState({
            tasks: [...this.state.tasks, newTask],
            newTask: {text: ""}
        })
    }

   //  acompanhar a digitação da tarefa no input
    digitacao = event => {
        this.setState({newTask: {text: event.target.value}})
    }

   //  deletar a tarefa usando filter
   //  só voltando as tarefas que são diferentes do elemento que foi passado
    deleteTask = task => {
        let list = this.state.tasks;
        list = list.filter(t => t !== task);

        this.setState({tasks: list});
    }

    render(){
        return(
            <main className="container">
                <h2 className="container-title"> TO-DO LIST</h2>
                <hr></hr>

                <form method="post" className="container-form" onSubmit={this.addTask}> 
                    <label for="input-task" hidden>Tarefa</label>
                    <input 
                        type="text" 
                        id="input-task" 
                        placeholder="Digite sua tarefa" 
                        name="task"
                        value={this.state.newTask.text}
                        onChange={this.digitacao}
                    />
                </form>

                <div className="list-elements">
                    {this.state.tasks.map((tarefa) => (
                        <Task 
                           key={tarefa.id}
                           textTarefa={tarefa.text}
                           onDelete={this.deleteTask.bind(this, tarefa)} 
                        />
                    ))}
                </div>
            </main>
        )
    }
}

export default Todo;