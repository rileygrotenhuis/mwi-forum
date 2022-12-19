import { Grid, Typography, Paper } from '@mui/material';
import moment from 'moment';

export default function PostView({ data }) {
    return (
        <Paper elevation={1} style={{ padding: '10px' }}>
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
                <hr style={{ width: '100%' }} />
                <Grid item xs={12}>
                    <Typography paragraph>{data.content}</Typography>
                </Grid>
            </Grid>
        </Paper>
    );
}
