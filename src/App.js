//import logo from './logo.svg';
//import './App.css';
//
//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}
//
//export default App;
import { React } from 'react';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles';
import { client } from './components/api/client';
import { Message } from './components/message/notification';

import {LanguageContext} from './components/context/language';
import {NotificationProvider} from './components/context/notification';
// import {ProviderAuthContext} from './components/context/auth';
// import {ProviderImagesUser} from './components/context/images';

import { Routers } from './components/routers/routers';

const theme = createTheme({
    typography: {
        fontFamily: [
            'SFProDisplay',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Message>
                    <LanguageContext>
                        <ApolloProvider client={client}>
                            {/* <ProviderAuthContext> */}
                                <NotificationProvider>
                                    {/* <ProviderImagesUser> */}
                                        <Routers />
                                    {/* </ProviderImagesUser> */}
                                </NotificationProvider>
                            {/* </ProviderAuthContext> */}
                        </ApolloProvider>
                    </LanguageContext>
                </Message>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}


export default App;

