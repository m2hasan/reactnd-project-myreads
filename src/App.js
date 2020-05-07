import React from 'react';
import * as BooksAPI from './BooksAPI';
import {Switch, Route} from 'react-router-dom';
import Search from './Search';
import BookShelves from './BookShelves';
import './App.css';

class BooksApp extends React.Component {
  state = {
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
    return this.state.books.find((b) => b.id === book.id);
  }
  getShelfById = (id) => {
    const foundBook =  this.state.books.find((b) => b.id === id);
    return foundBook ? foundBook.shelf : '';
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
        <Switch>
          <Route path='/search' render={() => (
            <Search onBookMoveTo={this.addBookToShelf} getShelfById={this.getShelfById} />
          )}/>
          <Route path='/' render={() => (
            <BookShelves books={this.state.books} onBookMoveTo={this.moveBookToShelf} />
          )}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
