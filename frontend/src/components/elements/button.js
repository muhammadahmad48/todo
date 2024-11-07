
import React from 'react'; 
import { Button } from 'primereact/button';

export default function ActionButton({onClick=()=>{},type="",label='Submit',severity='',width=''}) {
    return (
        <Button onClick={onClick} type={type} severity={severity} label={label} style={{width:width}} />
    )
}