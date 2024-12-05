import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import { Margin, Padding } from '@mui/icons-material';

export default function Student() {
    const PapperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
  return (
    <Container>
        < Paper elevation={3} style={PapperStyle}>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
    </Box>
    </Paper> 
    </Container>
  );
}
