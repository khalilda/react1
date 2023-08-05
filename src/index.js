import React from 'react' ;
import ReactDom from 'react-dom/client' ;
import { App } from '/App' ;
import { ThemeProvider } from 'styled-components'


const theme = {
    color: {
        black: "#212121",
        white: "#fff",
        success: "green",
        warning: 'orange',
        error:'red'
    },
};

ReactDom.createRoot(document.getElementById( 'root' )).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);