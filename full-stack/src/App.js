import React, { Component } from 'react';
import './App.css';
import Dropdown from './Dropdown';

//const fetch = require('node-fetch');

const items= [
    {
        id:1,
        value:'psdfas',
    }
];





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

  /*  componentDidMount() 
     {
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
        .then(res => res.json())
        .then(json => {
            const Make_Name = json.map(item => item.Make_Name)
            this.setState({ Make_Name: Make_Name })
        });
    }
*/
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
            body: JSON.stringify({item:"0", "task": task, "name": name, "make": make, "model": model, "odometer": odometer, "year": year, "ownershipStatus": ownershipStatus, "transmission": transmission,"email" : email,"phoneNumber": phoneNumber, "postalCode": postalCode, "country": country }, null, '\t')});
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

            
            
            <><header className="App-header">
                <h1>Selling your car?</h1> 
                <h1>We have credible buyers</h1>
            </header>
                <div className="formHeader">
                <h1>Fill out this form and leave the rest to us, we </h1>
                <h1> promise not to leave you hanging</h1>
                </div>

                <div className="container">
                <Dropdown title="Select a Make" items={items}/> 
                </div>
            
            <form onSubmit={this.handleSubmit}>
                    <div className="main"
                    ><h1 className="sub-main">
                            <label>Make </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="make" />

                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Model </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="model" />

                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Odometer </label>
                        </h1>
                        <input className="inputFeild"
                            type="number"
                            onChange={this.handleChange}
                            name="odometer" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Year </label>
                        </h1>
                        <input className="inputFeild"
                            type="number"
                            onChange={this.handleChange}
                            name="year" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Ownership status </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="ownershipStatus" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Transmission </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="transmission" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Email </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="email" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Phone Number </label>
                        </h1>
                        <input className="inputFeild"
                            type="number"
                            onChange={this.handleChange}
                            name="phoneNumber" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Postal code </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="postalCode" />
                    </div>

                    <div className="main">
                        <h1 className="sub-main">
                            <label>Country </label>
                        </h1>
                        <input className="inputFeild"
                            type="text"
                            onChange={this.handleChange}
                            name="country" />
                    </div>



                    <div className="main">
                        <h1>
                            <button type="submit" className="submitButton">Send</button>
                        </h1>
                    </div>


                </form></>
          );
    }

}    


export default App;