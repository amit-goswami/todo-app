import MenuItem from '@mui/material/MenuItem';
import { type SelectProps } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { StyledSelect, Wrapper } from '../components/select';

const Language = {
  en: 'English',
  fr: 'Français',
};

export default function LanguageModeSelect(props: SelectProps) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleChange = (event: UniversalType) => {
    const newLang = event.target.value as keyof typeof Language;
    i18n.changeLanguage(newLang);
  };

  return (
    <Wrapper>
      <StyledSelect
        value={currentLanguage}
        onChange={handleChange}
        SelectDisplayProps={{
          'aria-label': 'Language',
        }}
        fullWidth
        {...props}
      >
        {Object.entries(Language).map(([code, label]) => (
          <MenuItem key={code} value={code}>
            {label}
          </MenuItem>
        ))}
      </StyledSelect>
    </Wrapper>
  );
}
