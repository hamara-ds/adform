import React, {Component, useState} from 'react';
import MakesList from '../MakesList';
import ModelsList from "../ModelsList";

class CASDropdown extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            DDL1: [],
            DDL2: [],
            selectddl: '',
        }
        this.handleCallback = this.handleCallback.bind(this);
    }

    /*
    handleCallback = (childData) => {
        this.setState({DDL1: childData})
    }
    */


    // TODO: incorperate the MakesList.js and ModelsList.js


    componentDidMount() {
        this.setState({
            DDL1: [
                {name: this.props.selectedMake, DDL2: ['bah']},
                {name: 'Sports', DDL2: ['Cricket', 'Rugby', 'Boxing', 'Swimming']},
                {name: 'Fruits', DDL2: ['Apple', 'Mango', 'Banana',]},
                {name: 'Countrynames', DDL2: ['India', 'Japan', 'USA', "Brazil"]},
            ]
        });
    }

      handleCallback = (data) =>{
          this.setState({name: data})
      }

    selectChange(e) {
        this.setState({selectddl: e.target.value});
        this.setState({DDL2: this.state.DDL1.find(x => x.name === e.target.value).DDL2});
    }

    changeUnit(item)
    {
        this.setState({slecetedMake:item})
        console.log("Change Unit!")
    }

    // <MakesList make = {{names:this.state.names,changeUnit:this.changeUnit.bind(this)} }/>
//<MakesList />
//<MakesList make = {{names:this.state.names,changeUnit:this.changeUnit.bind(this)} }/>

    render() {
        return (
            <div>
                <center>

                    <MakesList data={ {selectedMake:this.state.selectedMake,
                    changeUnit:this.changeUnit.bind(this)}}/>

                    <select value={this.state.selectddl} onChange={this.selectChange.bind(this)}>
                        <option>...Select...</option>
                        {this.state.DDL1.map(x => {
                            return <option>{x.name}</option>
                        })}
                    </select>
                    <select>
                        <option selected disabled>...........</option>
                        {
                            this.state.DDL2.map(x => {
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