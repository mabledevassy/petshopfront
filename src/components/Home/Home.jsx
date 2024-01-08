import { AppBar, Box, Button,IconButton,  Menu,  MenuItem,  MenuList,  Paper,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Home = () => {
    // export default function MenuPopupState() 
  return (
    <div>
      <Box sx={{flexGrow:1}}>
        <AppBar position="static">
            <Toolbar> 
                {/* <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="menu"
                sx={{mr:2}}>
                    <MenuIcon/>
                    <AdminPanelSettingsIcon/>
        
                </IconButton> */}
                 
                {/* <Paper> */}
        <MenuList>
          <MenuItem>Category</MenuItem>
          <MenuItem>Subcategory</MenuItem>
          <MenuItem>Categoryview</MenuItem>
          <MenuItem>Subcategoryview</MenuItem>
        </MenuList>
      {/* </Paper> */}
                <Typography variant="h6" component="div"sx={{flexGrow:1}}>
                    PetNet
                </Typography>
               {/* <div>
                <Button color="inherit"><Link to='/c'> Category</Link>
                   </Button>
           
               </div>
               <div>
                <Button color="inherit"><Link to='/s'>Subcategory</Link>
                    </Button>
           
               </div> */}



                <Button color="inherit">SIGN UP</Button>
            </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Home