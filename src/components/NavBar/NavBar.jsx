import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { TiThMenu } from "react-icons/ti";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';
import MenuItem from '@mui/material/MenuItem';  

const pages = [
    {id: '1', etiqueta: 'Acerca del evento'}, 
    {id: '2', etiqueta: 'Ubicacion'}, 
    {id: '3', etiqueta: 'Programa'},
    {id: '4', etiqueta: 'Información de pago'}, 
    {id: '5', etiqueta: 'Bloques Temáticos'},
    {id: '6', etiqueta: 'Pre-Inscribirse'},
];

function MenuBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{  backgroundColor: 'rgb(25, 25, 45, 0.5)'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHDE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
    
            >
              <TiThMenu size={40}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <ScrollLink 
                to={page.id} 
                onClick={page.id==='6' ? () =>
                (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                ) : handleCloseNavMenu}
                smooth={true} 
                duration={500}
                >
                    <MenuItem key={page.id}>
                        <Typography textAlign="center">{page.etiqueta}</Typography>
                    </MenuItem>
                </ScrollLink>
              ))}
            </Menu>
          </Box>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
            <ScrollLink to={page.id} smooth={true} duration={500}>
              <Button
                key={page.id}
                onClick={page.id==='6' ? () =>
                (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                 ) : handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.etiqueta}
                {/*<a href={`#${page.id}`} style={{textDecoration: 'none'}} />*/}
              </Button>
            </ScrollLink>     
            ))}
          </Box>
          <img src={'logo1.png'} alt='logo' />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MenuBar;