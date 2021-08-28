import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 1.7rem 0 1.7rem"
    },
    item: {
        paddingTop: "1rem"
    }
})

function AppGrid(props) {
    const {icon} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
        </div>
    )
}

export default AppGrid