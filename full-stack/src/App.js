import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: '',
            tasks: []
        };
        this.taskHandleSubmit = this.taskHandleSubmit.bind(this);
        this.taskHandleChange = this.taskHandleChange.bind(this);
        
        this.nameHandleSubmit = this.nameHandleSubmit.bind(this);
        this.nameHandleChange = this.nameHandleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks')
        .then(res => res.json())
        .then(json => {
            const tasks = json.map(item => item.Task)
            this.setState({ tasks: tasks })
        });
      }

    taskHandleSubmit(e) {
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

    taskHandleChange(e) {
        this.setState({
            item: e.target.value
        });
    }

    nameHandleSubmit(e) {
        e.preventDefault();
        const { item, names } = this.state;

        // add the url here
        fetch('', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: item})
        });

        this.setState({
            item: '',
            names: [...names, item]
        });
        e.target.reset();
    }

    nameHandleChange(e) {
        // this is probably the same
        this.setState({
            item: e.target.value
        });
    }

    render() {
        // you'll need to add names in here if you want to list them
        const { tasks } = this.state;
        const todos = tasks.map((value, index) => <li key={ index }>{ value }</li>);
        return (
            <div>
                <form onSubmit={ this.taskHandleSubmit } >
                    <label>Task!!!!</label>
                    <input type="text" onChange={this.taskHandleChange}/>
                    <button>Enter a name</button>
                </form>
                <form onSubmit={ this.nameHandleSubmit } >
                    <label>Name!!!!</label>
                    <input type="text" onChange={this.nameHandleChange}/>
                    <button>Enter a name</button>
                </form>
                <ul>{ todos }</ul>
            </div>
        );
    }

    
}


export default App;