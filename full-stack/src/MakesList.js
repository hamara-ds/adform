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
    renderEveryMake= user => {
        return <img src={user.avatar} alt='user avatar'/>
    }

loadOptions=async (inputText, callback)=>{
const response = await fetch(`http://localhost:8000/Results?Make_Name_like=${inputText}`);
    if (inputText.length > 3) {
        const json=  await response.json();
        callback(json.map(i=>({label:i.Make_Name,value: i.Make_ID})))
    } 
}

    render () {
        return(<div className='make'>

            <div className='avatars'>
                {this.state.selectedMake.map(this.renderEveryMake)}
            </div>

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