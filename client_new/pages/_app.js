import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { Container } from '@mui/system';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <Component {...pageProps} />
            </Container>
        </ThemeProvider>
    );
}
