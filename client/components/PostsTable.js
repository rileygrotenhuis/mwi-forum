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

export default function PostsTable({ data }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '650' }} aria-label="posts-table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="postTableHeader">
                                Title
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">
                                Topic
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">
                                Replies
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">
                                Date
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((post, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    <Grid container>
                                        <Grid item xs={12}>
                                            <Typography variant="postTableItemTitle">
                                                <Link
                                                    href={`/posts/${post.id}`}
                                                    style={{
                                                        color: 'inherit',
                                                        textDecoration: 'none',
                                                    }}
                                                >
                                                    {post.title}
                                                </Link>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="postTableItemAuthor">
                                                {post.author.name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="postTableItem">
                                        {post.tag}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="postTableItem">
                                        {post.comments_count}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <Typography variant="postTableItem">
                                        {moment(post.created_at).format(
                                            'MMMM Do, YYYY'
                                        )}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    {/* EXAMPLE  */}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
