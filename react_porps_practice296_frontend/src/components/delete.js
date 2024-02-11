import React from 'react';
import axios from 'axios';

function DeleteContact(id){
    axios.post('http://localhost:3001/delete',{id})
    .then(res => console.log(res))
    .catch(err => console.log(err))


}

export default DeleteContact