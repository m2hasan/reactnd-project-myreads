import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book) => (
            <Book key={book.id} book={book} onBookMoveTo={this.props.onBookMoveTo}/>
        ))}
      </ol>
    );
  }
}

export default BookList;