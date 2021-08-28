import React from 'react'
import {Typography} from '@material-ui/core'

function instructions(props) {
    const {title, description} = props;
    return (
        <div style={{textAlign: "left", paddingLeft: "40px", marginBottom: "1rem"}}>
            <Typography variant="h6" style={{fontFamily: "Merriweather", paddingBottom: ".5 rem", fontWeight: "900"}}>{title}</Typography>
            <Typography variant="h8" style={{paddingBottom: "1rem"}}>{description}</Typography>
        </div>
    )
}

export default instructions
