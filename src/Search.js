import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import BookList from './BookList';
class Search extends Component {
  state = {
    books: [],
    query: ''
  }
  onQueryChange = (event) => {
    const query = event.target.value;
    this.setState((currentState) => ({
      query
    }));
    BooksAPI
      .search(query)
      .then((books) => {
        books && !books.error
          ? this.setState((currentState) => ({
              books
            }))
          : this.setState((currentState) => ({
            books: []
          }));
      });
  }
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.props.onSearchClose}>Close</button>
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