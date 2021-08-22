import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import CustomBtn from './components/CustomBtn'
import NavBar from './components/NavBar';
import Page from './components/Page';

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
        <div className={`${classes.grid}`}>
          <Page title="Find it, Copy it, Save it" description="Trilogy URL Copier is a Chrome extension that makes
          copying and sending URLs easier than ever!"></Page>
        </div>
      </ThemeProvider>
    </div>
    
  );
}



export default App;
