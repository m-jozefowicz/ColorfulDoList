import React from 'react';
import ToDoItem from "./ToDoItem.jsx"

class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main className="list__todos">
        <ToDoItem />
        <ToDoItem />
      </main>
    )
  }
}

export default ToDoList;
