import { createTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './App.css';
import CustomBtn from './components/CustomBtn'
import NavBar from './components/NavBar';

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
  bigSpace: {
    marginTop: "5rem"
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
    <div className="App" style={{maxWidth: "1280px", margin: "auto"}}>
      <ThemeProvider theme={theme}>
        <NavBar></NavBar>
      </ThemeProvider>
    </div>
    
  );
}



export default App;
