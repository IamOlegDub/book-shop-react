import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';


import styles from './Menu.module.css'

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <div style={{display: "flex"}}>
    <Figure style={{marginLeft: 10}}>
      <Figure.Image
        width={45}
        height={55}
        alt="171x180"
        src={image}
      />
    </Figure>
    <span className={styles.title}>{title}</span>
    <Button variant="danger" onClick={removeFromCart.bind(this, id)} style={{height:40, width: "auto", marginLeft: 10, marginRight: 10}}>Видалити</Button>
  </div>
      
)


function Menu({ totalPrice, count, items }) {
  return (
    <Box sx={{ flexGrow: 1, position: "static" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Магазин книг
          </Typography>
          
          <div className={styles.icons}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, m: 1.5 }}>
              Всього: <b>{ Math.floor(totalPrice*0.33) }</b> грн.
          </Typography>
          
          <Dropdown as={ButtonGroup}>
            <Button variant="primary" style={{backgroundColor: "#1976d2", border: "none"}}>Корзина</Button>
            <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" style={{backgroundColor: "#1976d2", border: "none"}}/>
              <Dropdown.Menu className='items' style={{width: 400, paddingBottom: 0}}>
                {items.length > 0 ? items.map(book => <CartComponent {...book} style={{padding: 0}} />) : <span className={styles.basket}>Тут порожньо :-( </span>}
              </Dropdown.Menu>
           </Dropdown>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Menu