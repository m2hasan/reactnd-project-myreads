import React from 'react';
import * as BooksAPI from './BooksAPI'
import Search from './Search';
import BookShelves from './BookShelves';
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }
  componentDidMount () {
    BooksAPI
      .getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
      });
  }
  bookExists = (book) => {
    return this.state.books.filter((b) => b.id === book.id).length > 0;
  }
  addBookToShelf = (book, shelf) => {
    book.shelf = shelf;
    this.setState((currentState) => ({
      books: this.bookExists(book)
        ? currentState.books.map((b) => {
          (b.id === book.id) && (b.shelf = shelf);
          return b;
        })
        : currentState.books.concat(book)
    }));
    BooksAPI.update(book, shelf);
  }
  moveBookToShelf = (book, shelf) => {
    this.setState((currentState) => ({
      books: currentState.books.map((b) => {
        (b.id === book.id) && (b.shelf = shelf);
        return b;
      })
    }));
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search onSearchClose={() => this.setState({ showSearchPage: false })} onBookMoveTo={this.addBookToShelf} />
        ) : (
          <BookShelves books={this.state.books} onSearchOpen={() => this.setState({ showSearchPage: true })} onBookMoveTo={this.moveBookToShelf} />
        )}
      </div>
    )
  }
}

export default BooksApp
