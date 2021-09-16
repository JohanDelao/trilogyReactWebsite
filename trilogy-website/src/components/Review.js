import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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


function Review(props) {
    const {profilePic, quote, name, occupation} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className="leftSide" style={{textAlign: "center", width: "640px", height: "200px"}}>
                <Typography className={classes.item} variant="h6" style={{fontFamily: "Merriweather", fontWeight: "500", paddingBottom: "2.5rem", paddingTop: "50px"}}>{quote}</Typography>
            </div>
            <div className={classes.item} style={{textAlign: "center", width: "640px", height: "200px"}}>
                <img src={profilePic} alt="Logo" style={{width: "75px", height: "75px", borderRadius: "50%"}}></img>
                <Typography className={classes.item} variant="h6" style={{fontFamily: "Merriweather", fontWeight: "900"}}>{name}</Typography>
                <Typography className={classes.item} variant="h7" style={{fontFamily: "Merriweather", fontWeight: "500", color: "grey"}}>{occupation}</Typography>
            </div>
        </div>
    )
}

export default Review
