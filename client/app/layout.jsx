"use client";

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

import { Container } from '@mui/system';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head />
            <body>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container>
                  {children}
                </Container>
              </ThemeProvider>
            </body>
        </html>
    );
}
