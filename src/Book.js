import React, {Component} from 'react';

class Book extends Component{
  constructor(props){
    super(props)
    this.state = {

        tittleUpdating: false,
        tittleInput: this.props.tittle,

        authorUpdating: false,
        authorInput: this.props.author,

        genreUpdating: false,
        genreInput: this.props.genre,

        availabilityUpdating: false,
        availabilityInput: this.props.availability,
    }
  }
    tittleDoubleClick = (e)=>{
        this.setState({
            tittleUpdating: true
        })
    }
    tittleInputBlur = (e)=>{
      var id = this.props.id
      var data = {
          tittle:this.state.tittleInput
      }
      this.props.updateBook(id,data)

        this.setState({
            tittleUpdating: false
        })
    }
    tittleInputChange = (e)=>{
        this.setState({
            tittleInput: e.target.value
        })
    }
    authorDoubleClick = (e)=>{
        this.setState({
            authorUpdating: true
        })
    }
    authorInputBlur = (e)=>{
        var id = this.props.id
        var data = {
            author:this.state.authorInput
        }
        this.props.updateBook(id,data)

        this.setState({
            authorUpdating: false
        })
    }
    authorInputChange = (e)=>{
        this.setState({
            authorInput: e.target.value
        })
    }
  removeClick = (e)=>{
      var id = this.props.id
      this.props.removeBook(id)  
  }

    render(){

        return (
            <div className="book">
                <i className="far fa-times-circle remove-book" onClick={this.removeClick}></i>
                <div className="book-tittle" onDoubleClick={this.tittleDoubleClick}>
                    {
                        this.state.tittleUpdating == true ? (
                        <input type="text" className="change-input" value={this.state.tittleInput} onBlur={this.tittleInputBlur} onChange={this.tittleInputChange}></input>
                        ) : this.props.tittle
                    }
                </div>
                <div className="book-author"  onDoubleClick={this.authorDoubleClick}>
                    {
                        this.state.authorUpdating == true ? (
                        <input type="text" className="change-input" value={this.state.authorInput} onBlur={this.authorInputBlur} onChange={this.authorInputChange}></input>
                        ) : this.props.author
                    }
                </div>
                <div className="book-genre">
                    {
                        this.state.genreUpdating == true ? (
                        <input type="text" className="change-input" value={this.state.genreInput} onBlur={this.genreInputBlur} onChange={this.genreInputChange}></input>
                        ) : this.props.genre
                    }
                </div>
                <div className="book-availability av">
                    {
                        this.state.availabilityUpdating == true ? (
                        <input type="text" className="change-input" value={this.state.availabilityInput} onBlur={this.availabilityInputBlur} onChange={this.availabilityInputChange}></input>
                        ) : this.props.availability
                    }
                </div>
                <div className="book-image">
                    <img src={'https://picsum.photos/id/'+this.props.image+'/200/300'}/>
                </div>
            </div>
        )
    }  
}

export default Book;
