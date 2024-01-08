import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Categorydetails = () => {
  var [category,setCategory]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3005/view")
    .then(response=>{
      setCategory(response.data)
    })
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Categoryname</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {category.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>
                                    {row.Cname}
                                </TableCell>
                                <TableCell>{row.Status}</TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Categorydetails
