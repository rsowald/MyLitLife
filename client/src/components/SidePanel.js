import React from 'react';
import { Button } from 'react-bootstrap';
import './SidePanel.css';

export default function SidePanel(props) {
    if (!props.isOpen) return null;

    return (
        <div className="sidePanel">
            <Button style={{ float: "right" }} onClick={() => props.onClose()}><i className="fas fa-arrow-left"></i></Button>
            {props.children}
        </div>
    )
};