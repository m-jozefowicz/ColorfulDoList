import React from "react";

class ToDoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="task">
        <span className="task__text">Make a cake!</span>
        <div className="task__btn">
          <button type="image" className="icon-ok" onClick={this.handleBtnOK}></button>
          <button type="image" className="icon-trash-empty"></button>
        </div>
      </div>
    )
  }
}

export default ToDoItem;
