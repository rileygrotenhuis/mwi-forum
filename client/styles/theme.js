import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        postTableHeader: {
            fontSize: '1rem',
            fontWeight: 'bold',
        },
        postTableSubheader: {
            fontSize: '0.85rem',
            fontWeight: 'lighter',
        },
        postTableItemTitle: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
        },
        postTableItemAuthor: {
            fontSize: '0.85rem',
            fontWeight: 'lighter',
        },
        postTableItem: {
            fontSize: '1rem',
            fontWeight: 'lighter',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        background: 'white',
                        color: 'black',
                        '&:hover': {
                            background: 'black',
                            color: 'white',
                            border: '1px solid white',
                        },
                    },
                },
            ],
        },
        MuiTableContainer: {
            defaultProps: {
                style: {
                    background: 'none',
                },
            },
        },
        MuiTableHead: {
            defaultProps: {
                style: {
                    background: '#5A5A5A',
                },
            },
        },
        MuiTableCell: {
            defaultProps: {
                style: {
                    border: 'none',
                },
            },
        },
    },
});

export default theme;
