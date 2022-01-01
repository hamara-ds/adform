import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: "",
            task: "0",
            name: "",
            make: "",
            model: "",
            odometer: "",
            year: "",
            owenershipStatus: "",
            transmission: "",
            email: "",
            phoneNumber: "",
            postalCode: "",
            country: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }




    handleSubmit(e) {
        e.preventDefault();
         const { item, task, name, make, model , odometer, year, ownershipStatus, transmission, email, phoneNumber, postalCode, country} = this.state;
        console.log('handle submit');
        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({item:"0", "task": task, "name": name, "make": make, "model": model, "odometer": odometer, "year": year, "ownershipStatus": ownershipStatus, "transmission": transmission,"email" : email,"phoneNumber": phoneNumber, }, null, '\t')});
    // if you want to see in your console is things are going where they should
    // uncomment this line of code :)
     /*   console.log(this.State);
        this.setState({
            item: {"task": task, "name": name}
            
        })
    */
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
                    <label>Make </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange }
                    name="make"
                    />
                </div>

                <div>
                    <label>Model </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="model"
                    />
                </div>

                <div>
                    <label>Odometer </label>
                    <input 
                    type="number" 
                    onChange={ this.handleChange}
                    name="odometer"
                    />
                </div>

                <div>
                    <label>Year </label>
                    <input 
                    type="number" 
                    onChange={ this.handleChange}
                    name="year"
                    />
                </div>

                <div>
                    <label>Ownership status </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="ownershipStatus"
                    />
                </div>

                <div>
                    <label>Transmission </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="transmission"
                    />
                </div>

                <div>
                    <label>Email </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="email"
                    />
                </div>

                <div>
                    <label>Phone Number </label>
                    <input 
                    type="number" 
                    onChange={ this.handleChange}
                    name="phoneNumber"
                    />
                </div>

                <div>
                    <label>Postal code </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="postalCode"
                    />
                </div>

                <div>
                    <label>Country </label>
                    <input 
                    type="text" 
                    onChange={ this.handleChange}
                    name="country"
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