import React, { useEffect, useState } from 'react';
import { TextareaAutosize } from '@mui/base/TextareaAutosize'; // Import as a named export
import CssBaseline from '@mui/material/CssBaseline';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import { API_URL } from "./utils";
import {AddTask} from "./component/Addtask.js";
import {Task} from "./component/Task.js";


const theme = createTheme({
  palette: {
    mode: 'dark', // Change to 'dark' if you want to test the dark mode
  },
});

function App() {
  /*{To take care of the states}*/
  const [note,setnewNote] = useState([]);
  /*Fetch tasks*/
  const fetchTasks  = async() =>{
    try{
      const {data} = await axios.getAPI(API_URL);
      setnewNote(data);
      

    }catch (err){
      console.log(err)
    }

  }

  useEffect(() =>{
    fetchTasks();
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AddTask fetchTasks={fetchTasks} />
      {note.map((task) => (
        <Task task={task} key={task.id} fetchTasks={fetchTasks} />
      ))}
    </ThemeProvider>
  );
}

export default App;
