import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
} from '@mui/material';
import { useSidebarContext } from './provider';
import { DRAWER_WIDTH, MINI_DRAWER_WIDTH } from '../../utils/constants';
import MailIcon from '@mui/icons-material/Mail';
import FloatingPositionedBox from '../box';
import LanguageMode from '../../i18n/LanguageMode';
import ColorMode from '../../providers/theme-provider/ColorMode';
import LogoutFeature from '../../features/auth/components/logout';
import withAuthGuard from '../../middlewares/withAuthGuard';

const Sidebar = () => {
  const { drawerOpen } = useSidebarContext();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerOpen ? DRAWER_WIDTH : MINI_DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: 'width 0.3s',
        [`& .MuiDrawer-paper`]: {
          width: drawerOpen ? DRAWER_WIDTH : MINI_DRAWER_WIDTH,
          transition: 'width 0.3s',
          overflowX: 'hidden',
        },
        backgroundColor: theme => theme.palette.background.paper,
      }}
    >
      <Toolbar />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!drawerOpen ? text : ''} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                {drawerOpen && <ListItemText primary={text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'block' }}>
            <Tooltip title={!drawerOpen ? text : ''} placement="right">
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: drawerOpen ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: drawerOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MailIcon />
                </ListItemIcon>
                {drawerOpen && <ListItemText primary={text} />}
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <FloatingPositionedBox position="bottom-left">
        <Box
          sx={{
            display: 'flex',
            flexDirection: drawerOpen ? 'row' : 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <LanguageMode />
          <ColorMode />
          <LogoutFeature />
        </Box>
      </FloatingPositionedBox>
    </Drawer>
  );
};

export default withAuthGuard(Sidebar);
