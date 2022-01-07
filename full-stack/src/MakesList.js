import React, { PureComponent } from 'react'
//import './makes.css';
import AsyncSelect from 'react-select/async';

class MakesList extends PureComponent {
    state = { selectedMake: [] }
    onChange = selectedMake => {
        this.setState({
            selectedMake: selectedMake || []
        })
    }
   
//TODO: have the selection POST to dynamodb
loadOptions=async (inputText, callback)=>{
const response = await fetch(`http://localhost:8000/Results?Make_Name_like=${inputText}`);
    if (inputText.length > 1) { 
        const json=  await response.json();
        const uniqJson = [...json.reduce((map, obj) => map.set(obj.Make_ID, obj),new Map()).values()];
        callback(uniqJson.map(i=>({label:i.Make_Name,value: i.Make_ID})))
        } 
    }

    render () {
        return(<div className='make'>

           <AsyncSelect 
            isMulti
            value={this.state.selectedMake}
            onChange={this.onChange}
            placeholder={'type something...'}
            loadOptions={this.loadOptions}
            />

        </div>)
    }
}

export default MakesList