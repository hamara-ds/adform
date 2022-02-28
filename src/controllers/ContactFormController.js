import React from "react";
import {ContactFormView} from '../views'

class ContactFormController extends React.Component {
    state = {}

    render() {
        return (
            <ContactFormView>
                <make
                    name="make"
                    onChange={this.handleChange} />
                <submit onClick={this.handleSubmit} />
            </ContactFormView>
        )
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const {
            data,
            item,
            task,
            name,
            make,
            model,
            odometer,
            year,
            ownershipStatus,
            transmission,
            email,
            phoneNumber,
            postalCode,
            country
        } = this.state;
        console.log('handle submit');

        fetch('https://h2hukjth21.execute-api.us-east-1.amazonaws.com/api/tasks', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: "",
                item: "0",
                "task": task,
                "name": name,
                "make": make,
                "model": model,
                "odometer": odometer,
                "year": year,
                "ownershipStatus": ownershipStatus,
                "transmission": transmission,
                "email": email,
                "phoneNumber": phoneNumber,
                "postalCode": postalCode,
                "country": country
            }, null, '\t')

        });
        // if you want to see in your console is things are going where they should
        // uncomment this line of code :)
        /*   console.log(this.State);
           this.setState({
               item: {"task": task, "name": name}

           })
       */
    }
}
export default ContactFormController
