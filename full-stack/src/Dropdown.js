import React, {useState} from "react";

function Dropdown({ title, items, multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item) {
        if (!selection.some(current => current.id == item.id)) {
            if (!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id != item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    }
    
    
    

    (async () => {
       

        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json',
          {
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          }
        );
       // const Make_Name = await response.json(); // Here you have the data that you need
       // console.log(JSON.stringify({"R": Make_Name}, null, '\t' ));
          response.json().then(data => console.log(data));
         
        return (response.data)
      })();
      
      

    return (
        <div className="dd-wrapper">
            <div 
                tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}>

                    <div className="dd-header_title">
                        <p className="dd-header_title--bold">{title}</p>
                    </div>
                    <div className="dd-header_action">
                        <p>{open ? 'Close' : 'Open'}</p>
                    </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <span>{item.value}</span>
                                <span>Selected...</span>
                            </button>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default Dropdown;