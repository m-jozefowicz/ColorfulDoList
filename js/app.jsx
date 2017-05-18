
import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header.jsx';
// import NewToDoItem from './Components/NewToDoItem.jsx';
// import ToDoList from './Components/ToDoList.jsx';

require("../scss/main.scss");

class App extends React.Component {
  render() {
    return (
      <div className="app__container">
        <Header />
        {/*<ToDoList />
        <NewToDoItem />*/}
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function(){
  ReactDOM.render (
    <App />,
    document.getElementById('app')
  )
});
