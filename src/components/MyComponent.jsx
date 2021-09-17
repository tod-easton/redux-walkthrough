import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addTodo } from '../actions'

class MyComponent extends Component {
  state = { todo: '' }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state.todo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="whatever">Author</label>
          <input
            type="text"
            className="form-control"
            id="whatever"
            value={this.state.author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </div>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  addTodo,
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(MyComponent);