import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';
import { Container } from '@mui/system';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container>
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </RecoilRoot>
    );
}
