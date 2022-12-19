import { Paper, Grid, Typography } from '@mui/material';
import moment from 'moment';

export default function UserInformation({ data }) {
    return (
        <Paper elevation={1} style={{ padding: '10px' }}>
            <Typography variant="h3">{data.name}</Typography>
            <Typography>{data.email}</Typography>
            <Typography>
                Join on {moment(data.created_at).format('MMMM Do, YYYY')}
            </Typography>
        </Paper>
    );
}
