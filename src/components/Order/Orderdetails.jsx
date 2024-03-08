import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Topbar from '../Adminpanel/Topbar';
import Sidebar from '../Adminpanel/Sidebar';
import './Order.css'

const Orderdetails = () => {
    var [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/oview")
      .then(response => {
        setCategory(response.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='bb'>
        <Topbar/>
        <Sidebar/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Zipcode</TableCell>
              <TableCell>Contactno</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {category.map((row, pos) => {

              return (
                <TableRow
                  key={pos}>
                  <TableCell>
                    {row.Fname}
                  </TableCell>
                  <TableCell>{row.Address}</TableCell>
                  <TableCell>{row.City}</TableCell>
              
                  <TableCell>{row.State}</TableCell>
              
                  <TableCell>{row.Zipcode}</TableCell>
                  <TableCell>{row.Contactno}</TableCell>
              
              
                </TableRow>

              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Orderdetails
