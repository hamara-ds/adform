import React, {PureComponent} from 'react'
//import './makes.css';
import AsyncSelect from 'react-select/async';
import CASDropdown from './Component/CASDropdown';
import { connect } from 'react-redux'

class MakesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedMake: []};
    }
    //state = {selectedMake: []}
    onChange = selectedMake => {
        this.setState({
            selectedMake: selectedMake || []

        }

        )
        this.loadOptions = this.loadOptions.bind(this);
        this.onTrigger = this.onTrigger.bind(this);
//console.log(this.state)
    //return(selectedMake)
    }

    //TODO: have the selection POST to dynamodb
    loadOptions = async (inputText, callback) => {
        const response = await fetch(`http://localhost:8000/Results?Make_Name_like=${inputText}`);
        if (inputText.length > 1) {
            const json = await response.json();
            // TODO: store the json in the parent object
            // APP.js
            const uniqJson = [...json.reduce((map, obj) => map.set(obj.Make_ID, obj), new Map()).values()];

            callback(uniqJson.map(i => ({label: i.Make_Name, value: i.Make_ID})))



        }
    }

     mapStateToProps = (state) => {
        return {

        }
    }

     onTrigger = (option) => {
         this.props(option.target.value);
         option.preventDefault();
         console.log("ontrigger")
     }

    // => this.props.make.changeUnit(this.onChange)

    render() {
        <CASDropdown data = {this.state.selectedMake}/>
        console.log(this.state.selectedMake,"this is from loadOptions")

        return (

            <div className='inputFeild'>

                <AsyncSelect
                    isMulti
                    value={this.state.selectedMake}
                    onChange={this.onChange}
                    name= "make"
                    getOptionValue={(option) => this.onTrigger}


                    placeholder={'car make...'}
                    loadOptions={this.loadOptions}


                />
            </div>
        )
    }
}

export default MakesList