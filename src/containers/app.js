import uuid from 'uuid';
import React from 'react';
import style from './App.css';
import Title from '../components/Title.js'
import TodoList from '../components/TodoList.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room'
                }, {
                    id: 2,
                    text: 'wash the dishes'
                }, {
                    id: 3,
                    text: 'feed my cat'
            }]
        };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(event) {
        const id = parseInt(event.target.id);
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title todosNumber={this.state.data.length}/>
                <TodoList todos={this.state.data} remove={this.removeTodo}/>
            </div>
        );
    }
}

export default App;