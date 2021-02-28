import React from "react"

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      date: "",
    }
  }

  componentDidMount() {
    let currentDate = new Date()
    this.setState({ date: currentDate.toDateString() })
  }

  render() {
    return (
      <div className="row">
        <img src="assets/Head.png" alt="Background" />
        <h1 id="currentDate">{this.state.date}</h1>
      </div>
    )
  }
}

export default Header
