
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const Header = styled(AppBar)`
  z-index: 1201;
  background: #9376E0;
  height: 70px;
  box-shadow: inset 3px 3px 3px 3px #19376D;
`

const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 25px;
`


const HeaderBar = ({ open, handleDrawer }) => {
  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';
  
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: '20px'}}
          edge="start"
        >
          <Menu />
        </IconButton>
        <img src={logo} alt="logo" style={{width: 30}} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  )
}

export default HeaderBar;