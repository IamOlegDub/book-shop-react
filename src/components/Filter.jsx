import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'transparent',
    '&:hover': {
      borderBottom: 'solid 3px',
      borderColor: "#1976d2",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#1976d2'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Filter = ({setFilter, searchQuery, setSearchQuery}) => {
    const [value, setValue] = React.useState('all');
    console.log('COMPONENT - ', searchQuery);
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setFilter(newValue);
  };
    const onHandleChange = (event) => {
      setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab value="all" label="Всі" />
        <Tab value="price-high" label="Ціна(дорогі)" />
        <Tab value="price-low" label="Ціна (дешеві)" />
        <Tab value="author" label="Автор" />
      </Tabs>
    <Search>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="ПОШУК..."
            onChange={onHandleChange}
            value={searchQuery}
            inputProps={{ 'aria-label': 'search' }}
        />
        </Search>
    </Box>
  );
}


export default Filter