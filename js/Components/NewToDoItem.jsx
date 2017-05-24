import React from 'react';

class NewToDoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      values: "",
      todos: []
    }
  }

  handleSubmit = event => {
    event.preventDefault();

  }

  handleTaskChange = event => {
    this.setState({
      values: event.target.value
    })
  }

  render() {
    return (
      <div className = "input__section">
        <div className = "input__box">
            <form onSubmit = {this.handleSubmit}>
              <input type = "text"
                     className = "input__text"
                     placeholder = "Enter your task..."
                     onChange = {this.handleTaskChange} />

              <input type = "submit"
                     value = "ADD"
                     className = "input__send" />
            </form>
        </div>
        </div>
    )
  }
}

export default NewToDoItem;
