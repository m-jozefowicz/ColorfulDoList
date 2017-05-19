import React from 'react';

class NewToDoItem extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <footer className="footer">
        <div className="footer__box">

          <input type="text" placeholder="Enter your task..."
                 className="footer__input--text" />
          <img src="./img/add-icon2.png" className="footer__input--sent"       
               alt="add-icon" />

        </div>

      </footer>
    )
  }

}

export default NewToDoItem;
