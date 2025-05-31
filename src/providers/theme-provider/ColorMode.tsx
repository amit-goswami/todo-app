import { useState } from 'react';
import { useThemeContext } from './ThemeContext';
import {
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Tooltip,
} from '@mui/material';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import GenericModal from '../../components/modal';

const styles = {
  listItemButton: {
    borderRadius: '8px',
    '&:hover': {
      borderRadius: '8px',
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
};

export default function ColorMode() {
  const { themeName, setThemeName } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: 'light' | 'dark' | 'green') => {
    setThemeName(value);
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip title="Change Theme">
        <IconButton
          onClick={() => setIsOpen(true)}
          aria-label="change theme"
          color="inherit"
        >
          <ColorLensIcon />
        </IconButton>
      </Tooltip>

      <GenericModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Theme"
        hideSubmitButton
        cancelButtonText="Close"
      >
        <List>
          <ListItemButton
            selected={themeName === 'light'}
            onClick={() => handleSelect('light')}
            sx={styles.listItemButton}
          >
            <ListItemText primary="🌞 Light" />
          </ListItemButton>

          <ListItemButton
            selected={themeName === 'dark'}
            onClick={() => handleSelect('dark')}
            sx={styles.listItemButton}
          >
            <ListItemText primary="🌙 Dark" />
          </ListItemButton>

          <ListItemButton
            selected={themeName === 'green'}
            onClick={() => handleSelect('green')}
            sx={styles.listItemButton}
          >
            <ListItemText primary="🌿 Green" />
          </ListItemButton>
        </List>
      </GenericModal>
    </>
  );
}
