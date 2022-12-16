import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function PostsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '650' }} aria-label="posts-table">
                <TableHead>
                    <TableRow>
                        <TableCell>Topic</TableCell>
                        <TableCell align="right">Replies</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography variant="h6"><b>Example Post Title</b></Typography>
                            <Typography variant="subtitle1">
                                <b>Riley Grotenhuis </b>
                                ||
                                <em> December 16, 2022</em>
                            </Typography>
                        </TableCell>
                        <TableCell align="right">
                            54 Replies
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}