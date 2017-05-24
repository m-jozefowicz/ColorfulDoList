import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/Header.jsx';
import NewToDoItem from './Components/NewToDoItem.jsx';
import ToDoList from './Components/ToDoList.jsx';
import Footer from './Components/Footer.jsx';

require("../scss/main.scss");

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="app__container">
        <Header />
        <NewToDoItem />
        <ToDoList />
        <Footer />
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
