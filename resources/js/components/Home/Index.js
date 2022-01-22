import React from 'react';

import Category from '@/components/Category/Category';
import { theme } from '@/theme'
import { ThemeProvider } from '@mui/material/styles';


{/* HomeのIndexメインコンポーネント */}
export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Category />
    </ThemeProvider>
  );
}
