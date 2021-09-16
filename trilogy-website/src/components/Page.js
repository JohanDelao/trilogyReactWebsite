import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './CustomBtn'
import Rating from '@material-ui/lab/Rating'
import image from '../trilogyMediaImage.jpg'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "1280px",
        padding: "10px"
    },
    item: {
        paddingTop: "1rem"
    }
})

function Page(props) {
    const {title, description} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className="leftSide" style={{textAlign: "left"}}>
            <Typography className={classes.item} variant="h4" style={{fontFamily: "Merriweather", fontWeight: "900"}}>{title}</Typography>
            <Typography className={classes.item} variant="h6" style={{paddingBottom: "1rem"}}>{description}</Typography>
            <CustomBtn/>
            <Rating name="read-only" value={10} readOnly style={{padding: "1rem 0 1rem 0"}}></Rating>
            </div>
            <div className={classes.item}><img src={image} alt="Logo" /></div>
        </div>
    )
}

export default Page