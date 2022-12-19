import {
    Grid,
    Typography,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Badge,
    Box,
} from '@mui/material';
import moment from 'moment';
import Link from 'next/link';

export default function PostView({ data }) {
    return (
        <Paper>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h3">{data.title}</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        {data.author.name} ||{' '}
                        {moment(data.created_at).format('MMMM Do, YYYY')}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography paragraph>{data.content}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
