import React from 'react';
import axios from 'axios';
import CowList from './cowList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cows: [],
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

  render() {
    return(
      <div>
        <h2>HackReactors Cows</h2>
        <CowList cows={this.state.cows}/>
      </div>
    )
  }
}

export default App;