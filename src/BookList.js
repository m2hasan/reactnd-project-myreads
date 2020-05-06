import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <ol className="books-grid">
        <Book />
        <Book />
        <Book />
      </ol>
    );
  }
}

export default BookList;