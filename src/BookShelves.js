import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

class BookShelves extends Component {
  getBooksByShelf = (shelf) => {
    return this.props.books.filter((book) => book.shelf === shelf);
  }
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading onBookMoveTo={this.props.onBookMoveTo} books={this.getBooksByShelf('currentlyReading')} />
            <WantToRead onBookMoveTo={this.props.onBookMoveTo} books={this.getBooksByShelf('wantToRead')} />
            <Read onBookMoveTo={this.props.onBookMoveTo} books={this.getBooksByShelf('read')} />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookShelves;