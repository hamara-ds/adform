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

        this.taskHandleChange = this.taskHandleChange.bind(this);
        this.nameHandleChange = this.nameHandleChange.bind(this);
//        this.nameHandleSubmit = this.nameHandleSubmit.bind(this);
      //  this.nameHandleChange = this.handleChange.bind(this);
    }


// this is used to display the database on the screen, unnecessary, therefore i've removed it
   /* componentDidMount() {
        console.log('componentDidMount!!');
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks')
        .then(res => res.json())
        .then(json => {
            const tasks = json.map(item => item.Task)
            const names = json.map(item => item.Name);
            this.setState({ item: tasks, item : names });
            
        });
      }
*/
    handleSubmit(e) {
        e.preventDefault();
        const { item, tasks , names} = this.state;
        console.log('handle submit');
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({task: item, name: item}, null, '\t')
        });
        this.setState({
            item: '',
            tasks: [...tasks, item],
            names: [...names, item]
        })
       // this.setState({
       //     item: '',
       //     names: [...names, item]
       // })
        //e.target.reset();
    }

    taskHandleChange(e) {
        console.log(e.target.value)
        this.setState({
            item: e.target.value
        });
    //    e.target.reset();
    }

    nameHandleChange(e) {
        console.log(e.target.value)
        this.setState({
            item: e.target.value
        });
     //   e.target.reset();
    }

    render() {
        // you'll need to add names in here if you want to list them
      //  const { tasks, names } = this.state;
      //  const todos = tasks.map((value, index) => <li key={ index }>{ value }</li>);
      //  const totos = names.map((value, index) => <li key={ index }>{ value }</li>);
        return (
            <form onSubmit={ this.handleSubmit } >
                <div>
                    <label>Task </label>
                    <input 
                    type="text" 
                   // value={this.state.task}
                    onChange={ this.taskHandleChange }
                    />
                </div>

                <div>
                    <label>Name </label>
                    <input 
                    type="text" 
                    //value={this.state.name}
                    onChange={ this.nameHandleChange}
                    />

                </div>
                <div>
                <button type="submit">Submit</button>
                </div>
            

            </form>
          );
    }

}    


export default App;