import React, { PureComponent } from 'react'
//import './makes.css';
import AsyncSelect from 'react-select/async';

class ModelsList extends PureComponent {
    state = { selectedMake: [] }
    onChange = selectedMake => {
        this.setState({
            selectedMake: selectedMake || []
        })
    }
   
//TODO: have this triggered by 'make' selection, See CASDropdown.js
loadOptions=async (inputText, callback)=>{
const response = await fetch(`http://localhost:8000/Results?Model_Name_like=${inputText}`);
    if (inputText.length > 0) {
        const json=  await response.json();
        callback(json.map(i=>({label:i.Model_Name,value: i.Model_ID})))
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

export default ModelsList