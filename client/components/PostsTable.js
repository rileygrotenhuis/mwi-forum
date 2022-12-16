import { Typography, TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

export default function PostsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: '650' }} aria-label="posts-table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography>Title</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Topic</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Date</Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography>Example Blog Post #1</Typography>
                            <Typography>Riley Grotenhuis</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                    {/* EXAMPLE DATA */}
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography>Example Blog Post #1</Typography>
                            <Typography>Riley Grotenhuis</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography>Example Blog Post #1</Typography>
                            <Typography>Riley Grotenhuis</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            <Typography>Example Blog Post #1</Typography>
                            <Typography>Riley Grotenhuis</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>Engineering</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>35 Replies</Typography>
                        </TableCell>
                        <TableCell align="right">
                            <Typography>December 16, 2022</Typography>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}