import { Grid, Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Badge, Box } from '@mui/material';
import Link from 'next/link';

export default function PostsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '650' }} aria-label="posts-table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="postTableHeader">Title</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">Topic</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableSubheader">Date</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemTitle">Example Blog Post #1</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemAuthor">Riley Grotenhuis</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                    {/* EXAMPLE  */}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemTitle">Example Blog Post #1</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemAuthor">Riley Grotenhuis</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemTitle">Example Blog Post #1</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="postTableItemAuthor">Riley Grotenhuis</Typography>
                                </Grid>
                            </Grid>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography variant="postTableItem">December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}