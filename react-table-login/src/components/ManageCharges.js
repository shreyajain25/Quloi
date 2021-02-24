import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import DataTable from './table';
import PopupDialog from './popup';

function ManageCharges() {
    const [actGroup, setActGroup] = useState(false);
    const checkGroup = (activate) => {
        setActGroup(activate);
    }
    const showPopup = () => {
        return <PopupDialog />;
    }
    return (
        <div>
            <h3 style={{textAlign: 'left'}}>Manage Charges</h3>
            { actGroup ? 
                <Button variant="contained" color="primary" onClick = {() => showPopup}>Group</Button> :
                <Button variant="contained" color="primary" disabled>Group</Button>
            }
            <Button variant="contained" disabled>Ungroup</Button>
            <DataTable checkGroup = {checkGroup}/>
            <Button color="primary">+ More Charges</Button>
            <Button variant="outlined" color="primary">Cancel</Button>
            <Button variant="contained" color="primary">Submit</Button>
        </div>
    )
}

export default ManageCharges;
