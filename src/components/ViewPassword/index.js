import {Component} from 'react'

import './index.css'

class ViewPassword extends Component {
  state = {
    WebsiteLink: '',
    Username: '',
    Password: '',
    passwordDetails: [],
  }

  OnChangeWebsite = event => {
    this.setState({WebsiteLink: event.target.value})
  }

  OnChangeUser = event => {
    this.setState({Username: event.target.value})
  }

  OnChangePassword = event => {
    this.setState({Password: event.target.value})
  }

  GetPasswordDetails = event => {
    const {Username, Password, WebsiteLink} = this.state

    event.preventDefault()

    const newPassword = {
      username: Username,
      password: Password,
      websiteLink: WebsiteLink,
    }

    this.setState(prevState => ({
      passWordDetails: [...prevState.passWordDetails, newPassword],
    }))
  }

  render() {
    const {passwordDetails} = this.state
    console.log(passwordDetails)

    return (
      <div className="App-container">
        <img
          className="app-logo"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="Password-container">
          <div className="password-section">
            <div className="password-block">
              <form
                className="password-form"
                onSubmit={this.GetPasswordDetails}
              >
                <h1 className="password-text">Add new Password</h1>
                <div className="input-container">
                  <img
                    className="input-icons"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                  />
                  <input
                    className="input-box"
                    placeholder="Enter Website"
                    type="text"
                    onChange={this.OnChangeWebsite}
                  />
                </div>
                <div className="input-container">
                  <img
                    className="input-icons"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                  />
                  <input
                    className="input-box"
                    placeholder="Enter Username"
                    type="text"
                    onChange={this.OnChangeUser}
                  />
                </div>

                <div className="input-container">
                  <img
                    className="input-icons"
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                  />
                  <input
                    className="input-box"
                    placeholder="Enter Password"
                    type="password"
                    onChange={this.OnChangePassword}
                  />
                </div>
                <div className="add-btn-container">
                  <button className="Add-btn" type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              className="password-manager-img"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>

        <div className="show-password-container">
          <div className="password-header">
            <p className="your-password-text">Your Password</p>
            <div className="input-search-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="input-search"
                placeholder="Enter Password"
                type="search"
              />
            </div>
          </div>
          <hr className="line" />
        </div>
      </div>
    )
  }
}

export default ViewPassword
