import React from 'react';
import axios from 'axios';
import CowList from './cowList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
      cowName: '',
      about: ''
    }
  }

  componentDidMount () {
    axios.get('/cows')
      .then(data => {
        this.setState({cows: data.data});
      })
      .catch(err => {
        console.log(err);
      })
  }

  handleCowInput(e) {
    this.setState({[`${e.target.name}`]: e.target.value})
  }

  addCowClick() {
    let sendCow = {cow: this.state.cowName, about: this.state.about}
    axios.post('/cows/add', sendCow)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return(
      <div>
        <input type='text' name='cowName' placeholder='Cow Name' onChange={() => {this.handleCowInput(event)}}/>
        <input type='text' name='about' placeholder='Description' onChange={() => {this.handleCowInput(event)}}/>
        <button type='submit' onClick={()=> {this.addCowClick()}}> Add Cow </button>
        <h2>HackReactors Cows</h2>
        <CowList cows={this.state.cows}/>
      </div>
    )
  }
}

export default App;