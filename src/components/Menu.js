import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import styles from './Menu.module.css'

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Магазин книг
          </Typography>
          
          <div className={styles.icons}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1.5 }}>
            Всього: <b>0</b> грн.
          </Typography>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1.5 }}>
            Корзина (<b>0</b>)
          </Typography>
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
