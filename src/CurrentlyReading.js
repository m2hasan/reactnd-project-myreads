import React, {Component} from 'react';
import BookList from './BookList';

class CurrentlyReading extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <BookList books={this.props.books} onBookMoveTo={this.props.onBookMoveTo} />
        </div>
      </div>
    );
  }
}

export default CurrentlyReading;