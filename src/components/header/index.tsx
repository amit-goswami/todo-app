import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
  Box,
  Menu,
  MenuItem,
  Button,
} from '@mui/material';
import { useSidebarContext } from '../sidebar/provider';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageModeSelect from '../../i18n/LanguageModeSelect';
import ColorModeSelect from '../../providers/theme-provider/ColorModeSelect';

const navItems = ['Home', 'Features', 'Pricing', 'Contact'];

const Header = () => {
  const theme = useTheme();
  const { toggleDrawer } = useSidebarContext();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={toggleDrawer}
        >
          IRB
        </Typography>

        {/* Mobile */}
        {isMobile && (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {navItems.map(item => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}

        {/*  Desktop */}
        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map(item => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
            <LanguageModeSelect />
            <ColorModeSelect />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
