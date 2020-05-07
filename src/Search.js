import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import {Link} from 'react-router-dom';
import BookList from './BookList';
import { throttle } from 'lodash';
class Search extends Component {
  state = {
    books: [],
    query: ''
  }
  constructor(props) {
    super(props);
    this.searchBooksThrottled = throttle(this.searchBooks, 1000, { leading: false });
  }
  searchBooks = (query) => {
    query
      ? BooksAPI
        .search(query)
        .then((books) => {
          books && !books.error
            ? this.setState((currentState) => ({
                books: books.filter((book) => book.imageLinks).map((book) => {
                  book.shelf = this.props.getShelfById(book.id)
                  return book;
                })
              }))
            : this.setState((currentState) => ({
              books: []
            }));
        })
      : this.setState((currentState) => ({
          books: []
        }));
  }
  onQueryChange = (event) => {
    const {value} = event.target;
    this.setState((currentState) => ({
      query: value
    }));
    this.searchBooksThrottled(value);
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
            >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.onQueryChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookList books={this.state.books} onBookMoveTo={this.props.onBookMoveTo} />
        </div>
      </div>
    );
  }
}

export default Search;