import React from 'react'
import {Button} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "250px",
        float: 'right',
        height: "50px",
        fontWeight: "600",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 12,
        background: "#FF0000",
        color: "#fff",
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#DF0000"
        },
    },
    label: {
        textTransform: "capitalize",
    },
})(Button);

function CustomBtn() {
    return (
        <StyledButton variant="contained" href="https://chrome.google.com/webstore/detail/trilogy-url-copier/nlbbmjbfkbfgdbfhaoicjignkbgjdico">Add to Chrome - Its Free!</StyledButton>
    )
}

export default CustomBtn
