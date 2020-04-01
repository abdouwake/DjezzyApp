import React from 'react';
import Button from "@material-ui/core/Button";

export default function UploadServerFile(props){
    const file = props.file;
    return (
        <Button style={{ backgroundColor:'#f78383',position: 'absolute',right: '0px'}} autoFocus color="inherit" onClick={props.onClick}>
            save
        </Button>
    )
}