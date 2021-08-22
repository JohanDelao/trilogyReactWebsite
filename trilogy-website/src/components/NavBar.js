import React from 'react'
import CustomBtn from './CustomBtn'
import logo from '../trilogyReactLogo.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const styles = makeStyles({
    bar:{
        backgroundColor: "#fff",
        maxWidth: "1350px", 
        margin: "auto",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        maxHeight:"150x",
        maxWidth: "200px",
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles();
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo}/>
            <Typography variant="h6" className={classes.menuItem}>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
            </Typography>
            <CustomBtn/>
        </Toolbar>
    )
}


export default NavBar