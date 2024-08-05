import React, { useState } from "react";
import Typography from '@mui/material/Typography'; // Import Typography from MUI
import axios from 'axios';
import { API_URL } from "../utils";

export const Task = ({task,fetchTasks}) =>{
const {id, nnote} = task;
return (

    <div className='task'> 
    <Typography variant="h4">{nnote}</Typography>
    </div>

)

}