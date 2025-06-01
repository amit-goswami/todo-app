import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import GenericModal from '../../../../components/modal';

export default function LogoutFeature() {
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    console.log('User logged out');
    setLogoutModalOpen(false);
  };

  return (
    <>
      <Tooltip title="Logout">
        <IconButton
          onClick={() => setLogoutModalOpen(true)}
          aria-label="logout"
          color="inherit"
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>

      <GenericModal
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        title="Confirm Logout"
        hideSubmitButton
        cancelButtonText="No"
        submitButtonText="Yes"
        onSubmit={handleLogout}
      >
        Are you sure you want to logout?
      </GenericModal>
    </>
  );
}
