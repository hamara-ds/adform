import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        console.log('Constructor!!');
        super(props);
        this.state = {
            item: '',
            tasks: [],
            names: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        // this.handleSubmit = this.nameHandleSubmit.bind(this);
        // this.nameHandleChange = this.nameHandleChange.bind(this);
    }

    componentDidMount() {
        console.log('componentDidMount!!');
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks')
        .then(res => res.json())
        .then(json => {
            const tasks = json.map(item => item.Task)
            const names = json.map(item => item.Name)
            this.setState({ tasks: tasks, names : names })
        });
      }

    handleSubmit(e) {
        e.preventDefault();
        const { item, tasks } = this.state;
        console.log('handle submit');
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
        console.log(e.target.value)
        this.setState({
            item: e.target.value
        });
    }

    render() {
        // you'll need to add names in here if you want to list them
        const { tasks, names } = this.state;
        const todos = tasks.map((value, index) => <li key={ index }>{ value }</li>);
        return (
            <div>
                <form onSubmit={ this.taskHandleSubmit } >
                    <label>Task!!!!</label>
                    <input type="text" onChange={this.taskHandleChange}/>
                    <label>Name!!!!</label>
                    <input type="text" onChange={this.nameHandleChange}/>
                    <button>Enter a name</button>
                </form>
            </div>
        );
    }

    
}


export default App;