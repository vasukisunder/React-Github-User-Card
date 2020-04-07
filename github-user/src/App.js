import React from 'react';
import axios from 'axios';
import './App.css';
import 'typeface-roboto';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
        }]
    };

  }

  componentDidMount() {
    axios.get("https://api.github.com/users/vasukisunder")
    .then(response => {
      this.setState({
        userInfo: response.data,
        username: ""
      })
    })
  }

  handleChange = event => {
    this.setState({
      username: event.target.value
    })
  }

  fetchUser = event => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then(response => {

      this.setState({
        userInfo: response.data
      })
    })

   
  }


  render() {

    return (
      <div>
        <div id="header">
          <h1>Github User Profile</h1>
          <input
            type = "text"
            value = {this.state.username}
            onChange = {this.handleChange} />
          <button onClick = {this.fetchUser}>Search</button>
        </div>
        {[this.state.userInfo].map(user => (
            <div id ="box">
              <div id="text">
                <h2>{user.name}</h2>
                <h3>@{user.login}</h3>
                <p id= "location"> {user.location}</p>

                <p id="bio"> {user.bio}</p>
                

              </div>

              <div id = "pic">
                <img src={user.avatar_url} />
            </div> 
            </div>

          ))}
        

          
          </div>

          )
}
}
export default App;
