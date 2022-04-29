import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './NavBar';
import Body from './Body';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
	  <Body />
    </ThemeProvider>
  );
}

export default App;