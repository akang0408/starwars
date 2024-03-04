import { PaletteMode } from '@mui/material';

export const theme = {
  alternate: {
    main: '#1a2138',
    dark: '#151a30',
  },
  cardShadow: 'rgba(0, 0, 0, .11)',
  common: {
    black: '#000',
    white: '#fff',
  },
  mode: 'dark' as PaletteMode,
  primary: {
    main: '#1976d2',
    light: '#2196f3',
    dark: '#0d47a1',
    contrastText: '#fff',
  },
  secondary: {
    light: '#FCE41C',
    main: '#FFE102',
    dark: '#DBBE01',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  text: {
    primary: '#EEEEEF',
    secondary: '#AEB0B4',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#000000',
    default: '#000000',
    level2: '#111111',
    level1: '#222222',
  },
};
