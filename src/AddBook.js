import React, {Component} from 'react';

class AddBook extends Component{
  constructor(props){
    super(props)
    this.state = {
        tittleInput: '',
        authorInput: '',
        genreInput: '',
        availabilityInput: '',
        imageinput: '',
    }
  }
  tittleInputChange =(e)=>{
    this.setState({
        tittleInput: e.target.value
    })
  }
  authorInputChange =(e)=>{
    this.setState({
        authorInput: e.target.value
    })
  }
  genreInputChange =(e)=>{
    this.setState({
        genreInput: e.target.value
    })
  }
  availabilityInputChange =(e)=>{
    this.setState({
        availabilityInput: e.target.value
    })
  }
  imageInputChange =(e)=>{
    this.setState({
        imageInput: e.target.value
    })
  }
  addButtonClick = (e)=>{
      e.preventDefault()
      var data = {
          tittle: this.state.tittleInput,
          author: this.state.authorInput,
          genre: this.state.genreInput,
          availability: this.state.availabilityInput,
          image: this.state.imageInput,
      }
      this.props.addBook(data)
      this.setState({
          tittleInput: '',
          authorInput: '',
          genreInput: '',
          availabilityInput: '',
          imageInput: '',
      })
  }


    render(){

        return (
            <div className="book add-book">
            <form className="new-book">
                <div className="form-input">
                    <label>Tittle</label>
                    <input type="text" className="tittle-input" id="tittle" value={this.state.tittleInput} onChange={this.tittleInputChange}></input>
                </div>
                <div className="form-input">
                    <label>Author</label>
                    <input type="text" className="author-input" id="author" value={this.state.authorInput} onChange={this.authorInputChange}></input>
                </div>
                <div className="form-input">
                    <label>Genre</label>
                    <input type="text" className="genre-input" id="genre" value={this.state.genreInput} onChange={this.genreInputChange}></input>
                </div>
                <div className="form-input">
                    <label>Availability</label>
                    <input type="text" className="availability-input" id="availability" value={this.state.availabilityInput} onChange={this.availabilityInputChange}></input>
                </div>
                <div className="form-input">
                    <label>Image Number</label>
                    <input type="text" className="image-input" id="image" value={this.state.imageInput} onChange={this.imageInputChange}></input>
                </div>
                <button type="submit" className="add-btn" onClick={this.addButtonClick}><i className="fas fa-plus-square"></i> <h4>Add New Book</h4></button>
            </form>
            </div>
        ) 
    }
}           

export default AddBook;