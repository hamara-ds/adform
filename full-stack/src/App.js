import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            task: "",
            name: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }




    handleSubmit(e) {
        e.preventDefault();
         const {  task , name, item} = this.state;
        console.log('handle submit');
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({item:"", "task": task, "name": name}, null, '\t')
        });
     //   console.log(this.State);
     //   this.setState({
     //       item: {"task": task, "name": name}
            
     //   })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

   
    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit } >
                <div>
                    <label>Task </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange }
                    name="task"
                    />
                </div>

                <div>
                    <label>Name </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="name"
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