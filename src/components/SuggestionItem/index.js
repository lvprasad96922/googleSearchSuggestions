import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, addOnSuggestion} = props
  const {suggestion} = suggestionDetails
  const onAdd = () => {
    addOnSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-name">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={onAdd}
      />
    </li>
  )
}
export default SuggestionItem
