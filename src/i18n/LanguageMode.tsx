import { useState } from 'react';
import {
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'react-i18next';
import GenericModal from '../components/modal';

const languages: Record<string, { label: string; flag: string }> = {
  en: { label: 'English', flag: '🇺🇸' },
  fr: { label: 'Français', flag: '🇫🇷' },
  es: { label: 'Español', flag: '🇪🇸' },
  de: { label: 'Deutsch', flag: '🇩🇪' },
  it: { label: 'Italiano', flag: '🇮🇹' },
  pt: { label: 'Português', flag: '🇵🇹' },
  zh: { label: '中文', flag: '🇨🇳' },
  ja: { label: '日本語', flag: '🇯🇵' },
  ru: { label: 'Русский', flag: '🇷🇺' },
  ar: { label: 'العربية', flag: '🇸🇦' },
  hi: { label: 'हिन्दी', flag: '🇮🇳' },
};

const styles = {
  list: {
    maxHeight: '400px',
    overflowY: 'auto',
    display: 'flex',
    flexWrap: 'wrap',
    padding: 0,
  },
  listItem: {
    boxSizing: 'border-box',
  },
  listItemButton: {
    borderRadius: '8px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
  },
};

export default function LanguageMode() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <>
      <Tooltip title="Change Language">
        <IconButton
          onClick={() => setIsOpen(true)}
          aria-label="change language"
          color="inherit"
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>

      <GenericModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Select Language"
        hideSubmitButton
        cancelButtonText="Close"
      >
        <List sx={styles.list}>
          {Object.entries(languages).map(([code, { label, flag }]) => (
            <ListItem key={code} sx={styles.listItem} disablePadding>
              <ListItemButton
                selected={currentLang === code}
                onClick={() => handleSelect(code)}
                sx={styles.listItemButton}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      {flag} {label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </GenericModal>
    </>
  );
}
