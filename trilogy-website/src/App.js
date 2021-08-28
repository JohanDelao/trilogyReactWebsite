import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import NavBar from './components/NavBar';
import Page from './components/Page';
import Page2 from './components/Page2';
import Grid from './components/AppGrid';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RedditIcon from '@material-ui/icons/Reddit';
import { SiSlack } from "react-icons/si";
import { SiGmail } from 'react-icons/si';
import FacebookIcon from '@material-ui/icons/Facebook';
import { SiMessenger } from 'react-icons/si';
import { FaCloud } from 'react-icons/fa'
import { SiDiscord } from 'react-icons/si';
import { SiMicrosoftoutlook } from 'react-icons/si';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e1667',
    },
    secondary: {
      main: '#c7d8ed',
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
})

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
    maxWidth: "1280px"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
})

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
        <div className={`${classes.grid}`} style={{padding: "5% 0 10% 0"}}>
          <Page title="Find it, Copy it, Save it" description="Trilogy URL Copier is a Chrome extension that makes
          copying and sending URLs easier than ever!"></Page>
        </div>
        <div className={`${classes.grid}`} style={{paddingBottom: "6%"}}>
          <Page2 title="How It Works" description="Hello my name is Johan"></Page2>
        </div>
        <div className="titleDisclaimer" style={{paddingBottom: "3rem"}}>
          <h4 style={{fontFamily: "Merriweather", fontWeight: "900", fontSize: "28px", marginBottom: "0px", paddingBottom: "10px"}}>Applications To Send Through</h4>
          <h8>(Disclaimer: Not sponsored by any of these companies)</h8>
        </div>
        <div className={`${classes.grid}`} style={{paddingBottom: "2%"}}>
          <Grid icon={<TwitterIcon style={{fill: "#13afe8", height:"65", width:"65"}}/>}/>
          <Grid icon={<SiMessenger style={{fill: "#4a00ba", height:"65", width:"65"}}/>}/>
          <Grid icon={<SiGmail style={{fill: "#ba1313", height: "65", width: "65"}}/>}/>
          <Grid icon={<LinkedInIcon style={{fill: "#4360A6", height: "65", width: "65"}}/>}/>
          <Grid icon={<RedditIcon style={{fill: "#D05B2D", height:"65", width:"65"}}/>}/>
        </div>
        <div className={`${classes.grid}`} style={{paddingBottom: "10%"}}>
          <Grid icon={<FacebookIcon style={{fill: "#4a00ba", height:"65", width:"65"}}/>}/>
          <Grid icon={<SiSlack style={{fill: "#009166", height:"65", width:"65"}}></SiSlack>}/>
          <Grid icon={<FaCloud style={{fill: "#13afe8", height: "65", width: "65"}}/>}/>
          <Grid icon={<SiDiscord style={{fill: "#3013c2", height: "65", width: "65"}}/>}/>
          <Grid icon={<SiMicrosoftoutlook style={{fill: "#0551a8", height:"65", width:"65"}}/>}/>
        </div>
      </ThemeProvider>
    </div>
    
  );
}



export default App;
