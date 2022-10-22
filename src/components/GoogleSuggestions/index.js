import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  addOnSuggestion = value => {
    console.log(value)
    this.setState({
      searchInput: value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    // this.setState({addSuggestionList: suggestionsList})

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="input-search-container">
            <div className="input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                className="input-element"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestion-lists">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  addOnSuggestion={this.addOnSuggestion}
                  key={eachSuggestion.id}
                  suggestionDetails={eachSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
