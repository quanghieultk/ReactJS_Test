import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteForm extends Component {

    constructor(props) {
      super(props);
      this.state = {
        noteTitle:'',
        noteContent: ''
      }
    }
    
    isChange = (event) => {
      const name = event.target.name ; 
      const value = event.target.value;       
      this.setState({
        [name]:value
      })
    }

    addData = (title,content) => {
      var item = {}; 
      item.noteTitle = title; 
      item.noteContent= content;        
      this.props.addDataStore(item);  // su dung reducer trong store , // displatch ADD_DATA
     
    }
    render() {
        return (
            <div className="col-4">
            <h3>SỬA NỘI DUNG NOTE</h3>
            <form>
            <div className="form-group">
              <label htmlFor="noteTitle">Tiêu đề note</label>
              <input onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Tiêu đề note" />
              <small id="helpIdNoteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
            </div>
            <div className="form-group">
              <label htmlFor="noteContent">Nội dung note</label>
              <textarea onChange={(event) =>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTitle" aria-describedby="helpIdNoteTitle" placeholder="Nội dung note" defaultValue={" "} />
              <small id="helpIdNoteTitle" className="form-text text-muted">Điền nội dung vào đây</small>
            </div>
            <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary btn-block">Lưu</button>
            </form>
          </div>
          
        );
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    testThoi: state.testConnect
  }
}
// this.props.testThoi
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (getItem) => {
      dispatch({type:"ADD_DATA",getItem})
    }
  }
}
// this.props.addDataStore()

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm) ;