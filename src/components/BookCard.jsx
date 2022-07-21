import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';


const BookCard = book => {
  const {title, author, price, image, id, addToCart, addedCount} = book
  return (
    <Card sx={{ maxWidth: 250, boxShadow: 3, margin: 2, width:'100%', padding:0, display:'flex', flexDirection: "column", justifyContent: "space-between" }}>
      <div>
        <CardMedia
        component="img"
        height= "auto"
        sx={{maxWidth: "100%"}}
        image={image}
        alt={id}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {author}
        </Typography>
      </CardContent>
      </div>
      <CardContent sx={{textAlign: "end", marginBottom: 0, paddingBottom: 0}}>
        <Typography gutterBottom variant="h6" color="text.secondary" sx={{marginLeft:1.5, marginBottom: 0}}>
            {Math.floor(price*0.33)} грн. 
        </Typography>
      </CardContent>
      <Button variant="contained" size="small" onClick={addToCart.bind(this, book)}>
        Додати в корзину { addedCount > 0 && `(${addedCount})` }</Button>
    </Card>
  );
}

export default BookCard