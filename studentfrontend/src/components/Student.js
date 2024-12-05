import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper ,Button} from '@mui/material';
import { Margin, Padding } from '@mui/icons-material';

export default function Student() {
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student added")
    })
    }


    const PapperStyle = {padding:'50px 20px', width:600, margin:"20px auto"}
    const [name,setName] =React.useState('')
    const [address,setAddress]=React.useState('')
  return (
    <Container>
        < Paper elevation={3} style={PapperStyle}>
        <h1>Add Student</h1>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1} }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth
      value={address}
      onChange={(e)=>setAddress(e.target.value)}/>
      <Button variant='contained' onClick={handleClick}>Submit</Button>
    </Box>
    {name}
    {address}
    </Paper> 
    </Container>
    
  );
}
