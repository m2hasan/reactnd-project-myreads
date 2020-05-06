import React, {Component} from 'react';
import BookList from './BookList';

class WantToRead extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} />
        </div>
      </div>
    );
  }
}

export default WantToRead;