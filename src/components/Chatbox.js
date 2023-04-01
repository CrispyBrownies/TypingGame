import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import CheckWord from "./DictionaryAPI";

function CheckLength(word) {
    if ((word.length) > 14) {
        return false
    } else {
        return true
    }
}

const Chatbox = () => {

    const [typeField, setTypeField] = useState("");

    let valid = true;

    const handleChange = (e) => {
        setTypeField(e.target.value)
    }

    const sendWord = (e) => {
        if (e.key === 'Enter') {
            if (typeField !== "") {
                CheckWord(typeField).then((res) => {
                valid = res;
                valid = valid && CheckLength(typeField);
                console.log(valid)})
                setTypeField("")
            }
        }
        return
    }

    return (
        <div className="chatbox">
            <TextField placeholder="Enter a word..." 
            variant="outlined"
            id="box1"
            value={typeField}
            onChange={handleChange}
            onKeyDown={sendWord}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <SendIcon/>
                    </InputAdornment>
                )
            }} 
            inputProps={{
                style: {
                    fontFamily:"roboto",
                    textTransform: "uppercase"
                }
            }}
            style={{maxWidth:"1000px",
            width:"100%"}}/>
        </div>
    ) 
}

export default Chatbox