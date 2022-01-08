import React, { Component } from 'react';

class CASDropdown extends Component {
    constructor() {
        super();
        this.state = {
            DDL1: [],
            DDL2: [],
            selectddl:'',
        };
    }
//TOGO: incorperate the MakesList.js and ModelsList.js
componentDidMount() {
    this.setState({
        DDL1: [
            { name: 'Colors', DDL2: ['Red', "Black", 'Orange', "Blue"] },
            { name: 'Sports', DDL2: ['Cricket','Rugby', 'Boxing', 'Swimming' ] },
            { name: 'Fruits', DDL2: ['Apple', 'Mango', 'Banana', ] },
            { name: 'Countrynames', DDL2: ['India', 'Japan', 'USA', "Brazil"] },
        ]
    });
}

    selectChange(e) {
            this.setState( {selectddl: e.target.value});
            this.setState({ DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2 });
    }
    
    render() {
        return (
            <div>
                <center>
                    <h1> This where be the component that </h1>
                    <h2> brings Makes and Models together! </h2>
                    <hr />
                    <select value={this.state.selectddl} onChange={this.selectChange.bind(this)}>
                        <option>...Select...</option>
                        {this.state.DDL1.map(x => {
                            return <option>{x.name}</option>
                        })}
                    </select>
                        
                    
                    <select>
                    <option selected disabled>...........</option>
                        {
                            this.state.DDL2.map( x => {
                                return <option>{x}</option>
                            })
                        }

                    </select>

                </center>
            </div>
        );
    }
}

export default CASDropdown;