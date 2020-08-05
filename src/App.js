import React, {Component} from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './App.css';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      books: [
        {
          id:1,
          tittle: 'IT',
          author: 'Stephen King',
          genre: 'Horror',
          availability: 'Available',
          image: 1
        },
        {
          id:2,
          tittle: 'Alex Cross',
          author: 'Robert Patterson',
          genre: 'Thriller/Crime',
          availability: 'Unavailable',
          image: 29
        },
        {
          id:3,
          tittle: 'Harry Potter',
          author: 'Jk Rowling',
          genre: 'fiction',
          availability: 'Unavailable',
          image: 40
        },
      ]
    }
  }

  addBook = (data) =>{
    var newBook = {
      id: Date.now(),
      ...data
    }
    var newList = [newBook, ...this.state.books]
    this.setState({
      books: newList
    })
  }
  removeBook = (id) =>{
    var books = this.state.books

    var filtered = books.filter((book)=>{
      return book.id != id
    })

    this.setState({
      books: filtered
    })
  }
  updateBook = (id,data)=>{
    var books = this.state.books
    var updated = books.map((book)=>{
      return (book.id == id)? {...book,...data} : book
    })
    this.setState({
      books:updated
    })
  }

  render(){

    return (
      <div className="wrap">
        <div className="container">
            <div className="section-name">
                <h1>
                    Books For Sale
                </h1>
            </div>
            <div className="books">

              {
                this.state.books.map((book)=>{
                  var bookProps = {
                    key: book.id,
                    removeBook: this.removeBook,
                    updateBook: this.updateBook,
                    ...book
                  }
                  return(
                    <Book {...bookProps}/>
                  )
                })
              }

              <AddBook addBook={this.addBook}/>

            </div>
        </div>
    </div>
    )
  }  
}

export default App;
