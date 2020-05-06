import React, {Component} from 'react';
import BookList from './BookList';

class Read extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <BookList />
        </div>
      </div>
    );
  }
}

export default Read;