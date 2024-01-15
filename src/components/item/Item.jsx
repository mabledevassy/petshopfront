import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Item = () => {
  var[inputs,setInputs]=useState({
    "Category":'',
    "Subcategory":''
  })
  var[selectedimage,setSelectedimage]=useState(null);
  
    var[ca,setCa]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/categoryview")
      .then(response=>{
        console.log(response.data)
        setCa(response.data)

      })
      .catch(err=>console.log(err))
    },[])
    var[subca,setSubca]=useState([])
    useEffect(()=>{
      axios.get("http://localhost:3005/subview")
      .then(response=>{
        console.log(response.data)
        setSubca(response.data)

      })
      .catch(err=>console.log(err))
    },[])
    const inputHandler =(event) =>{
      const{name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
    }
    const handleImage=(event)=>{
      const file=event.target.files[0];
      setSelectedimage(file)
      inputs.image1=file;
  }
  
    //   const addHandler=() =>{
    //     console.log("Clicked")
  
    //     console.log(inputs)
    //     axios.post("http://localhost:3005/inew",inputs)
    //     .then((response)=>{
    //       alert("Record Saved")
    //     })
    //     .catch(err=>console.log(err))
        
    // }
    const savedata=()=>{
      const formdata=new FormData();
      formdata.append('Category',inputs.Category);
      formdata.append('Subcategory',inputs.Subcategory);
      // formdata.append('Age',inputs.Age);
      // formdata.append('Course',inputs.Course);
      formdata.append('image1',selectedimage)
      fetch('http://localhost:3005/inew',
      {
          method:'post',
          body:formdata,
      })
      .then((response)=>response.json())
      .then((data)=>{
          alert("record saved")
      })
      .catch((err)=>{
          console.log("error")
      })
  }
      
  

  return (
    <div>
      <h3>Item Registeration</h3>
       <FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
   labelId="demo-simple-select-label"
    name='Category'value={inputs.Category} onChange={inputHandler}>
    {
      ca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.Cname} >{value.Cname}</MenuItem>
        )
      })
    }
  </Select>
</FormControl><br/><br/>
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Subcategory</InputLabel>
  <Select
   labelId="demo-simple-select-label"
    name='Subcategory'value={inputs.Subcategory} onChange={inputHandler}>
    {
      subca.map((value,index)=>{
        return(
          <MenuItem key={index}
          value={value.Sname} >{value.Sname}</MenuItem>
        )
      })
    }
  </Select>
</FormControl><br/><br/>
<label>Upload file</label>
        <input type="file" onChange={handleImage}></input>
        <br /><br />
<Button variant="contained"onClick={savedata}>Submit</Button>
    </div>
  )
}

export default Item
