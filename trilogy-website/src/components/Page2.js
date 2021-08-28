import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import GIF from '../trilogy4GIF.gif'
import Instructions from './instructions'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "1280px",
        padding: "10px"
    },
    item: {
        paddingTop: "1rem"
    }
})

function Page(props) {
    const {title} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}><img src={GIF} alt="Logo" style={{width: "640px", height: "400px"}}></img></div>
            <div className="leftSide" style={{textAlign: "center", width: "640px", height: "400px"}}>
                <Typography className={classes.item} variant="h4" style={{fontFamily: "Merriweather", fontWeight: "900", paddingBottom: "2.5rem"}}>{title}</Typography>
                <div>
                    <Instructions title="1. Find Website" description="Find the website you want to send."></Instructions>
                    <Instructions title="2. Open Trilogy Extension" description="When Trilogy is open, click on the icon of the website you want to send link through."></Instructions>
                    <Instructions title="3. Paste and Send Link" description="Once you get into the website's messaging board, print the link and send it to whoever you want"></Instructions>
                </div>
            </div>
        </div>
    )
}

export default Page