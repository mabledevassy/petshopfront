import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Subcategorydetails = () => {
    var[sub,setSub]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3005/view")
        .then(response=>{
            setSub(response.data)
        })
        .catch(err=>console.log(err))
    },[])
  return (
    <div>
      <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Subcategoryname</TableCell>
                        <TableCell>Category</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sub.map((row,pos) => {

                        return (
                            <TableRow
                                key={pos}>
                                <TableCell>
                                    {row.Sname}
                                </TableCell>
                                <TableCell>{row.Category}</TableCell>
                               
                            </TableRow>

                        )
                    })}
         </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Subcategorydetails
