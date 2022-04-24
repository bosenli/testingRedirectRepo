import axios from 'axios';
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import apiUrl from '../appConfig';

const CodeBlogDetails = () => {
  const id = useParams().id;
  const [blogData, setBlogData] = useState({});
  const [inputs,setInputs] = useState({});

const handleChange = (e) =>{
  setInputs((prevState) => ({
    ...prevState,
    [e.target.name] : e.target.value,
}))
}
const handleSumbit=()=>{

}
  //console.log(id);
  const fetchBlogData = async () =>{
    try {
      const response = await axios.get(`${apiUrl}/blogs/${id}`);
      console.log(response.data.blog);
      setBlogData(response.data.blog);
     
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchBlogData();
    setInputs({
      title: blogData.title,
      description: blogData.description,
      image: blogData.image
    })
  },[id])

  return (
    <div>
      {inputs && 
       <form onSubmit={handleSumbit}>
        <Box
          display = 'flex'
          flexDirection={'column'}
          justifyContent={'center'}
          alignContent ={'center'}
          width= {'60vw'}
          height={'80vh'}
          border = {3}
          borderColor="#22aa0f"
          borderRadius={2}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
        >
          <Typography variant='h4' textAlign={'center'} sx={{marginTop:-1,marginBottom: 1, color:"#22aa0f"}}>Edit Blog </Typography>
          <InputLabel sx ={{marginBottom: 1, marginTop: 1, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Title</InputLabel>
          <TextField name="title" value={inputs.title} onChange={handleChange} variant ="outlined" margin='normal'/>
          <InputLabel sx ={{marginBottom: 1, marginTop: 1, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Description</InputLabel>
          <TextField name="description" value={inputs.description} onChange={handleChange} variant ="outlined" margin='normal'/>
          <InputLabel sx ={{marginBottom: 1, marginTop: 1, fontSize: '20px', fontWeight:'bold', color: '#0a32b1'}}>Image URL</InputLabel>
          <TextField name="image" value={inputs.image} onChange={handleChange} variant ="outlined" margin='normal'/>
          <Button variant="outlined" type='submit' sx ={{marginBottom: 1, marginTop: 2,fontWeight:'bolder', fontSize:'large',color:'#0a32b1',height:'50px',borderColor:'#22aa0f'}}>Submit</Button>
        </Box>
      </form>
          }
    </div>
  )
}

export default CodeBlogDetails
