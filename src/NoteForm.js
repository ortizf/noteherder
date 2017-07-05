/*import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  render() {
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
            />
          </p>
          
          <textarea name="body"></textarea>
        </form>
      </div>
    )
  }
}

export default NoteForm*/

import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      note: this.blankNote(),
    }
  }

  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    ) 
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
            ></textarea>
          </p>
          <button type="submit">Save and new</button>
        </form>
      </div>
    )
  }
}

export default NoteForm