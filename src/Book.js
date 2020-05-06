import React, {Component} from 'react';

class Books extends Component {
  render() {
    const {book} = this.props;
    if(!book.shelf) {
      book.shelf = 'none';
    }
    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks && <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>}
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
      </div>
    );
  }
}

export default Books;