import React, { Component } from 'react'
import axios from 'axios'
import { Container } from '@mui/material';
import BookCard from '../containers/BookCard';
import styles from './App.module.css'
import Menu from '../containers/Menu'
import Filter from './Filter';

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }
  render() {
    const { books, isReady, setFilter, searchQuery, setSearchQuery } = this.props
    console.log(this.books);
    return (
      <Container fixed>
        <Menu />
        <Filter setFilter={setFilter} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className={styles.cards}>
          {!isReady
            ? "...Завантаження"
            : books.map((book, i) => (
              <BookCard key={i} {...book} />
          ))}
        </div>
      </Container>
    )
  }
}

export default App
