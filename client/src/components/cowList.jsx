import React from 'react';
import axios from 'axios';

class CowList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showCow: false,
        selectedCow: {},
      }
      this.handleNameClick = this.handleNameClick.bind(this);
    }

  handleNameClick (cowName, cowDef) {
    let clickedCow = {
      cow: cowName,
      about: cowDef,
    }
    this.setState({selectedCow: clickedCow});
    this.setState({showCow: !this.state.showCow});
  };

    render() {
      return (
        <div>
          {this.state.showCow ? (
              <div className='showCow' onClick={()=>{this.handleNameClick()}}>
                <h3>{this.state.selectedCow.cow}</h3>
                <p>{this.state.selectedCow.about}</p>
              </div>
          ) : (
            <div>
              {this.props.cows.map(cow => <CowDisplay cow={cow} key={cow.cow}
              handleNameClick={this.handleNameClick}/>)}
            </div>
          )}
        </div>
      )
    }
}

class CowDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <h3 onClick={() => {this.props.handleNameClick(this.props.cow.cow, this.props.cow.about)}}>
          {this.props.cow.cow}</h3>
      </div>
    )
  }
}
export default CowList;