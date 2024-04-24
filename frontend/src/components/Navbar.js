


import { Link } from 'react-router-dom';


// const Navbar = () => {

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" style={{ flexGrow: 1 }}>
//           School Management System
//         </Typography>
//         <Button color="inherit" component={Link} to="/">
//           Home
//         </Button>
//         <Button color="inherit" component={Link} to="/admin">
//           Admin
//         </Button>
//         <Button color="inherit" component={Link} to="/teacher">
//           Teacher
//         </Button>
//         <Button color="inherit" component={Link} to="/student">
//           Student
//         </Button>
//         <Button color="inherit" component={Link} to="/parent">
//           Parent
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 


  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/signup');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOME
          </Typography>
          {auth && (
            <div>
               <Button color="inherit" onClick={handleMenu}>Login</Button>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleSubmit}>Admin</MenuItem>
                <MenuItem onClick={handleClose}>Teacher</MenuItem>
                <MenuItem onClick={handleClose}>Student</MenuItem>
                <MenuItem onClick={handleClose}>Parent</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}