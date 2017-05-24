import React from "react";

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "Your name...",
      titleTask: ""
    }
  }

  handleEnterName = () => {
    let enterName = prompt("Enter your name...")

    this.setState({
      name: enterName,
      titleTask: "# Your tasks " + enterName
    })
  }

  render() {
    return (
      <header className="header">
          <div className="header__box">
            <button type="text" className="header__btn" onClick={this.handleEnterName}>
                    {this.state.name}
            </button>
          </div>
          <h2> {this.state.titleTask} </h2>
      </header>
    )
  }
}

export default Header
