import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerPanelLayout from './layout/DrawerPanelLayout'
import AppRoute from './approutes/AppRoute';
import Login from './auth/Login';
import LoginPage from './auth/LoginPage';
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppRoute/>
        </ThemeProvider>
    );
}

export default App;