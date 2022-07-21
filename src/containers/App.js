import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../Actions/books'
import * as filterActions from '../Actions/filter'
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
  console.log(filterBy);
  switch (filterBy) {
    case 'price-high':
      return orderBy(books, 'price', 'desc')
    case 'price-low':
      return orderBy(books, 'price', 'asc')
    case 'author':
      return orderBy(books, 'author', 'asc')
    default:
      return books;
  }
}

const filterBooks = (books, searchQuery) => 
  books.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  )



const searchBooks = (books, filterBy, searchQuery) => {
  return sortBy(filterBooks(books, searchQuery), filterBy)
}


const mapStateToProps = ({ books, filter }) => ({
  books: books.items && searchBooks(books.items, filter.filterBy, filter.searchQuery),
  isReady: books.isReady,
  filterBy: filter.filterBy
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksActions, dispatch),
  ...bindActionCreators(filterActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App);