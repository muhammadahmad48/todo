"use client"
import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Modal({visible,setVisible,title='Form',width='50vw',children}) {

    return (
        <div className="card flex justify-content-center">
            <Dialog header={title} visible={visible} style={{ width:  width}} onHide={() => {if (!visible) return; setVisible(false); }}>
                {children}
            </Dialog>
        </div>
    )
}
        