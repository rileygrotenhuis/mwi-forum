import { Grid, Typography, Paper } from '@mui/material';
import moment from 'moment';

export default function CommentList({ comments }) {
    return (
        <Paper elevation={1} style={{ marginTop: '25px', padding: '10px' }}>
            {comments.map((comment, index) => {
                return (
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography>
                                {comment.author.name} ||{' '}
                                {moment(comment.created_at).fromNow()}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography paragraph>{comment.content}</Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </Paper>
    );
}
