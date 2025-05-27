import MenuItem from '@mui/material/MenuItem';
import { type SelectProps } from '@mui/material/Select';
import { useThemeContext } from './ThemeContext';
import { StyledSelect, Wrapper } from '../../components/select';

export default function ColorModeSelect(props: SelectProps) {
  const { themeName, setThemeName } = useThemeContext();

  return (
    <Wrapper>
      <StyledSelect
        value={themeName}
        onChange={event =>
          setThemeName(event.target.value as 'light' | 'dark' | 'green')
        }
        SelectDisplayProps={{
          'aria-label': 'Color mode',
        }}
        fullWidth
        {...props}
      >
        <MenuItem value="light">🌞 Light</MenuItem>
        <MenuItem value="dark">🌙 Dark</MenuItem>
        <MenuItem value="green">🌿 Green</MenuItem>
      </StyledSelect>
    </Wrapper>
  );
}

