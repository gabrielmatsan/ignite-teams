// src/styles/styled.d.ts
import 'styled-components';
import theme from '@theme/theme-dark';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  
  export interface DefaultTheme extends ThemeType {}
}