import React, {Component} from 'react';
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
          <button onClick={this.props.onSearchOpen}>Add a book</button>
        </div>
      </div>
    );
  }
}

export default BookShelves;