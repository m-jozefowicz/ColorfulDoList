import React from 'react';

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ""
    }
  }


  render() {
    return (
      <header className="header">
        <div className="header__input">
          <input type="text" placeholder="Your name..." onClick={this.handleEnterName}/>
        </div>

      </header>
    )
  }
}

export default Header
