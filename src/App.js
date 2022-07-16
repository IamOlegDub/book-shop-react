import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setBooks } from './Actions/books'
import axios from 'axios'
import Menu from './components/Menu';
import { Container } from '@mui/material';
import BookCard from './components/BookCard';
import styles from './App.module.css'

class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }

  render() {
    const { books, isReady } = this.props
    return (
      <Container fixed>
        <Menu />
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

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
