"use client"
import { useState } from "react"
import "./Search.css"

const Search = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const suggestions = [
    "Lip shape",
    "Gloss",
    "Tint",
    "Pocket blush",
    "Hydrating lip plump",
    "Balm",
    "Foundation",
    "Serum",
    "Contact us",
    "faq",
  ]

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    console.log("Search for:", suggestion)
    // Add your search logic here
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      console.log("Search submitted:", searchQuery)
      // Add your search logic here
    }
  }

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  if (!isOpen) return null

  return (
    <div className="search-overlay">
      {/* Background backdrop */}
      <div className="search-backdrop" onClick={onClose}></div>

      {/* Search sidebar */}
      <div className="search-sidebar">
        {/* Header */}
        <div className="search-header">
          <h2 className="search-title">Search</h2>
          <button className="search-close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Type here"
            className="search-input"
            autoFocus
          />
        </form>

        {/* Suggestions */}
        <div className="suggestions-section">
          <h3 className="suggestions-title">Suggestions:</h3>
          <div className="suggestions-list">
            {(searchQuery ? filteredSuggestions : suggestions).map((suggestion, index) => (
              <button key={index} onClick={() => handleSuggestionClick(suggestion)} className="suggestion-item">
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
