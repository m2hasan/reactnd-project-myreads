import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookShelf from './BookShelf';

class BookShelves extends Component {
  getBooksByShelf = (shelf) => {
    return this.props.books.filter((book) => book.shelf === shelf);
  }
  render() {
    const shelvs = [
      {title: 'Currently Reading', key: 'currentlyReading'},
      {title: 'Want to Read', key: 'wantToRead'},
      {title: 'Read', key: 'read'}
    ];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelvs.map((shelf) => (
              <BookShelf key={shelf.key} books={this.getBooksByShelf(shelf.key)} title={shelf.title} onBookMoveTo={this.props.onBookMoveTo} />
            ))}
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