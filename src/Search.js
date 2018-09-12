import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      usLocation: '',
      // usCity: '',
    }
  }

  submitLocation() {
     this.props.resetLocation(this.state);;
  }

  render() {
    return (
      <div>
        <form 
          className='Search'>
          <p>Search By City/State or ZipCode </p>
          <input 
            placeholder='Enter Location Here'
            type='text'
            value={this.state.usLocation}
            onChange={(event) => {
              this.setState({
                usLocation: event.target.value
              })
            }}
           /> 
           <div>
            { (this.props.trie.wordCount > 0 && this.state.usLocation.length > 0) &&
              this.props.trie.suggest(this.state.usLocation).map(word => {
                return <input value={word} />
              })
            }
           </div>
          <button
            onClick={(event) => {
              event.preventDefault();
              this.submitLocation();
              this.setState({
                usLocation: '',
              })
            }}
          > 
          Submit Location
          </button>
        </form>
      </div>

      );
  }
}



