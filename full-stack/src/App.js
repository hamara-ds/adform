import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            tasks: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks')
        .then(res => res.json())
        .then(json => {
            const tasks = json.map(item => item.Task)
            this.setState({ tasks: tasks })
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const { item, tasks } = this.state;

        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: item})
        });

        this.setState({
            item: '',
            tasks: [...tasks, item]
        });
        e.target.reset();
    }

    handleChange(e) {
        this.setState({
            item: e.target.value
        });
    }

    render() {
        const { tasks } = this.state;
        const todos = tasks.map((value, index) => <li key={ index }>{ value }</li>);

        return (
            <div>
                <form onSubmit={ this.handleSubmit } >
                    <label>Task</label>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Enter a todo</button>
                </form>
                <ul>{ todos }</ul>
            </div>
        );
    }

    
}


export default App;